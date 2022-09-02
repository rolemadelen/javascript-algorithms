import Node from "./Node.js"

export class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    prepend(data) {
        const newNode = new Node(data);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            
            return this;
        }
        
        newNode.next = this.head;
        this.head = newNode;

        this.length += 1;

        return this;
    }

    append(data) {
        const newNode = new Node(data);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        this.length += 1;

        return this;
    }

    insert(data, pos) {
        if(pos == 0) {
            return this.prepend(data);
        } else if (pos == this.length - 1) {
            return this.append(data);
        } else {
            pos -= 1;
            let curr = this.head;

            while(pos > 0) {
                curr = curr.next;
                pos -= 1;
            }

            const newNode = new Node(data);
            newNode.next = curr.next;
            curr.next = newNode;

            this.length += 1;

            return this;
        }
    }

    shift() {
        if(this.length == 0) {
            console.log("List is empty.");
            return this;
        }

        let data = this.head.data;

        this.head = this.head.next;

        this.length -= 1;
        return data;
    }

    pop() {
        if(this.length == 0) {
            console.log("List is empty.");
            return this;
        }

        let data;
        let curr = this.head;

        while(curr.next != this.tail) {
            curr = curr.next;
        }

        data = curr.next.data;
        curr.next = null;
        this.tail = curr;

        this.length -= 1;
        return data;
    }

    find(data) {
        let curr = this.head;
        let idx = 0;

        while(curr) {
            if(curr.data == data) {
                return idx;
            }
            idx += 1;
            curr = curr.next;
        }

        return -1;
    }

    fromArray(arr) {
        arr.forEach((value) => {
            this.append(value)
        });

        return this;
    }

    toArray() {
        const nodes = [];

        let curr = this.head;
        while(curr) {
            nodes.push(curr.data);
            curr = curr.next;
        }

        return nodes;
    }

    print() {
        let curr = this.head;

        let str = "";
        while(curr) {
            str += `${curr.data} `;
            curr = curr.next;
        }

        console.log(str);
    }
}