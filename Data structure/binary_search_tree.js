function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

class BST {
    constructor() {
        this.root = null;
    }

    insertRecursively(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                return this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                return this.insertNode(node.right, newNode);
            }
        }
    }

    insert(data) {
        if (!this.root) {
            this.root = new Node(data);
        } else {
            var current = this.root;
            while(current) {
                if (current.data > data) {
                    if (!current.left) {
                        current.left = new Node(data);
                        break;
                    }
                    current = current.left;
                } else if (current.data < data) {
                    if (!current.right) {
                        current.right = new Node(data);
                        break;
                    }
                    current = current.right;
                } else {
                    break;
                }
            }
        }
    }

    search(data) {
        var current = this.root;
        while(current) {
            if (current.data === data) {
                return true;
            }
            if (root.data > data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    searchRecursively(data) {
        return this.searchNode(this.root, data);
    }
    
    searchNode(node, data) {
        if (node === null) {
            return false;
        }
        if (data < node.data) {
            return this.searchNode(node.left, data);
        } else if (data > node.data) {
            return this.searchNode(node.right, data);
        } else if (node.data === data) {
            return true;
        }
    }

    maxRecursively() {
        return this.maxNode(this.root);
    }
    
    maxNode(node) {
        if (node){
            while(node && node.right !== null) {
                node = node.right;
            }
            return node.data
        }
        return null;
    }

    minRecursively() {
        return this.minNode(this.root);
    }
    minNode(node) {
        if (node) {
            while(node && node.left !== null) {
                node = node.left;
            }
            return node.data;
        }
        return null
    }

    findMax() {
        var current = this.root;
        while(current && current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    findMin() {
        var current = this.root;
        while(current && current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.data);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }

    preOrderTraverseNode(node, callback){
        if (node !== null) {
            callback(node.data);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    postOrderTraversal(callback) {
        this.postOrderTraversalNode(this.root, callback);
    }

    postOrderTraversalNode(node, callback) {
        if (node !== null) {
            this.postOrderTraversalNode(node.left, callback);
            this.postOrderTraversalNode(node.right, callback);
            callback(node.data);
        }
    }

    findMinNode(node) {
        while(node && node.left !== null) {
            node = node.left
        }
        return node;
    }

    removeRecursively(data) {
        this.removeNode(this.root, data);
    }

    removeNode(node, data)  {
        if (node === null) {
            return null;
        }
        //Traverse through the tree until node.data === data
        if (node.data > data) {
            node.left = this.removeNode(node.left, data)
            return node;
        } else if (node.data < data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            //No Child case
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //1 Child case
            if (node.left === null) {
                node = node.right;
                return node;
            }
            if (node.right === null) {
                node = node.left;
                return node;
            }
            //2 Children case
            //Find minimal value from right side of the sub-tree
            // 1.Change node data to equal to minNode data
            var minSubTree = this.findMinNode(node.right);
            node.data = minSubTree.data;
            node.right = this.removeNode(node.right, minSubTree.data);
            return node;
        }
    }
}

var bst = new BST();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);

console.log(bst.searchRecursively(11));
console.log("max1:", bst.maxRecursively());
console.log("min1: ", bst.minRecursively());
console.log("max2: ", bst.findMax());
console.log("min2: ", bst.findMin());
function printNode(data) {
    console.log(data);
}
bst.inOrderTraverse(printNode);
console.log("======================")
bst.preOrderTraverse(printNode);
console.log("======================")
bst.postOrderTraversal(printNode);

console.log(bst.removeRecursively(15));

bst.inOrderTraverse(printNode);