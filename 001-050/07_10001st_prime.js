// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.

// What is the 10001st prime number?

'use strict';

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function nthPrime(n) {
  if (n < 0) return 'invalid parameter';
  let primes = [];
  let curr = 1;

  while (primes.length < n) {
    if (isPrime(curr)) primes.push(curr);
    curr++;
  }

  return primes[n - 1];
}

console.log(nthPrime(6));  // 13
console.log(nthPrime(10001));
