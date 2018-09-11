//             2
//            / \
//           /   \
//          /     \
//         /       \
//        /         \
//       7           5
//      / \           \
//     /   \           \
//    2     6           9
//         / \         /
//        /   \       /
//       5     11    4

/*
  1. create a tree data structure for placing nodes
  2. create recursive function to parse tree nodes
  3. while there are parentheses, recurse through input string
  4. place nodes on each call of the iteration
*/

let treeBottom = (tree) => {
  let count = 0;
  let depth = 0;
  let solution = []
  for (let i = 0; i < tree.length; i++) {
    if (tree.charAt(i) === '(') {
      count++
      if (count > depth && tree.charAt(i+1) !== ')') {
        depth = count
      }
    } else if (tree.charAt(i) === ')') {
      count--
    }
  }
  for (let i = 0; i < tree.length; i++) {
    if (tree.charAt(i) === '(') {
      count++
      if (count === depth) {
        let num = ''
        let j = i + 1;
        while (tree.charAt(j) !== ')' && tree.charAt(j) !== ' ') {
          num += tree.charAt(j)
          j++
        }
        if (num !== '') solution.push(num)
      }
    } else if (tree.charAt(i) === ')') {
      count--
    }
  }
  return solution
}

// Iterate through input string
// keep a deep count
// for every open paren, increment deep count if (value exists after)
// keep track of max deepCount
// , decrement for every closing paren
// loop through input again, using max depth to add values in each position
// that exists after openParen count balance = maxCount



//      1  2  3  43 432 3  4* 54 543 4*  54 54321 2  32 3  4* 54 543 43210
tree = "(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))"
console.log(treeBottom(tree)); // Desired output: [5, 11, 4].