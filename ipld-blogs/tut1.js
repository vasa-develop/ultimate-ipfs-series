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

ipfs.dag.put({name: "vasa"}, { format: 'dag-cbor', hashAlg: 'sha2-256' }, (err, cid)=>{
  if(err){
      console.log("ERR\n", err);
  }
  
  //featching multihash buffer from cid object.
  const multihash = cid.multihash;
  
  //passing multihash buffer to CID object to convert multihash to a readable format   
  const cids = new CID(1, 'dag-cbor', multihash);
  
  //Printing out the cid in a readable format
  console.log(cids.toBaseEncodedString());
  //zdpuAujL3noEMamveLPQWJPY6CYZHhHoskYQaZBvRbAfVwR8S
});