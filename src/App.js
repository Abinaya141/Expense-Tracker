import React, { useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import ExpenseCategoryChart from "./components/ExpenseCategoryChart";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([
      ...expenses,
      { ...expense, id: Date.now(), date: new Date() },
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <AddExpense addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <ExpenseCategoryChart expenses={expenses} />
    </div>
  );
};

export default App;
