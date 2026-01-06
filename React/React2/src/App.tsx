import './App.css'
import BudgetTracker from "./Component/BudgetTracker";

function App() {

  return (
    <>
      <BudgetTracker
        rates={{
          USD: 1,
          EUR: 0.92,
          INR: 90,
        }}
      />
    </>
  )
}

export default App
