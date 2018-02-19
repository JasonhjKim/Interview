function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (!this.root) {
            this.root = new Node(data);
        } else {
            var current = this.root;
            while(current) {
                if (current.data < data) {
                    if (!current.left) {
                        current.left = new Node(data);
                        break;
                    }
                    current = current.left;
                } else if (current.data > data) {
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

    remove(root, data) {
        var current = this.root;

        if (current.data > data) {
            root.left = remove(root.left, data);
        } else if (current.data < data) {
            root.right = remove(root.right. data)
        } else {
            if (root.left === null && root.right ===  null) {
                //no children node
            } else if (root.left === null) {
                //Right child case
                var temp = root;
                root = root.right;
                delete temp;
            } else if (root.right === null) {
                //Left child case
                var temp = root;
                root = root.left;
                temp = null;
            } else { //Two children case

            }
        }
        return root;
    }

    contains(data) {
        var current = this.root;

        while(current) {
            if (current.data === data) {
                return true;
            }
            if (current.data < data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    findMin(root) {
        if (!root) {
            root = this.root;
        }
        while(root) {
            root = root.left;
        }
        return root.data;
    }

    findMax(root) {
        if(!root) {
            root = this.root;
        }
        while(root) {
            root = root.right;
        }
        return root.data;
    }
}


var bst = new BST();
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);