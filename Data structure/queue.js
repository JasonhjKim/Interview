class MyQueue {
    constructor() {
        this.queue = []
    }

    enqueue(data) {
        this.queue.push(data);
    }
    
    dequeue() {
        return this.queue.shift()
    }

    front() {
        return this.queue[0]
    }

    isEmpty() {
        return this.queue.length === 0 ? true : false
    }

    size() {
        return this.queue.length;
    }

    print() {
        return console.log(this.queue);
    }
}