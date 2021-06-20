# Understanding Multiformats
This tutorial is a part of Medium Article Series ***"Understanding IPFS in Depth"*** authored by [**vasa**](https://vaibhavsaini.com).

You can read the full article here: [*Understanding IPFS in Depth(4/6): What is MultiFormats?*](https://hackernoon.com/understanding-ipfs-in-depth-4-6-what-is-multiformats-cf25eef83966).

In short, multiformats answers to the questions when we do peer-to-peer networking
* what is the network address of the peer? what network transport protocol do we use?
* what is the format the data should be in?
* what is the size of the useful data? what is the overall size?
* what application will use the data?

Beware that **the code of the Medium post is obsolete**. Use the code here instead. It runs with
* node@12.18.4
* multiaddr@9.0.1
* multibase@4.0.4
* multicodec@3.0.1
* multihashes@4.0.2

# Prepare the dependencies
* Run `cd multiformats_tut` to enter this folder
* Run `npm install` to install the dependencies.
## Run the multiaddr tutorial
* Run `node multiaddr_tut.js` to run the tutorial on Multiaddr
```console
$ node maddr.js
  -> addr raw = <Multiaddr 047f000001060050 - /ip4/127.0.0.1/tcp/80>
  -> addr.bytes raw = Uint8Array(8) [
  4, 127, 0,  0,
  1,   6, 0, 80
]
  -> addr.buffer raw = undefined
  -> addr toString = /ip4/127.0.0.1/tcp/80
  -> addr.protos raw = [
  { code: 4, size: 32, name: 'ip4', resolvable: false, path: false },
  { code: 6, size: 16, name: 'tcp', resolvable: false, path: false }
]
  -> addr.nodeAddress raw = { family: 4, address: '127.0.0.1', port: 80 } 

  -> new proxy raw = <Multiaddr 04c0a80201060c38 - /ip4/192.168.2.1/tcp/3128>
  -> new full raw = <Multiaddr 04c0a80201060c38047f000001060050 - /ip4/192.168.2.1/tcp/3128/ip4/127.0.0.1/tcp/80>
  -> {proxy/addr} full toString = /ip4/192.168.2.1/tcp/3128/ip4/127.0.0.1/tcp/80
```
We see how the IP address+port is described and stored as a multiaddress, internally as a Unint8Array, in human form as `/ip4/127.0.0.1/tcp/80`

We see how this IP address+port can be encapsulate in another IP address+port `/ip4/192.168.2.1/tcp/3128`

## Run the multibase tutorial
Multibase is a protocol for disambiguating the encoding of base-encoded binary appearing in the text (e.g., base32, base64, base58, etc.).

* Run `node multibase_tut.js` to run the tutorial on Multiaddr
```console
$ node mbase.js
  InitialText =  Hey, how is it going
  -> encoded raw = Uint8Array(29) [
  122, 50,  49,  86, 119, 98, 106, 112,
   65, 90, 105,  54,  70, 52, 105,  55,
  107, 49, 102, 113, 105, 98,  55, 102,
   71, 78,  77, 122, 118
]
  -> encoded hex = 7a 32 31 56 77 62 6a 70 41 5a 69 36 46 34 69 37 6b 31 66 71 69 62 37 66 47 4e 4d 7a 76
  -> base encoding value = base58btc
  Decoded text = Hey, how is it going
```
## Run the multicodec tutorial
Multicodec is a self-describing multiformat, it wraps other formats with a tiny bit of self-description. A multicodec identifier is a varint. _A varInt (variable integer) is a field used in transaction data to indicate the number of upcoming fields, or the length of an upcoming field._

* Run `node multicodec_tut.js` to run the tutorial on Multicodec. here we use the `Protobuf` codec.
```console
$ node mcodec.js
  Initial buffer to code = <Buffer 0b ee c7 b5 ea 3f 0f db c9 5d 0d d4 7f 3c 5b c2 75 da 8a 33>
  --> prefixedProtobuf Uint8Array(21) [
   80,  11, 238, 199, 181, 234,
   63,  15, 219, 201,  93,  13,
  212, 127,  60,  91, 194, 117,
  218, 138,  51
]
  --> codec prefixedProtobuf hex = 50 0b ee c7 b5 ea 3f 0f db c9 5d 0d d4 7f 3c 5b c2 75 da 8a 33
  --> Protobuf codec value = 50
  --> Prefixed Data codec name = protobuf
  Value of codec dag-cbor = 113 , in hex = 71
  Name from codec code 113  = dag-cbor
```
## Run the multistream tutorial
Multistream is a self-describing format, like multicodec but for unlimited amount (streaming) of data. It is useful when we want to simultaneously distribute a same video session over several transport streams using several protocols, for example Facebook, YouTube, LinkedIn and Tweeter.

We haven't touched the `multistream` tutorial. The code is not compatible with the version 2.0.0 of the package `multistream-select`.

## More reading
You may want to try [these exercises from ProtoSchool](https://proto.school/anatomy-of-a-cid). 
They are about the same topics as here (multihash, multibase, multicodec), but explained differently.
## Bug, Fixes & Contributions
We always welcome bug reports, bug fixes & contributions(PRs).
- Add your bug reports [here](https://github.com/vasa-develop/ultimate-ipfs-series/issues/new)
- Add your bug fixes and contributions(PRs) [here](https://github.com/vasa-develop/ultimate-ipfs-series/compare)

