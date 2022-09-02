import { DoublyLinkedList as LinkedList } from "../linkedlist/doubly/DoublyLinkedList.js";

export default class QueueList {
    constructor() {
        this.queue = new LinkedList();
    }

    enqueue(data) {
        return this.queue.append(data);
    }

    dequeue() {
        return this.queue.shift();
    }

    print() {
        this.queue.print();
    }

    length() {
        return this.queue.length;
    }

    fromArray(arr) {
        return this.queue.fromArray(arr);
    }

    toArray() {
        return this.queue.toArray();
    }
}