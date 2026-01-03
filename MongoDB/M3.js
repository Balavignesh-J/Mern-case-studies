/* Your Turn!
You’re building a new feature for FinTrust:

Refund a payment: If a user disputes a payment, you must:

Add the refund amount back to the sender’s balance.

Subtract the amount from the recipient’s balance.

Update the original transaction’s status to “refunded.”

Log a new transaction record as a refund.

Ensure:

If any step fails (e.g., recipient doesn’t have enough balance to refund), no changes are made.

All operations are ACID-compliant.

Write a MongoDB transaction (pseudo-code or JavaScript) to implement this. */

/* 
Sample data
db.users.insertMany([
  {
    _id: ObjectId("665f4d7e8b3e6c1e24a7b3e1"),
    name: "Alice",
    balance: 500
  },
  {
    _id: ObjectId("665f4d7e8b3e6c1e24a7b3e2"),
    name: "Bob",
    balance: 300
  }
]);
*/

/* 
Sample Transaction Data
db.transactions.insertOne({
  _id: ObjectId("665faaaa8b3e6c1e24a7b999"),
  from: ObjectId("665f4d7e8b3e6c1e24a7b3e1"),
  to: ObjectId("665f4d7e8b3e6c1e24a7b3e2"),
  amount: 100,
  date: new Date(),
  status: "completed"
});
*/

//Code
const session = db.getMongo().startSession();
const dbSession = session.getDatabase("fintrust");

try {
  session.startTransaction();

  const originalTxnId = ObjectId("665faaaa8b3e6c1e24a7b999");
  const refundAmount = 100;

  const originalTxn = dbSession.transactions.findOne(
    { _id: originalTxnId, status: "completed" },
    { session }
  );

  if (!originalTxn) {
    throw new Error("Original transaction not found or already refunded");
  }

  const recipient = dbSession.users.findOne(
    { _id: originalTxn.to },
    { session }
  );

  if (!recipient || recipient.balance < refundAmount) {
    throw new Error("Recipient has insufficient balance for refund");
  }

  dbSession.users.updateOne(
    { _id: originalTxn.to },
    { $inc: { balance: -refundAmount } },
    { session }
  );

  dbSession.users.updateOne(
    { _id: originalTxn.from },
    { $inc: { balance: refundAmount } },
    { session }
  );

  const updateResult = dbSession.transactions.updateOne(
    { _id: originalTxnId, status: "completed" },
    { $set: { status: "refunded", refundedAt: new Date() } },
    { session }
  );

  if (updateResult.matchedCount !== 1) {
    throw new Error("Transaction already refunded by another process");
  }

  dbSession.transactions.insertOne({
    from: originalTxn.to,
    to: originalTxn.from,
    amount: refundAmount,
    date: new Date(),
    status: "refund",
    originalTransactionId: originalTxnId
  }, { session });

  session.commitTransaction();
  print("Refund completed successfully");

} catch (e) {
  session.abortTransaction();
  print("Refund failed:", e.message);
} finally {
  session.endSession();
}