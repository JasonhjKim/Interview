function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

class MyDoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insert(data) {
        if (this.head == null && this.tail == null) {
            this.head = new Node(data);
            this.tail = this.head;
        } else {
            const newNode = new Node(data);
            this.tail.next = newNode;
            const temp = this.tail;
            this.tail = newNode;
            this.tail.prev = temp;
        }
        this.size++;

    }

    delete(data) {
        let current = this.head;
        while(current) {
            if (current.data === data) {
                if (this.size === 1) {
                    this.head = null;
                    this.tail = null;
                    return;
                }
                this.size--;
                if (current === this.head) {
                    this.head = this.head.next;
                    this.head.prev = null;
                    return;
                } else if (current === this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                    return;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }   
            }
            current = current.next;
        }
    }

    size() {
        return this.size;
    }

    has() {
        let current = this.head;
        while(current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    print() {
        var current = this.head;
        var stringBuilder = "";
        while(current) {
            stringBuilder += current.data + " <-> "
            current = current.next;
        }
        return stringBuilder
    }
}

var dll = new MyDoublyLinkedList();
dll.insert(1)
dll.insert(2)
dll.insert(3)
dll.insert(4)
dll.insert(5)
dll.insert(6)
dll.insert(7)
dll.insert(8)
console.log(dll.print());
dll.delete(1);
console.log(dll.print());
dll.delete(8);
console.log(dll.print());
dll.delete(4);
console.log(dll.print());
dll.delete(3);
console.log(dll.print());