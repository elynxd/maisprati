class NodeTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    append(value) {
        const newNode = new NodeTree(value);

        if (this.root === null) {
            this.root = newNode;
        }
        this.appendSorted(this.root, newNode);
    }

    // Helper function to insert a node in sorted order
    appendSorted(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (currentNode.left == null) {
                currentNode.left = newNode;
            } else {
                this.appendSorted(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right == null) {
                currentNode.right == newNode;
            } else {
                this.appendSorted(currentNode.right, newNode);
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    search(value, node = this.root) {
        if (node === null) return "Value not found";
        if (node.value === value) return node.value;
        if (value < node.value) {
            return this.search(value, node.left);
        } else {
            return this.search(value, node.right);
        }
    }
}

const tree = new BinaryTree();

tree.append(10);
tree.append(5);
tree.append(12);
tree.append(3);
tree.append(6);
tree.append(11);
tree.append(7);
tree.append(10);
tree.append(10);

console.log("In-order traversal of the binary search tree:");
tree.inOrderTraversal();
console.log("Searching for:", tree.search(3));
