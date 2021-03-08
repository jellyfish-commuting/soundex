[![Version](https://img.shields.io/npm/v/@jollie/soundex)](https://www.npmjs.com/package/@jollie/soundex)
[![Licence](https://img.shields.io/npm/l/@jollie/soundex)](https://en.wikipedia.org/wiki/MIT_license)
[![Build](https://img.shields.io/travis/com/thejellyfih/soundex)](https://travis-ci.com/github/thejellyfih/soundex)
[![Coverage](https://img.shields.io/codecov/c/github/thejellyfih/soundex)](https://codecov.io/gh/thejellyfih/soundex)
[![Downloads](https://img.shields.io/npm/dt/@jollie/soundex)](https://www.npmjs.com/package/@jollie/soundex)

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
