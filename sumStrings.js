// Given the string representations of two integers, 
// return the string representation of the sum of those 
// integers.

// For example:

// sumStrings('1','2') // => '3'

// A string representation of an integer will contain no 
// characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
  var strip = /^0+/;
  a = a.replace(strip, '').split('').reverse();
  b = b.replace(strip, '').split('').reverse();
  var result = [], max = Math.max(a.length, b.length);
  for (var mem = 0, i = 0; i < max; i++) {
    var res = parseInt(a[i] || 0) + parseInt(b[i] || 0) + mem;
    result[i] = res % 10;
    mem = (res - result[i]) / 10;
  }
  if (mem) {
    result.push(mem);
  }
  return result.reverse().join('');
}

console.log(sumStrings('3234234232343223465441423', '423421442123414132'));