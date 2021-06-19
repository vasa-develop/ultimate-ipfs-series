# Understanding IPNS(InterPlanetary Naming System)
This tutorial is a part of Medium Article Series ***"Understanding IPFS in Depth"*** authored by [**vasa**](https://vaibhavsaini.com).

You can read the full article here: [*Understanding IPFS in Depth(3/6): What is InterPlanetary Naming System(IPNS)?*](https://hackernoon.com/understanding-ipfs-in-depth-3-6-what-is-interplanetary-naming-system-ipns-9aca71e4c13b).

Beware that **the code of the Medium post is obsolete**. Use the code here instead. It runs with
* node@12.18.4
* ipns@0.12.0
* libp2p-crypto@0.19.4

## Principle of IPNS
Basically, IPNS is a lookup table with all the entry points that are declared to IPNS.
* the left column is the "IPNS name" of the entry point
* the right column is the CID of the content hosted by the entry point

Thus, if the content changes, the CID changes but we can call ipns.create() to change the right column entry. Everybody who knows the "IPNS name" always have access to the latest version of the content.
## Run this tutorial
* Run `cd ipns-tutorial` to enter this folder
* Run `npm install` to install the dependencies.
* Run `wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --no-check-certificate https://www.york.ac.uk/teaching/cws/wws/index.html` to download locally a copy of this web page (the web page of the author, given in the Medium post is too shallow)
* Run `ipfs add -r www.york.ac.uk` to upload this folder on IPFS
* Copy the CID of the whole folder (the last line of the printout) and paste it in the code of index.js, line 37
* Run `node index.js` to run the `ipns` tutorial.

The output should be
```console
$ node index.js
  --> Generated new RSA Key Pair
  --> Generated new IPNS record, EntryDataIPNS = {
  value: 'QmfJmaQX9sHgHFvrh27PqWExs8Kg8Vwzce2y4QWqSPhgRC',
  signature: <Buffer 48 1b c6 ca 24 85 87 5b 62 1e 13 38 0d 44 3b ec e0 35 af 31 f8 01 21 aa 71 58 19 b6 36 46 1d 83 38 90 35 82 3f 52 d7 a8 a6 ca 24 45 d2 92 a1 b9 fe b6 ... 206 more bytes>,
  validityType: 0,
  validity: Uint8Array(30) [
    50, 48, 50, 49, 45, 48, 54, 45, 49,
    55, 84, 49, 50, 58, 51, 54, 58, 49,
    50, 46, 53, 56, 48, 48, 48, 48, 48,
    48, 48, 90
  ],
  sequence: 0n,
  ttl: 100000000000n,
  signatureV2: <Buffer 5d 67 ac 60 62 8e e1 d7 79 86 56 28 59 4b 85 36 ac 8f 27 f1 b3 4a 7a a0 67 c1 b1 18 6d 77 bc 6f 8a ce d3 2d e7 78 ee 0f 8e 9b b3 cd 8b 2a ac 56 a0 a1 ... 206 more bytes>,
  data: <Buffer a5 63 74 74 6c 1b 00 00 00 17 48 76 e8 00 65 76 61 6c 75 65 78 2e 51 6d 66 4a 6d 61 51 58 39 73 48 67 48 46 76 72 68 32 37 50 71 57 45 78 73 38 4b 67 ... 83 more bytes>
}
  --> IPNS record validated
```
Note that the key `value` of the IPNS is the CID of the folder that we copy-pasted.
