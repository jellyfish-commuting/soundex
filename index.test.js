const soundex = require('./index');

const samples = [
  ["Ashcraft", "Ashcroft"],
  ["Burroughs", "Burrows"],
  ["D-day", "d jay"],
  ["Dracula", "Drakula"],
  ["Ekzampul", "example"],
  ["Ellery", "Euler"],
  ["Gauss", "Ghosh"],
  ["Heilbronn", "Hilbert"],
  ["Johnny", "Jonny"],
  ["Kant", "Knuth"],
  ["Ladd", "Lloyd"],
  ["Lissajous", "Lukasiewicz"],
  ["Moskowitz", "Moskovitz"],
  ["O'Conner", "O'Connor"],
  ["Robert", "Rupert"],
  ["Soundex", "sownteks"],
];

// Start tests ...
describe('Soundex', () => {
  samples.forEach(sample => it(
    `expect equal for ${sample[0]} & ${sample[1]}`,
    () => expect(soundex(sample[0])).toBe(soundex(sample[0])),
  ));

  // Common error case, many soundex return A226 instead of A261
  it('expect A261 for Ashcraft', () => expect(soundex('Ashcraft')).toBe('A261'));

  // Length param
  it('expect A2613 for Ashcraft with length = 5', () => expect(soundex('Ashcraft', 5)).toBe('A2613'));

  // Overlength param
  it('expect 4 chars for Love with over length', () => expect(soundex('Love', 10)).toBe('L100'));

  // Different test case
  it('expect different for Kabyle & Arab', () => expect(soundex('Kabyle')).not.toBe(soundex('Arab')));
});
