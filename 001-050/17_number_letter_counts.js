// Problem 17
// If the numbers 1 to 5 are written out in words: one, two, three, four, five,
// then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out
// in words, how many letters would be used?

// Note: Do not count spaces or hyphens. For example, 342 (three hundred and
// forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20
// letters. The use of "and" when writing out numbers is in compliance with
// British usage.

'use strict';

let bases = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let layers = ['hundred', 'thousand'];

function numToWords(num) {
  // some error checking
  if (typeof num !== 'number') return 'Please enter a number.';
  if (Math.floor(num) !== num) return 'Please enter an integer.';

  let numArr = num.toString().split('').reverse();
  if (numArr.length > 4) return 'Please enter a number with 4 digits or less (max = 9999).';

  let result = '';
  for (let i = numArr.length - 1; i >= 0; i--) {
    let digit = parseInt(numArr[i]);

    if (i > 1 && digit) {
      if (result.length) result += ' ';
      result += `${bases[digit]} ${layers[i - 2]}`;
    }

    if (i === 2) {
      if (parseInt(numArr[0]) || parseInt(numArr[1])) result += ' and ';
      else return result;  // is the last significant digit
    }

    if (i === 1) {
      if (digit > 1) {
        result += `${tens[digit - 2]}`;
      } else {
        let teen = parseInt(numArr[1] + numArr[0]);
        return result += `${bases[teen]}`
      }
    }

    if (i === 0 && digit) {
      result += ` ${bases[digit]}`;
    }
  }
  return result;
}

function numberLetterCount(min, max) {
  let count = 0;
  for (let i = min; i <= max; i++) {
    // #numToWords() includes spaces for more generic use
    // so the spaces need to be removed before counting
    count += numToWords(i).replace(/ /g, '').length;
  }
  return count;
}

console.log(numberLetterCount(1, 5));  // 19
console.log(numberLetterCount(1, 1000));
