/* 
 * tutorial IPLD by Vaibhav Saini, updated by Vu Tien Khang (June 2021)
 * create one IPLD node, the author details
 * create one IPLD note, the blog details, referring to the author
 * print the details of the blog detail, including the details of the author
 */
//Initiate ipfs and CID instance
const ipfsClient = require('ipfs-http-client');
const CID = require('cids');

// Connect ipfs http client instance to local IPFS peer.
const ipfs = ipfsClient.create({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });

// Create an Author
async function addNewAuthor(name) {
    var newAuthor = await ipfs.dag.put({
        name: name,
        profile: "Entrepreneur | Co-founder/Developer @TowardsBlockChain, an MIT CIC incubated startup | Speaker | https://vaibhavsaini.com"
    })
    console.log('   -> Added new Author '+ name + ': ' + newAuthor);
    return newAuthor;
}

// Create a Blog Post
async function createBlog(author, content, tags) {
    var post = await ipfs.dag.put({
        author: author,
        content: content,
        tags: tags,
        timeOfPublish: Date()
    })
    console.log('   -> Created a new blog by author ' + author + ', blog: ' + post);
    return post;
}

async function readBlog(postCID) {
    try{
        const post =  await ipfs.dag.get(postCID + '');
        console.log('   -> Read blog: Post details =\n', post);
    } catch(error){
        console.error('   -> Error while reading post: ' + postCID + error);
        return;
    }
    try {
        const author = await ipfs.dag.get(postCID + '/author');
        console.log('   -> Read blog: Author details =\n', author);
    } catch (error) {
        console.error('   -> Error while reading post author: ' + error);
    }
}

async function startPublication() {
    const newAuthor = await addNewAuthor('vasa');
    const postCID = await createBlog(newAuthor, 'my first post', ['ipfs', 'ipld', 'towardsBlockchain']);
    readBlog(postCID);
}

startPublication();