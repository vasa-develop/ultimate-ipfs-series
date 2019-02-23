//Initiate ipfs and CID instance
const ipfsClient = require('ipfs-http-client');
const CID = require('cids');

//Connecting ipfs instance to infura node. You can also use your local node.
const ipfs = new ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });

/*
Creating an IPLD format node:
ipfs.dag.put(dagNode, [options], [callback])
For more information see: 
https://github.com/ipfs/interface-js-ipfs-core/blob/master/SPEC/DAG.md#ipfsdagputdagnode-options-callback
*/
async function linkNodes(){
    let vasa = await ipfs.dag.put({name: 'vasa'});

    //Linking secondNode to vasa using named link.
    let secondNode = await ipfs.dag.put({linkToVasa: vasa});
}

linkNodes();