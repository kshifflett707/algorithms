// Your task, is to create a NxN spiral with a given size.

// For example, spiral with size 5 should look like this:

// 00000
// ....0
// 000.0
// 0...0
// 00000

// and with the size 10:

// 0000000000
// .........0
// 00000000.0
// 0......0.0
// 0.0000.0.0
// 0.0..0.0.0
// 0.0....0.0
// 0.000000.0
// 0........0
// 0000000000
// Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

// [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Because of the edge-cases for tiny spirals, the size will be at least 5.

// General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.

var spiralize = function(size) {
  let grid = []
  for (let i = 0; i < size; i++) {
    grid[i] = Array(size).fill(0)
  }
  let min = 0
  let max = size
  while (min < max) {
    for (let i = min; i < max; i++) {
      grid[min][i] = 1 //First row
      grid[i][max-1] = 1  //Last column
      if (max - min > 2) grid[max-1][i] = 1   //Last row
      if (i >= min + 2) grid[i][min] = 1     //First column
      if (i === min + 2) grid[i][min+1] = 1  //Curl
    }
    min += 2
    max -= 2
  }
  return grid
}

console.log(spiralize(5));