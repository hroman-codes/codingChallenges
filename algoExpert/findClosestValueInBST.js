// [R]epeat 
/**
 * @tutorial https://www.algoexpert.io/questions/Find%20Closest%20Value%20In%20BST
 * @description write a function that takes in a Binary Search Tree (BST) and a target intger value and returns the closest value
 *              to that target value contained in that BST. You can assume that there will only be one closest value. 
 * @function findClosestValueInBST
 * @param {object} tree - an object filled with an array of nodes / objects
 * @param {integer} target - a number that is stored in the binary tree as a property that we need to use as the target
 * @returns {integer} - the closest value to the target value
 */

// [E]xample 

//     Each BST node has an integer value, a left child node, and a right child node. 
//     A node is said to be a valid BST node if and only if it satisfies the BST property:
    
//     - its value is stricly greater than the values of every node to its left 
//     - its value is stricly is less than or equal to the values of every node to its right 
//     - and its children nodes are either valid BST nodes themselves or None / null. 

//    {
//        "tree": {
//            nodes: [
//                {"id": "10", "left" "5", "right": "15", "value": 10},
//                {"id": "15", "left" "13", "right": "22", "value": 15}
//                {"id": "22", "left" null, "right": null, "value": 22},
//                {"id": "13", "left" null, "right": "14", "value": 13},
//                {"id": "14", "left" null, "right": null, "value": 14},
//                {"id": "5", "left" null, "right": null, "value": 5}
//                {"id": "2", "left" "1", "right": null, "value": 2}
//        }
//    }


//                                 10 << root node
//                                /  \
//                               5   15
//                             /  \  /  \
//                            2   5 13  22
//                           /       \
//                          1        14

//                          the target is 12

// create a function that returns a helper function
function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value);
}

// create helper BST function 
function findClosestValueInBstHelper(tree, target, closest) {

    // if we reach a leaf that is null return the closest BASE CASE
    if (tree === null) return closest;

    // if the closest node is is greater than current node 
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
      // set the current node to be the new closest node      
      closest = tree.value
    }

    // if the target is less the current node 
    if (target < tree.value) {
      // return the findClosestValueInBST to traverse down the left node 
      return findClosestValueInBstHelper(tree.left, target, closest)
    } 
    // if the target is greater than the current node 
    else if (target > tree.value) {
      // return the findClosestValueInBST to traverse down the right node 
      return findClosestValueInBstHelper(tree.right, target, closest)
    } else {
      // else return the closest
      console.log(closest)
      return closest
    }
}

findClosestValueInBst(
    {
        "tree": {
          "nodes": [
            {"id": "10", "left": "5", "right": "15", "value": 10},
            {"id": "15", "left": "13", "right": "22", "value": 15},
            {"id": "22", "left": null, "right": null, "value": 22},
            {"id": "13", "left": null, "right": "14", "value": 13}
          ],
          "root": "10"
        },
        "target": 12
      }
)