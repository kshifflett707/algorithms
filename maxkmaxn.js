function doubles(maxk, maxn) {
  let sum = 0
  for (let k = 1; k <= maxk; k++) {
    for (let i = 0; i < maxn; i++) {
      sum += (1 / (k * Math.pow((i + 1) + 1, (2 * k)))); 
    }
  }
  return sum;
}

console.log(doubles(10, 1000));