// Author : Ramaguru Radhakrishnan
// Date   : 08 Jan 2022 
// Merkle Tree Generation and Verification
// Install as "npm install merkletreejs"

const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')

function createMerkleTree(leaves, leavesmap)
{
	console.log("***********************************************");
	console.log("Creating Merkle Tree for the Leaves : ", leaves);
	const tree = new MerkleTree(leavesmap, SHA256)
	const root = tree.getRoot().toString('hex')
	console.log("The computed root is ", root);
	console.log("***********************************************");
	return [tree, root];
}

function checkMerkleTree(leaf, root, tree)
{
	console.log("***********************************************");
	console.log("Checking Merkle Tree for the Leaf Node : ", leaf, " with root value ", root);
	const leafhash = SHA256(leaf)
	const proof = tree.getProof(leafhash)
	return tree.verify(proof, leafhash, root);
}

function printTree(tree)
{
	console.log("***********************************************");
	console.log("Printing Merkle Tree...");
	console.log(tree.toString());
	console.log("***********************************************");
}

const leaves = ['Ramaguru R', 'Thambi', 'Molu', 'Ammu', 'Una']
const leavesmap = leaves.map(x => SHA256(x))
const leaf = 'Una'

treeroot = createMerkleTree(leaves, leavesmap);
console.log(checkMerkleTree(leaf,treeroot[1], treeroot[0]));
printTree(treeroot[0]);