class MyStack {
    constructor() {
        this.stack = [];
    }

    pop() {
        return this.stack.pop();
    }

    push(data) {
        return this.stack.push(data);
    }

    peek(data) {
        return this.stack[this.stack.length - 1];
    }

    length() {
        return this.stack.length;
    }

    print() {
        console.log(this.stack);
    }
}