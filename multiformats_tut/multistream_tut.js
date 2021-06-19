// Caution: remember to run "npm install multistream-select" before executing this demo
// This code is not compatible with the latest version 2.0.0 of multistream-select
const multistream = require('multistream-select')

// encode some json
const buf = new Buffer(JSON.stringify({ hello: 'world' }))

const prefixedBuf = multistream.addPrefix('json', buf) // prepends multicodec ('json')
console.log(prefixedBuf)
// <Buffer 06 2f 6a 73 6f 6e 2f 7b 22 68 65 6c 6c 6f 22 3a 22 77 6f 72 6c 64 22 7d>

console.log(prefixedBuf.toString('hex'))
// 062f6a736f6e2f7b2268656c6c6f223a22776f726c64227d

// let's get the Codec and then get the data back

const codec = multicodec.getCodec(prefixedBuf)
console.log(codec)
// json

console.log(multistream.rmPrefix(prefixedBuf).toString())
// "{ \"hello\": \"world\" }