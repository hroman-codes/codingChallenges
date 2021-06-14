/**
 * @classdesc defines a class node with three properties aka creates the node
 */
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * @classdesc BST class that holds a private variable root which holds the root of the tree
 */
class BinarySearchTree {
    constructor() {
        // the root of the BST 
        this.root = null;
    }

    /**
     * @function insert 
     * @description helper method which creates a new node to be inserted and calls insertNode
     */
    insert(data) {
        // create a new node and init with data 
        var newNode = new Node(data);

        // if the root is null add a new node to the tree and make node = root 
        // otherwise find the correct position of the node in the tree and add the node 
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    /**
     * @function insertNode
     * @description method will insert a node in the tree, it moves over the tree to find the location and inject node
     */
    insertNode(node, newNode) {
        // if the data is less than the node then move left of the tree
        // otherwise if the data is more than the node move to the right of the tree 
        if (newNode.data < node.data) {
            // if left is null insert node here
            // otherwise if left node is null recurse until null is found  
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            // if right is null inser node here 
            // otherwise if the right is not null recurse / traverse down the tree until null is found 
            if (newNode.data === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    /**
     * @function remove 
     * @description helper method thaty calls the removeNode with a given data
     */
    remove(data) {
        // root is re-init with the root of a modified tree 
        this.root = this.removeNode(this.root, data);
    }

    /**
     * @function removeNode
     * @description helper method to remove node with a given data it will recurse over the tree to find the data and remove it.
     */
    removeNode(node, key) {
        // if the root is null then the tree is empty 
        // else if data to be deleted is less than the roots data then move to left subtree 
        // else if data to be deleted is greater than to troots data then move to the right subtree 
        // else... if the data is the same to the roots data then delete the node 
        if (node === null) {
            return null
        } else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
        } else {
            // delete node with no children 
            if (node.left === null && node.right === null) {
                node = null
                return node;
            }
            // delete node with children 
            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }

            // Deleting node with two children
            // minumum node of the rigt subtree
            // is stored in aux
            var aux = this.findMinNode(node.right);
            node.data = aux.data;
    
            node.right = this.removeNode(node.right, aux.data);
            return node;

        }
    }

    /**
     * @function inorder 
     * @description Performs inorder Traversal of a tree nstarting from a given node
     */
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    /**
     * @function preorder 
     * @description performs preorder traversal of a tree starting from a given node
     */
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    /**
     * @function postorder
     * @description performs postorder traversal of a tree stating from a given node
     */
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    /**
     * @function findMinNode
     * @description searches for a node with a minimum value starting from node
     */
    findMinNode(node) {
        if (node.left === null) {
            return node 
        } else {
            return this.findMinNode(node.left);
        }
    }

    /**
     * @function getRootNode
     * @description returns the root node of a tree
     */
    getRootNode() {
        return this.root;
    }

    /**
     * @function search 
     * @description searches the node with a value data in the entire tree
     */
    search(node, data) {
        // if the tree is empty return null
        // else if the data is less than node's data move to the left
        // else if the data is more than the node's data move to the right
        // finally if the data is equal to the node data return the node itself
        if (node === null) {
            return null
        } else if (data < node.data) {
            return this.search(node.left, data)
        } else if (data > node.data) {
            return this.search(node.right, data)
        } else {
            return node
        }
    }
}

// creates an object for the BST
var BST = new BinarySearchTree();

// insert nodes to BST
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

// get root node
var root = BST.getRootNode();
console.log(root);