/* 
 * tutorial IPLD by Vaibhav Saini, updated by Vu Tien Khang (June 2021)
 * create 2 IPLD nodes, with the 2nd referring to the first,
 * note that both nodes have the same CID 
 */
//Import ipfs and CID instance
const ipfsClient = require('ipfs-http-client');
const CID = require('cids');

async function linkNodes() {
    //Connect ipfs http client instance to local IPFS peer.
    const ipfs = await ipfsClient.create({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });

    // Create an IPLD format node: ipfs.dag.put(dagNode, [options])
    let vasa = await ipfs.dag.put({ name: 'vasa' });

    //Link secondNode to vasa using named link.
    let secondNode = await ipfs.dag.put({ linkToVasa: vasa });

    //fetch multihash buffer from cid object.
    const multihash = secondNode.multihash;

    //pass multihash buffer to CID object to convert multihash to a readable format   
    const cids = new CID(1, 'dag-cbor', multihash);

    //print out the cid in a readable format, base32 and base 58btc
    console.log('CID base32 =', cids.toBaseEncodedString());
    //bafyreigwftw565twi6kw3azu7hgz2lxoev3um6cjpgbn6lunqp6f3ewpve
    console.log('CID base58btc =', cids.toBaseEncodedString('base58btc'));
    //zdpuAujL3noEMamveLPQWJPY6CYZHhHoskYQaZBvRbAfVwR8S
}

linkNodes();