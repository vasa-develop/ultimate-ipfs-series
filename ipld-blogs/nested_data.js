/* 
 * tutorial IPLD by Vaibhav Saini, updated by Vu Tien Khang (June 2021)
 * create 2 IPLD nodes, with the 2nd referring to the first,
 * traverse the link to fetch the value in first node 
 */
//Import ipfs and CID instance
const ipfsClient = require('ipfs-http-client');
const CID = require('cids');

async function createAndFetchNodes() {
    //Connect ipfs http client instance to local IPFS peer.
    const ipfs = await ipfsClient.create({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });

    // Create an IPLD format node: ipfs.dag.put(dagNode, [options])
    const vasa = await ipfs.dag.put({ name: 'vasa' });

    // Link 2nd node to vasa using named link
    const secondNode = await ipfs.dag.put({
        publication: {
            authors: {
                authorName: vasa
            }
        }
    });

    // Fetch multihash buffer from cid object.
    const multihash = secondNode.multihash;

    // Pass multihash buffer to CID object to convert multihash to a readable format   
    const cids = new CID(1, 'dag-cbor', multihash);

    // Fetch the value using links, using various formats, as in 
    //    https://github.com/ipfs-inactive/interface-js-ipfs-core/blob/master/SPEC/DAG.md#ipfsdaggetcid-path-options
    const cidAlone = await ipfs.dag.get(cids);
    console.log('   0. cid instance alone =', cidAlone);
    const cidPath = await ipfs.dag.get(cids, '/publication/authors/authorName/name');
    console.log('   1. cid instance & distinct path =', cidPath);
    const cidString = await ipfs.dag.get(cids.toBaseEncodedString(), '/publication/authors/authorName/name');
    console.log('   2. cid as string & distinct path =', cidString);
    const cidStringPath = cids.toBaseEncodedString()+'/publication/authors/authorName/name';
    console.log('   cidStringPath =', cidStringPath);
    const nodeValue = await ipfs.dag.get (cidStringPath);
    console.log('   3. cid as string cat\'ed with  path =', nodeValue);
    console.log('   -> only the last call traverses the path');
}

createAndFetchNodes();