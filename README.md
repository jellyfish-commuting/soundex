[![Version](https://img.shields.io/npm/v/@jellyfish-commuting/soundex)](https://www.npmjs.com/package/@jellyfish-commuting/soundex)
[![Licence](https://img.shields.io/npm/l/@jellyfish-commuting/soundex)](https://en.wikipedia.org/wiki/MIT_license)
[![Build](https://img.shields.io/travis/jellyfish-commuting/soundex)](https://travis-ci.org/github/jellyfish-commuting/soundex)
[![Coverage](https://img.shields.io/codecov/c/github/jellyfish-commuting/soundex)](https://codecov.io/gh/jellyfish-commuting/soundex)
[![Downloads](https://img.shields.io/npm/dt/@jellyfish-commuting/soundex)](https://www.npmjs.com/package/@jellyfish-commuting/soundex)

# soundex
Calculate soundex key of a string by implementing the rules described on the wikipedia page
Compliant, optimized and small package to get soundex key

For mapping and formula, see https://en.wikipedia.org/wiki/Soundex#American_Soundex

### Install
```bash
yarn add @jellyfish-commuting/soundex
```
or
```bash
npm install @jellyfish-commuting/soundex
```
### Usage
```javascript
import soundex from '@jellyfish-commuting/soundex';

// Test 'Ashcraft' (it's a common error in soundex implementation)
console.log(soundex('Ashcraft')); // Output A261 (... not A226)

// Test equal phonetics
if (soundex('Robert') === soundex('Rupert')) {
  console.log('Equal soundex');
} else {
  console.log('Different soundex');
}

// Output : Equal soundex
```

### Params

```javascript
soundex(str, length = 4);
```

| Prop     | Type     |  Default         | Note                  |
|----------|----------|------------------|-----------------------|
| `str`    | `string` | _Required field_ | Input value           |
| `length` | `int`    | `4`              | Length of soundex key |


### Return value

Soundex key of `length` chars
