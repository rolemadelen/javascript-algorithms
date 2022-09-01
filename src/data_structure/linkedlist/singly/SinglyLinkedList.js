import Node from "./Node.js"

export default class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    length() {
        return this.length;
    }

    push(data) {
        const newNode = new Node(data);

        if(!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;

            while(curr.next) {
                curr = curr.next;
            }

            curr.next = newNode;
        }

        this.length += 1;
    }

    pop() {
        let data;
        if(this.length == 0) {
            console.log("List is empty.");
            return;
        }
        if(this.length == 1) {
            data = this.head.data;
            this.head = null;
        } else {
            let curr = this.head;

            while(curr.next.next) {
                curr = curr.next;
            }

            data = curr.next.data;
            curr.next = null;
        }

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
            this.push(value)
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