function encodeRailFenceCipher(string, numberRails) {
  let rails = [], encoded = ''
  for (let i = 0; i < numberRails; i++) {    
    rails[i] = []
    for (let j = 0; j < string.length; j += (numberRails - 1) * 2) {
      if (i === 0) rails[i].push(string[i+j])
      if (i === numberRails - 1) rails[i].push(string[i+j])
      if (i !== 0 && i !== numberRails - 1) {
        rails[i].push(string[(i+j)-(i*2)])
        rails[i].push(string[i+j])
      }
    }
  }
  for (let i = 0; i < numberRails; i++) {
    rails[i].forEach(char => {
      char !== undefined ? encoded += char : null
    })
  }

  return encoded
}

function decodeRailFenceCipher(string, numberRails) {
  var rails = new Array(numberRails);

  for (var i = 0; i < numberRails; i++) {
    rails[i] = new Array(string.length+1);
  }

  for (let i = 0; i < rails.length; i++) {
    for (let j = 0; j < rails[i].length; j++) {
      rails[i][j] = '.'
    }
  }

  let dir_down;
  let row = 0, col = 0;

  for (let i = 0; i < string.length+1; i++) {
    if (row === 0)
      dir_down = true;
    if (row === numberRails-1)
      dir_down = false;

    rails[row][col++] = '%'
    dir_down ? row++ : row--;
  }

  let index = 0;
  for (let i = 0; i < numberRails; i++)
    for (let j = 0; j < string.length; j++)
      if (rails[i][j] === '%' && index < string.length)
        rails[i][j] = string[index++];

  let result = '';

  row = 0, col = 0;
  for (let i = 0; i < string.length; i++) {
    if (row === 0)
      dir_down = true;
    if (row === numberRails-1)
      dir_down = false;   
    if (rails[row][col] !== '%')
      result += rails[row][col++];

    dir_down ? row++ : row--;
  }
  return result;
}


console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3));
console.log(decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3));