/* 
 * tutorial IPLD by Vaibhav Saini, updated by Vu Tien Khang (June 2021)
 * create an IPLD node and print its CID
 */
//Import ipfs and CID instance
const ipfsClient = require('ipfs-http-client');
const CID = require('cids');

async function main() {
    /*
     * Connect ipfs instance to infura node. You can also use your local node (non secure http) by calling
     *       const ipfs = await ipfsClient.create({host: 'localhost', port: '5001', protocol: 'http'});
     * [obsolete tutorial code] const ipfs = new ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });
     */
    // const ipfs = await ipfsClient.create({host: 'localhost', port: '5001', protocol: 'http'});
    const ipfs = await ipfsClient.create({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });

    /*
    * Create an IPLD format node: ipfs.dag.put(dagNode, [options])
    * For more information see: 
    * https://github.com/ipfs-inactive/interface-js-ipfs-core/blob/master/SPEC/DAG.md#ipfsdagputdagnode-options
    */
    const cid = await ipfs.dag.put({name: "vasa"}, { format: 'dag-cbor', hashAlg: 'sha2-256' });
    
    //fetch multihash buffer from cid object.
    const multihash = cid.multihash;

    //pass a multihash buffer to CID object to convert multihash to a readable format   
    const cids = new CID(1, 'dag-cbor', multihash);
    
    //Print out the cid in a readable format
    console.log('CID =', cids.toBaseEncodedString('base58btc'));
    //bafyreiekjzonwkqd7vcfescxlhvuyn6atdvgevirauupbkncpyebllcuh4 (in base32 by default, CID v1)
    //zdpuAujL3noEMamveLPQWJPY6CYZHhHoskYQaZBvRbAfVwR8S (value given in tutorial, CID v0)
};

main();