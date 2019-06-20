/*
PUBLICATION SYSTEM

Adding new Author

An author will have
-> name
-> profile


Creating A Blog

A Blog will have a:
-> author
-> content
-> tags
-> timeOfPublish

List all Blogs for an author


Read a Blog


*/

//Initiate ipfs and CID instance
const ipfsClient = require('ipfs-http-client');
const CID = require('cids');

//Connecting ipfs instance to infura node. You can also use your local node.
const ipfs = new ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });

//Create an Author
async function addNewAuthor(name) {
    //creating blog author object
    var newAuthor = await ipfs.dag.put({
        name: name,
        profile: "Entrepreneur | Co-founder/Developer @TowardsBlockChain, an MIT CIC incubated startup | Speaker | https://vaibhavsaini.com"
    });

    console.log("Added new Author "+name+": " + newAuthor);

    return newAuthor;
}

//Creating a Blog
async function createBlog(author, content, tags) {
    //creating blog object
    var post = await ipfs.dag.put({
        author: author,
        content: content,
        tags: tags,
        timeOfPublish: Date()
    });

    console.log("Published a new Post by " + author + ": " + post);

    return post;
}

//Read a blog
async function readBlog(postCID) {
    ipfs.dag.get(postCID + "", (err, post) => {
        if (err) {
          console.error('Error while reading post: ' + err)
        } else {
            console.log("Post Details\n", post);
            ipfs.dag.get(postCID + "/author", (err, author) => {
                if (err) {
                  console.error('Error while reading post author: ' + err)
                } else {
                  console.log("Post Author Details\n", author);
                }
              });
        }
    });
}


function startPublication() {
    addNewAuthor("vasa").then(
      (newAuthor) => {
        createBlog(newAuthor,"my first post", ["ipfs","ipld","vasa","towardsblockchain"]).then(
          (postCID) => readBlog(postCID))
      });
}

startPublication();
