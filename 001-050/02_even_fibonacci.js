// Problem 2
// Each new term in the Fibonacci sequence is generated by adding the previous
// two terms. By starting with 1 and 2, the first 10 terms will be:
//                    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not
// exceed four million, find the sum of the even-valued terms.

'use strict';

function sumEvenFibonacci(upperLimit) {
  let sum = 0;
  let prev = [1, 1];
  let curr = prev[0] + prev[1];
  while (curr < upperLimit) {
    if (curr % 2 === 0) {
      sum += curr;
    }
    prev[0] = prev[1];
    prev[1] = curr;
    curr = prev[0] + prev[1];
  }
  return sum;
}

console.log(sumEvenFibonacci(89));  // 44 (= 2 + 8 + 34)
console.log(sumEvenFibonacci(4e6));