// Problem 67
// By starting at the top of the triangle below and moving to adjacent numbers
// on the row below, the maximum total from top to bottom is 23.
//             3
//            7 4
//           2 4 6
//          8 5 9 3
// That is, 3 + 7 + 4 + 9 = 23.
// Find the maximum total from top to bottom in triangle.txt, a 15K text file
// containing a triangle with one-hundred rows.

// Note: This is a much more difficult version of Problem 18. It is not possible
// to try every route to solve this problem, as there are 299 altogether! If you
// could check one trillion (1012) routes every second it would take over twenty
// billion years to check them all. There is an efficient algorithm to solve it.

// Solved the same way as problem 18

const fs = require('fs');

// load and construct triangle array
var tri = fs.readFileSync(__dirname + '/067_triangle.txt', 'utf-8')
  .split('\n')
  .map(el => el.split(' ').map(num => parseInt(num)))
  .filter((el) => !isNaN(el[0]));
console.log(tri.length);

function maxPathSum(triArr) {
  // truncate the tree layer by layer, starting from the bottom
  for (var i = triArr.length - 2; i >= 0; i--) {
    for (var j = 0; j < triArr[i].length; j++) {
      if (triArr[i + 1][j] > triArr[i + 1][j + 1]) {
        // left children is larger
        triArr[i][j] += triArr[i + 1][j];
      } else {
        // right children is larger
        triArr[i][j] += triArr[i + 1][j + 1];
      }
    }
  }

  return triArr[0][0];
}

console.log(maxPathSum(tri));
