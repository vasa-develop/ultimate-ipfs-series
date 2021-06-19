/* 
 * tutorial multihash by Vaibhav Saini, updated by Vu Tien Khang (multihashes - v4.0.2, June 2021)
 */
//Import multihash functions
var multihash = require('multihashes');

var buf = new Buffer.from('0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33', 'hex');
console.log('  Initial hash to prefix =', buf);
// < Buffer 0b ee c7 b5 ea 3f 0f db c9 5d 0d d4 7f 3c 5b c2 75 da 8a 33 >

var encoded = multihash.encode(buf, 'sha1'); // gives Uint8Array that has to be encoded in hex
console.log('  -> encoded SHA1 raw =', encoded);
/* Uint8Array(22) [
    17,  20,  11, 238, 199, 181,
    234,  63,  15, 219, 201,  93,
    13, 212, 127,  60,  91, 194,
    117, 218, 138,  51
    ]
 */
console.log('  -> encoded SHA 1 hex =', Array.from(encoded).map(x => x.toString(16).padStart(2, '0')).join(' '));
// 11 14 0b ee c7 b5 ea 3f 0f db c9 5d 0d d4 7f 3c 5b c2 75 da 8a 33
var encoded = multihash.encode(buf, 'sha2-256'); // gives Uint8Array that has to be encoded in hex
// 12 14 0b ee c7 b5 ea 3f 0f db c9 5d 0d d4 7f 3c 5b c2 75 da 8a 33
console.log('  -> encoded SHA 2-256 hex =', Array.from(encoded).map(x => x.toString(16).padStart(2, '0')).join(' '));
// 13 14 0b ee c7 b5 ea 3f 0f db c9 5d 0d d4 7f 3c 5b c2 75 da 8a 33
    
var encoded = multihash.encode(buf, 'sha2-512'); // gives Uint8Array that has to be encoded in hex
console.log('  -> encoded SHA 2-512 hex =', Array.from(encoded).map(x => x.toString(16).padStart(2, '0')).join(' '));

var decoded = multihash.decode(encoded);
console.log('  -> decoded =', decoded);
/**
{
  code: 17,
  name: 'sha1',
  length: 20,
  digest: Uint8Array(20) [
     11, 238, 199, 181, 234,  63,
     15, 219, 201,  93,  13, 212,
    127,  60,  91, 194, 117, 218,
    138,  51
  ]
}
 */
console.log('  Decoded hash =', Array.from(decoded.digest).map(x => x.toString(16).padStart(2, '0')).join(' '));
