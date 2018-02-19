function Node(data) {
    this.data = data;
    this.next = null;
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    remove(data) {
        var cur = this.head;
        var pre = this.head;

        while(cur) {
            if (cur.data === data) { //found Data
                //if head value equal to search value
                if(cur === this.head) { 
                    this.head = this.head.next;
                }
                //if tail value equal to search value
                if (cur === this.tail) {
                    this.tail = pre;
                }
                console.log(4)
                pre.next = cur.next; //I dont understand this part
                this.size--;
            } else {
                pre = cur;
            }
            cur = cur.next;
        }
    }

    insertAfter(node, data) {
        var cur = this.head;

        while(cur) {
            if (cur.data === node) {
                const node = new Node(data)
                if (cur === this.tail) {
                    this.tail.next = node;
                    this.tail = node;
                } else {
                    node.next = cur.next;
                    cur.next = node;
                }
                this.size++;
            }
            cur = cur.next;
        }
    }

    // insert(position, data) {
    //     const cur = head;
    //     var index = 0;

    //     if (positon > this.size + 2) {
    //         return null;
    //     }

    //     while(cur) {
    //         if (index === position) {
    //             if (position === 0) {
    //                 var temphead = this.head;
    //                 this.head = new Node(data);
    //                 this.head.next = temphead;
    //             }
    //             if (position === size - 1) {
    //                 tail
    //             }
    //         }
    //         index++;
    //     }
    // }

    length() {
        return this.size
    }

    print() {
        var stringBuilder = "";
        var cur = this.head
        while (cur) {
            stringBuilder += `${cur.data}` + " => "
            cur = cur.next;
        }
        return console.log(stringBuilder);
    }
}


var ll = new MyLinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);

ll.insertAfter(6, 7)
ll.print();


