class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (!this.top) return null;

        let poppedValue = this.top.value;
        this.top = this.top.next;
        return poppedValue;
    }

    peek() {
        if (!this.top) return null;
        return this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }
}

function Stack2() {
    this.items = [];
    this.top = length - 1;

    this.push = function (element) {
        this.top++;
        this.items[this.top] = element;
    };

    this.pop = function () {
        if (this.top < 0) return null;
        let element = this.items[this.top];
        this.items[this.top] = undefined;
        this.top--;
        return element;
    };
}
