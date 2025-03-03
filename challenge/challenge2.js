'use strict';

// Please complete the task below.
// Make a function to check even number, the name should isEven

// Make a function to check odd number, the name should isOdd

// Do not delete the code below
const checkEvenOdd = () => {
  // Make input from user using prompt

  // Change the input to array

  // Initialize variables to store even and odd numbers arrays

  // Use iteration to check even and odd numbers

  // Do not delete the code below.
  // Displaying final results
  console.log(`Even numbers: ${evenNumbers.join(', ')}`);
  console.log(`Odd numbers: ${oddNumbers.join(', ')}`);

  return {
    even: evenNumbers,
    odd: oddNumbers,
  };
};

// Memulai program
module.exports = { checkEvenOdd, isEven, isOdd };
