# Understanding IPLD(InterPlanetary Linked Data)
This tutorial is a part of Medium Article Series ***"Understanding IPFS in Depth"*** authored by [**vasa**](https://vaibhavsaini.com).

You can read the full article here: [*Understanding IPFS in Depth(2/6): What is InterPlanetary Linked Data(IPLD)?*](https://medium.com/towardsblockchain/understanding-ipfs-in-depth-2-6-what-is-interplanetary-linked-data-ipld-c8c01551517b)

Beware that **the code of the Medium post is obsolete**. Use the code here instead. It runs with
* node@12.18.4
* ipfs-http-client@50.1.1
+ cids@1.1.7
## Run this tutorial
* `cd` to this folder
* Run `npm install` to install the dependencies.
* Run `node ipld_node.js` to creating an IPLD format node.
* Run `node named_link.js` to create 2 nodes and linking second node to first node using named link.
* Run `node nested_data.js` to fetch the value of a node using links.
* Run `node ipld-blogs.js` to run the medium type publication tutorial.

## More reading
Yoy may want to try [these exercises from ProtoSchool](https://proto.school/basics). 
They are about the same topics as here, but explained differently.