import React, { useReducer, useState } from "react";

type Currency = "USD" | "EUR" | "INR";
type TransactionType = "income" | "expense";

interface Transaction {
  id: number;
  amount: number;
  currency: Currency;
  type: TransactionType;
  date: Date;
}

type TransactionAction =
  | { type: "ADD_TRANSACTION"; payload: Transaction };

function transactionReducer(state:Transaction[],action:TransactionAction):Transaction[] {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state,action.payload]
    default:
      return state;
  }
}

  const BudgetTracker = () => {
  const [transactions, dispatch] = useReducer(transactionReducer, []);  
  const [amount, setamount] = useState<number>(0);
  const [currency, setcurrency] = useState<Currency>("USD");
  const [type, setType] = useState<TransactionType>("income");

  function handlesubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newtransaction:Transaction={
      id: Date.now(),
      amount,
      currency,
      type,
      date: new Date()
    };

    dispatch({type:"ADD_TRANSACTION",payload:newtransaction})
    setamount(0);
  }

  return (
    <>
      <div>BudgetTracker</div>
      <form onSubmit={handlesubmit}>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => {
            setamount(Number(e.target.value));
          }}
        />

        <select
          name="income"
          id="0"
          value={currency}
          onChange={(e) => {
            setcurrency(e.target.value as Currency);
          }}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value as TransactionType)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <ul>
        {transactions.map((t)=>(
          <li key={t.id}>
            {t.type.toUpperCase()} - {t.amount} {t.currency}
          </li>
        ))}
      </ul>
    </>
  );
};

export default BudgetTracker;
