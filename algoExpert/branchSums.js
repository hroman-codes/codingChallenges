/**
 * @tutorial https://www.algoexpert.io/questions/Branch%20Sums
 * @function branchSums
 * @param {Object} root 
 * @returns {Integer} sum of all values in a BTS
 */

//TODO: traverse a binary search tree via depth first search / iterative approach
//TODO: sum up nodes after each look up when I reach a leaf
//TODO: push total sum on each look up to an array 

// - set up a data structure to keep track of nodes [stack]
//     - an array / LIFO 
// - iterate through the array of objects
//     - while loop?   
//     - for loop?
// - just logout each row

// function branchSums(root) {
//     // console.log('root.tree.nodes[0]', root.tree.nodes[0]);
//     let vistedStack = [];
//     let i = 0;
//     let currentNode = root.tree.nodes;
//     let moveLeftorRight; 

//     while(currentNode[i].id) {
//         let leftNode = root.tree.nodes[i].left
//         let rightNode = root.tree.nodes[i].right
//         console.log('leftNode', leftNode)
//         console.log('rightNode', rightNode)

//         debugger
//         if (isValidBST(leftNode, rightNode)) {
//             vistedStack.push(currentNode[i].id) // this will allow me to keep track of the visited node

//             // then here I want to move the pointer to the left to replicate a depth first search 
//             // write a function that hanldes moving left as I iterate???
//             // need to move left and also check if we visted that node 

//         } else {
//             break
//         }

//         console.log('currentNode', currentNode[i].id)
//         i++
//     }

//     console.log('stack', stack);
// }

// // helper function to validate bst node  
// function isValidBST(leftNode, rightNode) {
//     if (leftNode != null || rightNode != null) {

//         return true
//     }
// }

// final solution 
function branchSums(root) {
    // setup a tracker to keep track of sums 
    const sums = [];
    // call the helper function 
    calculateBranchSums(root, 0, sums);

    return sums;
}

function calculateBranchSums(node, runningSum, sums) {
    // if we find an empty node return
    if (!node) return

    const newRunningSum = runningSum + node.value;

    // if there are no nodes on the left and right push the running sum to sum container 
    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }

    // recursive calls 
    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
}

branchSums({
    "tree": {
      "nodes": [
        {"id": "1", "left": "2", "right": "3", "value": 1},
        {"id": "2", "left": "4", "right": "5", "value": 2},
        {"id": "3", "left": "6", "right": "7", "value": 3},
        {"id": "4", "left": "8", "right": "9", "value": 4},
        {"id": "5", "left": "10", "right": null, "value": 5},
        {"id": "6", "left": null, "right": null, "value": 6},
        {"id": "7", "left": null, "right": null, "value": 7},
        {"id": "8", "left": null, "right": null, "value": 8},
        {"id": "9", "left": null, "right": null, "value": 9},
        {"id": "10", "left": null, "right": null, "value": 10}
      ],
      "root": "1"
    }
  })