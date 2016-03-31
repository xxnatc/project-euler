// Problem 16
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

'use strict';
function powerDigitSum(power) {
  let number = [1];

  for (let i = 0; i < power; i++) {
    let overflow = 0;

    for (let j = 0; j < number.length; j++) {
      let digit = 2 * number[j] + overflow;

      if (digit > 9) {
        overflow = 1;
        digit -= 10;
      } else {
        overflow = 0;
      }
      number[j] = digit;
    }

    if (overflow) number[number.length] = overflow;
  }

  return number.reduce((prev, curr) => prev + curr, 0);
}

console.log(powerDigitSum(15));  // 26
console.log(powerDigitSum(1000));
