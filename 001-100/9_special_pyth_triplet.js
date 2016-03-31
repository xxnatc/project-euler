// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//             a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

'use strict';

function isPythTriplet(a, b, c) {
  return a * a + b * b === c * c;
}

function findSpecialPythTriplet(max) {
  let a = 1, b = 1;
  while (a < max) {
    while (b < max) {
      if (isPythTriplet(a, b, max - a - b)) return a * b * (max - a - b);
      b += 1;
    }
    a += 1;
    b = 1;
  }
  return null;
}

console.log(findSpecialPythTriplet(12));  // 60 (= 3 * 4 * 5)
console.log(findSpecialPythTriplet(1000));
