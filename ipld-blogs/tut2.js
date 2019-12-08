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
async function linkNodes() {
    let vasa = await ipfs.dag.put({ name: 'vasa' });

    //Linking secondNode to vasa using named link.
    let secondNode = await ipfs.dag.put({ linkToVasa: vasa });

    //featching multihash buffer from cid object.
    const multihash = secondNode.multihash;

    //passing multihash buffer to CID object to convert multihash to a readable format   
    const cids = new CID(1, 'dag-cbor', multihash);

    //Printing out the cid in a readable format
    console.log(cids.toBaseEncodedString());
    //bafyreigwftw565twi6kw3azu7hgz2lxoev3um6cjpgbn6lunqp6f3ewpve
}

linkNodes();
