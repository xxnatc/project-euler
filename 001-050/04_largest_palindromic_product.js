// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

'use strict';

function isPalindome(num) {
  let str = num.toString();
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

function largestPalindrome(digits) {
  let n1 = Math.pow(10, digits) - 1;
  let n2 = Math.pow(10, digits) - 1;
  let palin = [];
  while (n1 > 0) {
    while (n2 > 0) {
      if (isPalindome(n1 * n2)) {
        palin.push(n1 * n2);
      }
      n2 -= 1;
    }
    n1 -= 1;
    n2 = Math.pow(10, digits) - 1;
  }
  return (palin.length) ? palin.sort((a, b) => a - b)[palin.length - 1] : null;
}

console.log(largestPalindrome(2));  // 9009
console.log(largestPalindrome(3));
