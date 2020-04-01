# soundex
Calculate the soundex key of a string by implementing the rules described on the wikipedia page     
Compliant, optimized and small package to get the soundex key   
   
For mapping and formula used, see https://en.wikipedia.org/wiki/Soundex#American_Soundex 

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

// Test 'Ashcraft' (common error on soundex implementation)
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
soundex(str, length);
```

| Prop     | Type     |  Default       | Note                            |
|----------|----------|----------------|---------------------------------|
| `str`    | `string` | Required field | String to calculate soundex key |
| `length` | `int`    | `4`            | Length of the soundex key       |


### Return value

Soundex key (4 chars)
