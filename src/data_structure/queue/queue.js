export default class Queue {
    constructor() {
        this.stack = [];
    }

    enqueue(data) {
        this.stack.push(data);
    }

    dequeue() {
        this.stack.shift();
    }

    print() {
        console.log(this.stack);
    }

    length() {
        return this.stack.length;
    }
};