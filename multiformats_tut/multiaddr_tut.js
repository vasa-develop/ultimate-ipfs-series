var Multiaddr = require('multiaddr')

var home = new Multiaddr('/ip4/127.0.0.1/tcp/80')
// <Multiaddr 047f000001060050 - /ip4/127.0.0.1/tcp/80>

console.log(home.buffer)
// <Buffer 04 7f 00 00 01 06 00 50>

console.log(home.toString())
// '/ip4/127.0.0.1/tcp/80'

console.dir(home.protos())
// [ { code: 4, size: 32, name: 'ip4', resolvable: false, path: false },
//   { code: 6, size: 16, name: 'tcp', resolvable: false, path: false } ]

console.dir(home.nodeAddress())
// { family: 4, address: '127.0.0.1', port: '80' }

var proxy = new Multiaddr('/ip4/192.168.2.1/tcp/3128')
// <Multiaddr 04c0a80201060c38 - /ip4/192.168.2.1/tcp/3128>

var full = proxy.encapsulate(home)
// <Multiaddr 04c0a80201060c38047f000001060050 - /ip4/192.168.2.1/tcp/3128/ip4/127.0.0.1/tcp/80>

console.log(full.toString())
// '/ip4/192.168.2.1/tcp/3128/ip4/127.0.0.1/tcp/80'