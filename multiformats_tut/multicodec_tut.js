/* 
 * tutorial multicodec by Henrique Dias, 
 * updated by Vu Tien Khang (multicodec - v3.0.1, June 2021)
 * based on https://multiformats.github.io/js-multicodec/modules.html
 */
//Import multicodec functions
const multicodec = require('multicodec');

var protobufBuffer = new Buffer.from('0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33', 'hex');
console.log('  Initial buffer to code =', protobufBuffer);
// < Buffer 0b ee c7 b5 ea 3f 0f db c9 5d 0d d4 7f 3c 5b c2 75 da 8a 33 >

const prefixedProtobuf = multicodec.addPrefix('protobuf', protobufBuffer);
console.log('  --> prefixedProtobuf', prefixedProtobuf);
// prefixedProtobuf as an Uint8Array
console.log('  --> codec prefixedProtobuf hex =', 
    Array.from(prefixedProtobuf).map(x => x.toString(16).padStart(2, '0')).join(' '));
// prefixedProtobuf 0x50 0b ee c7 b5 ea 3f 0f db c9 5d 0d d4 7f 3c 5b c2 75 da 8a 33

// verify that the prefix is indeed for "protobuf"
console.log('  --> Protobuf codec value =', multicodec.PROTOBUF.toString(16));

// To get the name of a codec, used in the prefixed data (in Uint8Array):
console.log('  --> Prefixed Data codec name =', multicodec.getNameFromData(prefixedProtobuf));

// The multicodec codec values can be accessed directly:
console.log('  Value of codec dag-cbor =', multicodec.DAG_CBOR,
     ', in hex =', multicodec.DAG_CBOR.toString(16));
// 113 , 71

// To get the string representation of a codec, e.g. for error messages:
console.log('  Name from codec code 113  =', multicodec.getNameFromCode(113));
// dag-cbor

