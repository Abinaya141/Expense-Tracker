import React from "react";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div>
      <h3>Expenses List</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span className="expense-category">{expense.category}</span>
            <span className="expense-amount">₹{expense.amount}</span>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
