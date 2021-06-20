# Introduction
*(Written in June 2021)*

This is a fork of the repository of [Vaibhav Saini](https://github.com/vasa-develop/ultimate-ipfs-series)
The contribution is to update the code at the latest versions of the npm packages as of June 2021. The snippets have all been executed and are working. Only the first 4 articles have been updated. The last 2 articles require a Medium account to read that I don't have.
## To use the code snippets
To use the code snippets, you need to install NodeJS. The setup instructions use the console utility (`Terminal.app`) from MacOS. Excepted for `brew`, the setup instructions are the same if you use Linux Ubuntu. 

* Install [Brew](https://brew.sh/)
* Install nodeJS via brew: `brew install node@14.17.0`  (this version of nodeJS is the last long term stable support)
* Install `wget` via brew: `brew install wget` (we'll need `wget` to retrieve the homepage of Vasa in the post _Understanding IPFS in Depth(1/6): A Beginner to Advanced Guide_)

Under Windows, it is strongly recommended to run a [VirtualBox](https://www.virtualbox.org/wiki/Downloads) for Windows and install a Ubuntu Virtual Machine inside it. Here is a YouTube video of 4 minutes, that can guide you through this double installation process: https://youtu.be/8mns5yqMfZk.
## Overview of changes (for the Pull Request)
* all `package.json` have the latest versions of IPFS packages, as of June 2021
* the APIs of IPFS have changed, no more callback with `err` code, so we use liberally `try-catch` coding
* the `package.json` refer to the latest `npm` packages, as of June 2021
* each exercise has a modified readme
# ultimate-ipfs-series
An Ultimate tutorial series to learn about IPFS, IPLD, Multiformats, Libp2p and Filecoin

This repository is a consolidated list of resources you can follow to learn about IPFS.
To keep the things simple and managable, all the resources are grouped and presented in form of a series of blog posts(6 posts): 
- [**Understanding IPFS in Depth(1/6): A Beginner to Advanced Guide**](https://hackernoon.com/understanding-ipfs-in-depth-1-5-a-beginner-to-advanced-guide-e937675a8c8a): In this part, we will try to understand What IPFS is, Why do we need it and What we can do with it. We will cover all the underlying components of IPFS in brief(which will be explained in depth in further parts) and see how they work together. If you want a short summary and don’t want to understand what’s happening “under the hood”, then this part is for you 😊
- [**Understanding IPFS in Depth(2/6): What is InterPlanetary Linked Data(IPLD)?**](https://hackernoon.com/understanding-ipfs-in-depth-2-6-what-is-interplanetary-linked-data-ipld-c8c01551517b) In this part, we will dive into the data model of the content-addressable web. We will explore the details and specs of IPLD and play with it to get more familiar with it.
- [**Understanding IPFS in Depth(3/6): What is InterPlanetary Naming System(IPNS)?**](https://hackernoon.com/understanding-ipfs-in-depth-3-6-what-is-interplanetary-naming-system-ipns-9aca71e4c13b) In this part, we will dive into the Naming System of the distributed web. We will discuss it’s working, specs and play with it. We will also compare it to today’s naming system, aka the DNS. We will create a list of pros and cons of IPNS vs DNS.
- [**Understanding IPFS in Depth(4/6): What is MultiFormats?**](https://hackernoon.com/understanding-ipfs-in-depth-4-6-what-is-multiformats-cf25eef83966) In this part, we will talk about Why we need Multiformat, How it works and What you as a user/developer can do with it?
- [**Understanding IPFS in Depth(5/6): What is Libp2p?**](https://medium.com/@vaibhavsaini_67863/understanding-ipfs-in-depth-5-6-what-is-libp2p-f8bf7724d452) In this part, we will study the networking Layer of IPFS and what it contributes to the awesomeness of IPFS. We will go through it’s working, specs and play around with it to understand it more clearly.
- [**Understanding IPFS in Depth(6/6): What is Filecoin?**](https://medium.com/swlh/ultimate-guide-to-filecoin-breaking-down-filecoin-whitepaper-economics-9212541a5895) In this part, we discuss the incentivization layer of IPFS, filecoin. We discuss it’s whitepaper and it’s implementation specs including DSN(Distributed Storage Network), Proof-of-replication, Proof of Storage, Data storage and retrieval markets and Smart contract implementation on Filecoin protocol. We also discuss some flaws in filecoin protocol which are not mentioned in the whitepaper and suggest some improvements in filecoin protocol.

## More reading
Once you get familiarized with IPFS after running the exercises of this repository, you may want to try [this complete free course from ProtoSchool](https://proto.school/tutorials?course=ipfs). 

