import React, { useReducer, useState } from "react";

type Currency = "USD" | "EUR" | "INR";

interface IncomeEntry {
  id: number;
  amount: number;
  currency: Currency;
  date: Date;
}

interface ExpenseEntry {
  id: number;
  amount: number;
  currency: Currency;
  date: Date;
}

type BudgetEntry =
  | { kind: "income"; data: IncomeEntry }
  | { kind: "expense"; data: ExpenseEntry };

interface ConversionRates {
  USD: number;
  EUR: number;
  INR: number;
}

interface BudgetTrackerProps {
  rates: ConversionRates;
}

interface BudgetState {
  readonly entries: ReadonlyArray<BudgetEntry>;
  readonly balanceUSD: number;
}

type BudgetAction =
  | { type: "addIncome"; payload: IncomeEntry }
  | { type: "addExpense"; payload: ExpenseEntry };

function budgetReducer(
  state: BudgetState,
  action: BudgetAction,
  rates: ConversionRates
): BudgetState {
  switch (action.type) {
    case "addIncome": {
      const amountUSD = action.payload.amount / rates[action.payload.currency];

      return {
        entries: [
          ...state.entries,
          { kind: "income", data: action.payload }
        ],
        balanceUSD: state.balanceUSD + amountUSD
      };
    }

    case "addExpense": {
      const amountUSD = action.payload.amount / rates[action.payload.currency];

      if (amountUSD > state.balanceUSD) {
        return state;
      }

      return {
        entries: [
          ...state.entries,
          { kind: "expense", data: action.payload }
        ],
        balanceUSD: state.balanceUSD - amountUSD
      };
    }

    default:
      return state;
  }
}

const BudgetTracker: React.FC<BudgetTrackerProps> = ({ rates }) => {
  const [state, dispatchBase] = useReducer(
    (s: BudgetState, a: BudgetAction) => budgetReducer(s, a, rates),
    { entries: [], balanceUSD: 0 }
  );

  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [type, setType] = useState<"income" | "expense">("income");
  const [displayCurrency, setDisplayCurrency] = useState<Currency>("USD");

  const displayedBalance =
    state.balanceUSD * rates[displayCurrency];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (amount <= 0) return;

    const baseData = {
      id: Date.now(),
      amount,
      currency,
      date: new Date()
    };

    if (type === "income") {
      dispatchBase({ type: "addIncome", payload: baseData });
    } else {
      dispatchBase({ type: "addExpense", payload: baseData });
    }

    setAmount(0);
  }

  return (
    <>
      <h2>Budget Tracker</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as Currency)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value as "income" | "expense")}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button type="submit">Add</button>
      </form>

      <ul>
        {state.entries.map((entry) => (
          <li key={entry.data.id}>
            {entry.kind.toUpperCase()} — {entry.data.amount}{" "}
            {entry.data.currency}
          </li>
        ))}
      </ul>

      <h3>
        Net Balance:
        <select
          value={displayCurrency}
          onChange={(e) =>
            setDisplayCurrency(e.target.value as Currency)
          }
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
      </h3>

      <p>
        {displayedBalance.toFixed(2)} {displayCurrency}
      </p>
    </>
  );
};

export default BudgetTracker;