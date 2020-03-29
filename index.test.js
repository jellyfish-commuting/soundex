const soundex = require('./index');

// Start tests ...
describe('Soundex', () => {
  it('expect equal for Kabyle & Kapile', () => expect(soundex('Kabyle')).toBe(soundex('Kapile')));
  it('expect equal for Robert & Rupert', () => expect(soundex('Robert')).toBe(soundex('Rupert')));
  it('expect equal for Ashcraft & Ashcroft', () => expect(soundex('Ashcraft')).toBe(soundex('Ashcroft')));
  it('expect different for Kabyle & Arab', () => expect(soundex('Kabyle')).not.toBe(soundex('Arab')));
});
