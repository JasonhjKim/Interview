class MinHeap {
    constructor(capacity){
        this.capacity = capacity;
        this.size = 0;
        this.arr = new Array(capacity);
    }

    getLeftChildIndex(index) { return index * 2 + 1 }
    getRightChildIndex(index) { return index * 2 + 2 }
    getParentIndex(index) { return (index - 1) / 2 }

    hasLeftChildIndex(index) { getLeftChildIndex(index) < size }
    hasRightChildIndex(index) { getRightChildIndex(index) < size }
    hasParentIndex(index) { getParentIndex(index) >= 0}

    left(index) { return arr[getLeftChildIndex(index)] }
    right(index) { return arr[getRightChildIndex(index)] }
    parent(index) { return arr[getParentIndex(index)] }

    swap(i1, i2) {
        if (!i1 || !i2) {
            return;
        }
        var temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
    }

    peek() {
        if (arr[0] !== null) {
            return arr[0];
        }
    }

    poll() {

    }

    heapifyDown() {

    }

    heapifyUp() {

    }
}