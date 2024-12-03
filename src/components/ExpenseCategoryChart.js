// src/components/ExpenseCategoryChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseCategoryChart = ({ expenses }) => {
  const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = acc[expense.category] || 0;
    acc[expense.category] += parseFloat(expense.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: [
          "#ffbb00",
          "#ff3e3e",
          "#00d2d6",
          "#29c4ff",
          "#f2c9ff",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div
      className="chart-container"
      style={{ position: "relative", height: "300px" }}
    >
      <h3>Expense Breakdown by Category</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpenseCategoryChart;
