// Problem 14
// The following iterative sequence is defined for the set of positive integers:
//          n → n/2 (n is even)
//          n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:
//          13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains
// 10 terms. Although it has not been proved yet (Collatz Problem), it is thought
// that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?
// Note: Once the chain starts the terms are allowed to go above one million.

'use strict';

function longestCollatz(maxStart) {
  let max = {
    start: 0,
    terms: 0
  };

  for (let i = maxStart; i > 1; i--) {
    let currTerms = countTerms(i);
    if (currTerms > max.terms) {
      max.start = i;
      max.terms = currTerms;
    }
  }

  console.dir(max);
  return max.start;
}

function countTerms(start) {
  let count = 0;

  function collatz(n) {
    count += 1;
    if (n === 1) return;

    let next = (n % 2) ? (3 * n + 1) : (n / 2);
    collatz(next);
  }

  collatz(start);
  return count;
}

console.log(longestCollatz(1e6));
