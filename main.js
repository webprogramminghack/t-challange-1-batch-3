'use strict';

function calculateFinance(inputIncome, inputExpense) {
  // Please complete the task below.
  // For income and expenses, use the parameters inputIncome and inputExpenses.

  // Initialize variables

  // Adding Income
  // Tips: You need to convert the inputIncome to numbers

  // Adding Expense
  // Tips: You need to convert the inputIncometo numbers

  // Calculating balance and using nullish coalescing if balance is null or undefined, make it 0

  // Checking Balance Status
  // Tips: You need to use if else and comparations

  // Comparing Income vs Expense
  // Tips: You need to use if else and comparations

  // Do not delete the code below.
  // Displaying final results
  console.log(`Total Income: ${totalIncome}`);
  console.log(`Total Expense: ${totalExpense}`);
  console.log(`Total Balance: ${balance}`);

  return {
    totalIncome,
    totalExpense,
    balance,
  };
}

module.exports = { calculateFinance };
