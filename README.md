[![Version](https://img.shields.io/npm/v/@thejellyfish/soundex)](https://www.npmjs.com/package/@thejellyfish/soundex)
[![Licence](https://img.shields.io/npm/l/@thejellyfish/soundex)](https://en.wikipedia.org/wiki/ISC_license)
[![Build](https://img.shields.io/travis/thejellyfish/soundex)](https://travis-ci.org/github/thejellyfish/soundex)
[![Coverage](https://img.shields.io/codecov/c/github/thejellyfish/soundex)](https://codecov.io/gh/thejellyfish/soundex)
[![Downloads](https://img.shields.io/npm/dt/@thejellyfish/soundex)](https://www.npmjs.com/package/@thejellyfish/soundex)

# soundex
Calculate the soundex key of a string by implementing the rules described on the wikipedia page     
Compliant, optimized and small package to get the soundex key   
   
For mapping and formula, see https://en.wikipedia.org/wiki/Soundex#American_Soundex 

### Install
```bash
yarn add @thejellyfish/soundex
```
or
```bash
npm install @thejellyfish/soundex
```
### Usage
```javascript
import soundex from '@thejellyfish/soundex';

// Test 'Ashcraft' (it's a common error in soundex implementation)
console.log(soundex('Ashcraft')); // Output A261 (... not A226)

// Test equal phonetics
if (!soundex('Robert').localeCompare(soundex('Rupert'))) {
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

| Prop     | Type     |  Default         | Note                      |
|----------|----------|------------------|---------------------------|
| `str`    | `string` | _Required field_ | Input value               |
| `length` | `int`    | `4`              | Length of the soundex key |


### Return value

Soundex key of `length` chars
