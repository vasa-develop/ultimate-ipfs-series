//Initiate ipfs and CID instance
const ipfsClient = require('ipfs-http-client');
const CID = require('cids');

//Connecting ipfs http client instance to local IPFS peer.
const ipfs = new ipfsClient({ host: 'localhost', port: '5001', protocol: 'http' });

/*
Creating an IPLD format node:
ipfs.dag.put(dagNode, [options], [callback])
For more information see: 
https://github.com/ipfs/interface-js-ipfs-core/blob/master/SPEC/DAG.md#ipfsdagputdagnode-options-callback
*/

ipfs.dag.put({ name: "vasa" }, { format: 'dag-cbor', hashAlg: 'sha2-256' }, (err, cid) => {
    if (err) {
        console.log("ERR\n", err);
    }

    //featching multihash buffer from cid object.
    const multihash = cid.multihash;

    //passing multihash buffer to CID object to convert multihash to a readable format   
    const cids = new CID(1, 'dag-cbor', multihash);

    //Printing out the cid in a readable format
    console.log(cids.toBaseEncodedString());
    //bafyreiekjzonwkqd7vcfescxlhvuyn6atdvgevirauupbkncpyebllcuh4
});
