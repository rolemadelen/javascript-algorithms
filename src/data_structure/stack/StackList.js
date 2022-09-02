import { SinglyLinkedList as LinkedList }  from "../linkedlist/singly/SinglyLinkedList.js";

export default class StackList {
    constructor() {
        this.stack = new LinkedList();
    }

    push(data) {
        this.stack.push(data);
    }

    pop() {
        this.stack.pop();
    }

    print() {
        this.stack.print();
    }

    length() {
        return this.stack.length;
    }

    fromArray(arr) {
        return this.stack.fromArray(arr);
    }

    toArray() {
        return this.stack.toArray();
    }
}