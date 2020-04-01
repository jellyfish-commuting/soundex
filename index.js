// Letter mapping
const codes = {
  B: '1', F: '1', P: '1', V: '1',
  C: '2', G: '2', J: '2', K: '2', Q: '2', S: '2', X: '2', Z: '2',
  D: '3', T: '3',
  L: '4',
  M: '5', N: '5',
  R: '6',
};

//-------
// Soundex
//-------
module.exports = function (str) {
  // Uppercase to match letter according mapping
  const buffer = String(str).trim().toUpperCase();

  // Empty ?
  if (!buffer.length) {
    return '0000';
  }

  // Init result
  let result = buffer.charAt(0) + (codes[buffer.charAt(1)] || '');

  // Map all chars
  for(let i = 2; i < buffer.length; i += 1) {
    // Init var
    const code = codes[buffer.charAt(i)];
    const previous = buffer.charAt(i - 1);

    // Should ignore letter ?
    if(
      // If letter has equal code than previous ?
      !code || code === codes[previous]

      // Also, apply rule: "two letters with the same number separated by 'h' or 'w' are coded as a single number"
      || (((previous === 'H' || previous === 'W') && code === codes[buffer.charAt(i - 2)]))
    ) {
      continue;
    }

    result += code;
  }

  return result.slice(0, 4).padEnd(4, '0');
};
