/* 
 * tutorial IPNS by Vaibhav Saini, updated by Vu Tien Khang (June 2021)
 * Create an IPNS record with a lifetime from a CID value
 *   the CID value is obtained independently by doing "ipfs add -r" of a local folder
 * Check that the IPNS record is valid
 * Access the folder content on IPFS using independently a browser
 */
//Import ipns and RSA crypto functions
const ipns = require('ipns');
const crypto = require('libp2p-crypto');

async function generateRsaKeypair() {
    try {
        const keyPair = await crypto.keys.generateKeyPair('RSA', 2048);
        console.log('  --> Generated new RSA Key Pair');
        createIpnsRecord(keyPair);
    } catch (error) {
        console.error('  Error generating Key Pair: ' + error);
    }
}

/*
 * Create an IPNS record with a lifetime from a CID value
 * the CID value is obtained independently by doing "ipfs add -r" of a local folder
 * ipns.create(privateKey, value, sequenceNumber, lifetime)
 *
 * - privateKey (PrivKey RSA Instance): key to be used for cryptographic operations.
 * - value (string): ipfs path of the object to be published.
 * - sequenceNumber (Number): number representing the current version of the record.
 * - lifetime (string): lifetime of the record (in milliseconds).
 * - callback (function): operation result.
 */
async function createIpnsRecord(keyPair) {
    const sequenceNumber = 0;
    const lifeTime = 1000000; // 1000000 milliseconds
    // the following literal CID comes from "ipfs add -r" the example folder containg a web site
    const CIDvalue = 'QmfJmaQX9sHgHFvrh27PqWExs8Kg8Vwzce2y4QWqSPhgRC'; 
    var EntryDataIPNS;
    try {
        // create new IPNS record
        EntryDataIPNS = await ipns.create(keyPair, CIDvalue, sequenceNumber, lifeTime);
        console.log('  --> Generated new IPNS record, EntryDataIPNS =', EntryDataIPNS);
        validateIpnsRecord(EntryDataIPNS, keyPair);
    } catch (error) {
        console.log('  Error generating IPNS entry: ', error);
    }
}

/*
 * Validate an IPNS record previously stored in a protocol buffer.
 * ipns.validate(publicKey, ipnsEntry, [callback])
 * 
 * - publicKey (PubKey RSA Instance): key to be used for cryptographic operations.
 * - ipnsEntry (Object): ipns entry record (obtained using the create function).
 * - callback (function): operation result.
 */
function validateIpnsRecord(EntryDataIPNS, keyPair) {
    try {
        ipns.validate(keyPair.public, EntryDataIPNS);
        console.log('  --> IPNS record validated');
    } catch (error) {
        console.log('  Error validating IPNS record against public key', error);
    }
}

generateRsaKeypair();