/* 
 * tutorial multihash by Vaibhav Saini, updated by Vu Tien Khang (multibase - v4.0.4, June 2021)
 */
//Import multibase functions
const multibase = require('multibase');

//Encodes a buffer into one of the supported encodings, prefixing it with the multibase code
const initialText = 'Hey, how is it going';
console.log('  InitialText = ',initialText);

const encodedArray = multibase.encode('base58btc', new TextEncoder().encode(initialText));
console.log('  -> encoded raw =', encodedArray);
/*
Uint8Array(29) [
  122, 50,  49,  86, 119, 98, 106, 112,
   65, 90, 105,  54,  70, 52, 105,  55,
  107, 49, 102, 113, 105, 98,  55, 102,
   71, 78,  77, 122, 118]
*/
console.log('  -> encoded hex =', 
    Array.from(encodedArray).map(x => x.toString(16).padStart(2, '0')).join(' '));
// 7a 32 31 56 77 62 6a 70 41 5a 69 36 46 34 69 37 6b 31 66 71 69 62 37 66 47 4e 4d 7a 76

//Checks if buffer or string is encoded
const value = multibase.isEncoded(encodedArray);
console.log('  -> base encoding value =', value);
// base58btc

//Decodes a buffer or string
const decodedText = new TextDecoder().decode(multibase.decode(encodedArray));
console.log('  Decoded text =', decodedText);
// Hey, how is it going