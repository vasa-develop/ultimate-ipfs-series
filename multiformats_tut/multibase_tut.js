const multibase = require('multibase')

//Encodes a buffer into one of the supported encodings, prefixing it with the multibase code
const encodedBuf = multibase.encode('base58btc', new Buffer.from('hey, how is it going'))
console.log(encodedBuf)
// <Buffer 7a 32 54 4d 66 44 65 6e 62 67 7a 7a 38 53 39 37 62 68 62 38 78 51 52 58 53 70 32 63 6e>

//Checks if buffer or string is encoded
const value = multibase.isEncoded(encodedBuf)
console.log(value)
// base58btc

//Decodes a buffer or string
const decodedBuf = multibase.decode(encodedBuf)
console.log(decodedBuf.toString())
// hey, how is it going