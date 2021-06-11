/**
 * @tutorial https://www.algoexpert.io/questions/Node%20Depths
 * @function nodeDepths
 * @param {Object} root
 */

//  iteratitve approach
function nodeDepths(root) {
    // track how deep nodes are 
    let sumOfDepths = 0
    // create a stack 
    const stack = [{node: root, depth: 0}];
    // iterate through the tree 
    while (stack.length > 0) {
        const {node, depth} = stack.pop();
        if (node === null) continue
        // add sum of depth to depth 
        sumOfDepths += depth
        // push the left and right node to the stack with the current depth plus 1 
        stack.push({node: node.left, depth: depth + 1});
        stack.push({node: node.right, depth: depth + 1});
    }

    return sumOfDepths
}