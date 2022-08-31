export default class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        this.stack.push(data);
    }

    pop() {
        this.stack.pop();
    }

    print() {
        console.log(this.stack);
    }

    length() {
        return this.stack.length;
    }
};