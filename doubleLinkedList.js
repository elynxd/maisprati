class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertInit(value) {
        let newElement = new Node(value);
        if (!this.head) {
            this.head.prev = this.tail = newElement;
        } else {
            newElement.next = this.head;
            this.head.prev = newElement;
            this.head = newElement;
        }
        this.head = newElement;
        this.length++;
    }

    insertEnd(value) {
        let newElement = new Node(value);
        newElement.prev = this.head;
        if (!this.head) {
            this.head = this.tail = newElement;
        } else {
            this.tail.next = newElement;
            newElement.prev = this.tail;
            this.tail = newElement;
        }
        this.length++;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.length)
            throw new RangeError("Index out of bounds");
        if (index === 0) return this.insertInit(value);
        if (index === this.length) return this.insertEnd(value);

        let currentNode = this.head;

        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }

        let newElement = new Node(value);
        let prevNode = currentNode.prev;

        prevNode.next = newElement;
        newElement.prev = prevNode;
        newElement.next = currentNode;
        currentNode.prev = newElement;

        this.length++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length)
            throw new RangeError("Index out of bounds");

        let remove;

        if (this.length === 1) {
            remove = this.head;
            this.head = this.tail = null;
        } else if (index === 0) {
            remove = this.head;
            this.head = this.head.next;
            this.head.prev = null;
        } else if (index === this.length - 1) {
            remove = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.next;
            }
            remove = currentNode;
            let { prevNode, nextNode } = currentNode;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        this.length--;
    }
    printBefore(value) {

    }
    printAfter(value) {

    }
}

// Example usage
let dll = new DoubleLinkedList();
dll.insertInit(10);
dll.insertEnd(20);
dll.insertAt(15, 1);
dll.insertEnd(30);
console.log(dll.removeAt(1)); // Should remove 15
console.log(dll.removeAt(0)); // Should remove 10
