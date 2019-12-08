const multicodec = require('multicodec')

const prefixedProtobuf = multicodec.addPrefix('protobuf', protobufBuffer)
console.log(prefixedProtobuf)