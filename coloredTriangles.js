function triangle(row) {
  let map = {RG: 'B', GR: 'B', RB: 'G', BR: 'G', GB: 'R', BG: 'R', BB: 'B', RR: 'R', GG: 'G'}
  while (row.length > 1) {
    row = [...row].reduce((a,b,i) => i ? a + map[[row[i-1] + row[i]]] : a, '')
  }
  return row;
}

console.log(triangle('RBGGBRGBGRGRGBGGBGBBBRBRGRGBRGRB'));