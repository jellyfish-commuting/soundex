// Letter mapping
const codes = new Map(Object.entries({
  B: 1, F: 1, P: 1, V: 1,
  C: 2, G: 2, J: 2, K: 2, Q: 2, S: 2, X: 2, Z: 2,
  D: 3, T: 3,
  L: 4,
  M: 5, N: 5,
  R: 6,
  A: 0, E: 0, I: 0, O: 0, U: 0,
}));

//-------
// Soundex
//-------
module.exports = function (str, length = 4) {
  // Remove spaces and capitalize
  const buffer = String(str).trim().toUpperCase();

  // Init result
  let result = buffer.charAt(0);
  let previous = codes.get(result);

  // Map all chars
  for(let i = 1; i < buffer.length; i += 1) {
    // Retrieve current values
    const letter = buffer.charAt(i);
    const code = codes.get(letter);

    // Ignore letter
    if (code === undefined) {
      continue;
    }

    // Append code if different than previous
    if(code && code !== previous) {
      result += code;

      // Soundex key is fulfilled ?
      if (result.length === length) {
        return result;
      }
    }

    // Save previous for next loop
    previous = code;
  }

  // Fill with 0
  return result.padEnd(4, '0');
};
