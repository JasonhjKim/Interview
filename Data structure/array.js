class MyArray {
    constructor() {
        this.array = [];
    }

    add(data) {
        this.array.push(data);
    }

    remove(data) {
        this.array = this.array.filter((current) => current !== data);
    }
    
    search(data) {
        const returnIndex = this.array.indexOf(data);
        if (returnIndex >= 0) {
            return returnIndex;
        }
        return null;
    }
    length() {
        return this.array.length;
    }

    getAtIndex(i) {
        return this.array[i];
    }
    
    print() {
        console.log(this.array.join(''));
    }
}