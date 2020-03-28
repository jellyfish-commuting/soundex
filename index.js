//-------
// Soundex
//-------
module.exports = function (str) {
  // Keep letters only
  const buffer = String(str).toUpperCase().replace(/[^A-Z]/g, '');

  // Empty string ?
  if (!buffer.length) {
    return '0000';
  }

  // Letter mapping
  const codes = {
    B: '1', F: '1', P: '1', V: '1',
    C: '2', G: '2', J: '2', K: '2', Q: '2', S: '2', X: '2', Z: '2',
    D: '3', T: '3',
    L: '4',
    M: '5', N: '5',
    R: '6',
  };

  return [...buffer.slice(1)]
    // Map all chars in buffer
    .reduce(
      (acc, letter, i) => {
        // Different than previous letter ?
        if (codes[letter] && codes[letter] !== codes[buffer[i]]) {
          return acc + codes[letter];
        }

        return acc;
      },
      // Init accumulator with first letter
      buffer[0],
    )
    // Fill with 0
    .padEnd(4, '0')
    // Return the five first chars
    .slice(0, 4);
};
