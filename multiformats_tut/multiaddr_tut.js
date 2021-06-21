/* 
 * tutorial multiaddr by Vaibhav Saini, updated by Vu Tien Khang (June 2021)
 * multiaddr v9.0.1
 */
//Import multiaddr functions
const { multiaddr } = require('multiaddr');
//const addr =  multiaddr("/ip4/127.0.0.1/udp/1234");
const addr =  multiaddr("/ip4/127.0.0.1/tcp/80");
console.log('  -> addr raw =', addr);
// <Multiaddr 047f000001060050 - /ip4/127.0.0.1/tcp/80>
console.log('  -> addr.bytes raw =', addr.bytes);
/*
Uint8Array(8) [
  4, 127, 0,  0,
  1,   6, 0, 80]
 */
console.log('  -> addr.buffer raw =', addr.buffer);
// <Buffer 04 7f 00 00 01 06 00 50>

console.log('  -> addr toString =', addr.toString());
// '/ip4/127.0.0.1/tcp/80'

console.log('  -> addr.protos raw =', addr.protos());
// [ { code: 4, size: 32, name: 'ip4', resolvable: false, path: false },
//   { code: 6, size: 16, name: 'tcp', resolvable: false, path: false } ]

console.log('  -> addr.nodeAddress raw =', addr.nodeAddress(), '\n');
// { family: 4, address: '127.0.0.1', port: '80' }

var proxy = new multiaddr('/ip4/192.168.2.1/tcp/3128');
console.log('  -> new proxy raw =', proxy);
// <Multiaddr 04c0a80201060c38 - /ip4/192.168.2.1/tcp/3128>

var full = proxy.encapsulate(addr);
console.log('  -> new full raw =', full);
// <Multiaddr 04c0a80201060c38047f000001060050 - /ip4/192.168.2.1/tcp/3128/ip4/127.0.0.1/tcp/80>

console.log('  -> {proxy/addr} full toString =', full.toString());
// '/ip4/192.168.2.1/tcp/3128/ip4/127.0.0.1/tcp/80'