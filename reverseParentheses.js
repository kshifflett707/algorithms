function reverseParentheses(s) {
  if (s.includes('(')) {
    return reverseParentheses(reverse(s))
  } else {
    return s
  }
}

let reverse = (s) => {
  let start = s.slice(0, s.indexOf('('))
  let middle = s.slice(s.indexOf('(') + 1, firstBalance(s))
  let end = s.slice(firstBalance(s) + 1, s.length)
  return start + reverseParentheses(middle).split('').reverse().join('') + end
}

let firstBalance = (str) => {
  let start = str.indexOf('(')
  let i = start + 1
  let openCount, closeCount = 0 
  let end

  if (start !== -1) {
    openCount = 1
    while (openCount !== closeCount) {
      if (str.charAt(i) === '(') {
        openCount++
      } else if (str.charAt(i) === ')') {
        closeCount++
      }
      i++
    }
  }
  end = i - 1
  return end
}

console.log(firstBalance('ab(dsdf)sad(fsdf)'));

console.log(reverseParentheses("ab(ab(bc))"));
