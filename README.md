# soundex
Calculate the soundex key of a string   
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

if (!soundex('Robert').localeCompare(soundex('Rupert'))) {
  console.log('Equal soundex');
} else {
  console.log('Different soundex');
}
    
// Output : Equal soundex
```

### Return value

Soundex result (4 chars)
