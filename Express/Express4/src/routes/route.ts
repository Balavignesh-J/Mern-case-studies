import { Router } from "express";
import { TransferSchema } from '../types/validate'
import {TransferRequest} from '../types/type'
import { error } from "node:console";

const router = Router()

router.post(
  "/transfer",
  validate(TransferSchema),
  async (req: Request<{}, {}, TransferRequest>, res: Response) => {
    const { fromCustomerId, toCustomerId, points } = req.body;

    if (fromCustomerId === toCustomerId) {
      throw new error("Same Account Transfer not possible");
    }

    const sender = await db.loyaltyMembers.findOne({ customerId: fromCustomerId });
    if (!sender) {
      throw new error("Customer not found");
    }

    const receiver = await db.loyaltyMembers.findOne({ customerId: toCustomerId });
    if (!receiver) {
      throw new error("Customer not found");
    }

    if (sender.points < points) {
      throw new error("Insuffcient error");
    }

    await db.loyaltyMembers.updateOne(
      { customerId: fromCustomerId },
      { $inc: { points: -points } }
    );

    await db.loyaltyMembers.updateOne(
      { customerId: toCustomerId },
      { $inc: { points: points } }
    );

    res.json({status: "success",data: {fromCustomerId,toCustomerId,transferred: points,senderRemainingPoints: sender.points - points,},});
  }
);