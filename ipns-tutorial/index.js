const ipns = require('ipns');
const crypto = require('libp2p-crypto'); //for generating RSA keypair


function generateRsaKeypair(){
    //generating an 2048 bit RSA keypair
    crypto.keys.generateKeyPair('RSA', 2048, async(err, keypair) => {
        if(err){
            console.log('error ', err);
        }
        else{
            console.log("\nGenerated new RSA Keypair\n");
            createIpnsRecord(keypair);
        }
    });
}


/*
Creating an IPNS record with a lifetime

ipns.create(privateKey, value, sequenceNumber, lifetime, [callback])

privateKey (PrivKey RSA Instance): key to be used for cryptographic operations.
value (string): ipfs path of the object to be published.
sequenceNumber (Number): number representing the current version of the record.
lifetime (string): lifetime of the record (in milliseconds).
callback (function): operation result.
*/
function createIpnsRecord(keypair){
    let sequenceNumber = 0;
    let lifetime = 1000000; //1000000 milliseconds
    let value = 'QmYVd8qstdXtTd1quwv4nJen6XprykxQRLo67Jy7WyiLMB'; //hash to my website
    var recordData;
    ipns.create(keypair, value, sequenceNumber, lifetime, (err, entryData) => {
        if(!err){
            //Created new IPNS record
            console.log("\nGenerated new IPNS record\n");
            console.log(entryData);
            validateIpnsRecord(entryData, keypair);
        }
    });
}

/*
Creating an IPNS record with a fixed expiration datetime.

ipns.createWithExpiration(rsa, value, sequenceNumber, expiration, [callback])

privateKey (PrivKey RSA Instance): key to be used for cryptographic operations.
value (string): ipfs path of the object to be published.
sequenceNumber (Number): number representing the current version of the record.
expiration (Date): Date object.
callback (function): operation result.

*/
function createIpnsRecordWithExpiration(keypair){
    ipns.createWithExpiration(keypair, value, sequenceNumber, expiration, (err, entryData)=>{
        if(!err){
            validateIpnsRecord(entryData);
        }
    });
}


/*
Validate an IPNS record previously stored in a protocol buffer.

ipns.validate(publicKey, ipnsEntry, [callback])

publicKey (PubKey RSA Instance): key to be used for cryptographic operations.
ipnsEntry (Object): ipns entry record (obtained using the create function).
callback (function): operation result.
*/
function validateIpnsRecord(entryData, keypair){
    ipns.validate(keypair.public, entryData, (err)=>{
        //if no err then the validation was successful
        if(!err){
            console.log('\nIPNS Record Validation Successful\n');
        }
    }); 
}

generateRsaKeypair();