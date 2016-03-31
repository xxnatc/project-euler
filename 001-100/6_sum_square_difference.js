// Problem 6
// The sum of the squares of the first ten natural numbers is,
//           1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
//           (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural
// numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

'use strict';

function sumSquareDiff(num) {
  let numList = [];
  for (let i = 1; i <= num; i++) {
    numList.push(i);
  }

  let sumOfSquares = numList.map(el => el * el).reduce((prev, curr) => prev + curr, 0);
  let squareOfSum = Math.pow(numList.reduce((prev, curr) => prev + curr, 0), 2);

  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDiff(10));  // 2640
console.log(sumSquareDiff(100));
