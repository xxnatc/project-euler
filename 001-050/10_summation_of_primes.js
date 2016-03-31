// Problem 10
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

'use strict';

function sumPrime(n) {
  // implementation of the sieve of Eratosthenes to quickly pick out prime numbers
  function getPrimes(max) {
    let sieve = [], primes = [];
    for (let i = 2; i <= max; i++) {
      if (!sieve[i]) {
        primes.push(i);

        for (let j = i; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  }

  return getPrimes(n).reduce((prev, curr) => prev + curr);
}

console.log(sumPrime(10));  // 17
console.log(sumPrime(2e6));
