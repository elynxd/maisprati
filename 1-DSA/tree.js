class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    appendChild(node) {
        this.children.push(node);
    }

    removeChild(value) {
        this.children = this.children.filter((child) => child.value !== value);
    }
}

class Tree {
    constructor(rootNodeValue) {
        this.root = new TreeNode(rootNodeValue);
    }

    traverseDFS(callback) {
        function recurse(node) {
            callback(node);
            node.children.forEach((child) => recurse(child));
        }
        recurse(this.root);
    }
}

const tree = new Tree("A");

const B = new TreeNode("B");
const C = new TreeNode("C");
const D = new TreeNode("D");
const E = new TreeNode("E");
const F = new TreeNode("F");
const G = new TreeNode("G");
const H = new TreeNode("H");

tree.root.appendChild(B);
tree.root.appendChild(C);
tree.root.appendChild(D);

B.appendChild(E);
B.appendChild(F);
C.appendChild(G);
F.appendChild(H);

function printTree(node, prefix = '' , isLast = true) {
    console.log(prefix + (isLast ? '└── ' : '├── ') + node.value);
    
    const childrenCount = node.children.length;

    node.children.forEach((child, index) => {
        const isLastChild = index === childrenCount -1;
        const newPrefix = prefix + (isLast ? '    ' : '│   ');
        printTree(child, newPrefix, isLastChild);
    })
}

printTree(tree.root);
