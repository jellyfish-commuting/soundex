# soundex
Calculate the soundex key of a string by implementing the rules described of the wikipedia page     
For mapping used see https://en.wikipedia.org/wiki/Soundex#American_Soundex 

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

### Return value

Soundex key (4 chars)
