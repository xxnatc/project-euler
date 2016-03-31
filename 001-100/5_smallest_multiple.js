// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from
// 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?


// Scratch notes:
//        1   2   3   4   5   6   7   8   9   10
// 2520 = 1 * 2 * 3 * 2 * 5 * 1 * 7 * 2 * 3 * 1

// Reduce numbers by factoring out previous numbers, if any
// e.g. 6 = 2 * 3 so 6 can be reduced to 1;
//      8 = 2 * 2 * 2, but there're only two 2s in front of it so 8 reduces to 2

'use strict';

function smallestMultiple(min, max) {
  let multipliers = [];
  for (var i = min; i <= max; i++) {
    multipliers.push(i);
  }
  console.log('before', multipliers);

  for (let i = 0; i < multipliers.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (multipliers[i] % multipliers[j] === 0)
        multipliers[i] = multipliers[i] / multipliers[j];
    }
  }

  // multipliers is now the "reduced" version of the numbers
  console.log('after', multipliers);

  return multipliers.reduce((prev, curr) => prev * curr, 1);
}

console.log(smallestMultiple(1, 10));  // 2520
console.log(smallestMultiple(1, 20));
