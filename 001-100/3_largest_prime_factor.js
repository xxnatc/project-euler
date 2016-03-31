// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

'use strict';

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let primes = [];

function maxPrimeFactor(num) {
  let results = [];

  function primeFactor(curr) {
    if (curr === 1) return;

    let prevMaxPrime = (primes.length) ? primes[primes.length - 1] : 1;

    for (var i = 0; i < primes.length; i++) {
      if (curr % primes[i] === 0) {
        results.push(i);
        return primeFactor(curr / i);
      }
    }

    for (var i = prevMaxPrime + 1; i <= curr; i++) {
      if (isPrime(i)) {
        primes.push(i);
        if (curr % i === 0) {
          results.push(i);
          return primeFactor(curr / i);
        }
      }
    }
  }

  primeFactor(num);
  let sortedUniqPrimes = results
    .filter((el, index, arr) => arr.indexOf(el) === index)
    .sort((a, b) => a - b);
  return sortedUniqPrimes[sortedUniqPrimes.length - 1];
}

console.log(maxPrimeFactor(13195));  // 29
console.log(maxPrimeFactor(600851475143));
