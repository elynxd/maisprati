class Node { // constroi o nó
    constructor() {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() { // constroi a fila com front, rear e tamanho.
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        let newNode = new Node(value); // Instancia um novo Nó
        if (this.rear) { // Se o rear existir, o proximo recebe o novo nó
            this.rear.next = newNode;
        }

        this.rear = newNode; // O ultimo recebe o novo nó
        if (!this.front) { // se o front não existir, o front recebe o novo nó
            this.front = newNode;
        }

        this.size++; // aumenta tamanho da fila
    }

    dequeue() {
       if(this.front < 0) return null
        
    }
}
