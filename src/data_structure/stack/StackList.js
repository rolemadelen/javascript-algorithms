import DoublyLinkedList from "../linkedlist/doubly/DoublyLinkedList.js";

export default class StackList {
    constructor() {
        this.stack = new DoublyLinkedList();
    }

    push(data) {
        return this.stack.append(data);
    }

    pop() {
        return this.stack.pop();
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