class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    append(item) {
        const node = new Node(item); //Instancia um novo nó
        // verifica se a lista está vazia
        if (!this.head) {
            this.head = node; // head agora recebe esse novo nó que estamos criando
            this.length++; // acrescenta o tamanho da lista em +1
            return; // retorna
        }
        let current = this.head; //Armazena o head atual.
        // faz uma verificação, enquanto o nó atual for verdadeiro (aponta para um proximo e não é null)
        while (current.next) {
            current = current.next; //o nó atual recebe o priximo nó
        }
        current.next = node; //quando o while for falso caimos aqui e o nó atual passa a apontar para esse novo nó que estamos inserindo
        this.length++; // aumenta o tamanho da lista em +1
    }

    remove(item) {
        if (!this.head) return;
        if (this.head.data === item) {
            this.head = this.head.next; // se o item for o head, o head passa a ser o próximo nó
            this.length--; // diminui o tamanho da lista em -1
            return;
        }
        let current = this.head; //Armazena o head atual.
        while (current.next) {
            if (current.next.data === item) { // se o próximo nó for igual ao item que queremos remover
                current.next = current.next.next; // o nó atual passa a apontar para o próximo do próximo, removendo assim o nó que queremos
                this.length--; // diminui o tamanho da lista em -1
                return;
            }
            current = current.next; // se não for, o nó atual passa a ser o próximo nó
        }
        console.log("Item not found in the list.");
    }

    printList() {
        let currentNode = this.head;
        let result = " ";
        while (currentNode) {
            result += currentNode.data + " -> ";
            currentNode = currentNode.next;
        }
        console.log(result + "null");
    }
}

const list = new SinglyLinkedList();
list.append("JavaScript");
list.append("Olá");
list.append("Novo");
list.append("Mundo");
list.remove("Novo");
list.printList();
