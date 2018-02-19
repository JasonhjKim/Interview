class MySet {
    constructor(){
        this.set = {};
        this.size = 0;
    }
    
    has(data) {
        return this.set.hasOwnProperty(data);
    }

    add(data) {
        if (!this.has(data)) {
            this.set[data] = data;
            this.size++;
            return true;
        }
        return false;
    }

    delete(data) {
        if (this.has(data)) {
            delete this.set[data];
        }
    }

    clear() {
        this.set = {};
    }

    print() {
        var stringBuilder = ""
        for (const value in this.set) {
            stringBuilder += `${value}, ` 
        }
        return console.log(stringBuilder);
    }

    size() {
        return this.size;
    }

    difference(otherSet) {
        const returnSet = new Set();
        for(const c in this.set) {
            if(!otherSet.has(this.set[c])) {
                returnSet.add(this.set[c])
            }
        }
        return returnSet;
    }

    union(otherSet) {
        const returnSet = new Set();
        for (const c in this.set) {
            returnSet.add(this.set[c])
        }
        for (const c in otherSet.set) {
            returnSet.add(otherSet.set[c])
        }
        return returnSet;
    }

    intersect(otherSet) {
        const returnSet = new Set();
        for(const c in this.set) {
            if(otherSet.has(this.set[c])) {
                returnSet.add(this.set[c])
            }
        }
        return returnSet;
    }

    isSubset(otherSet) {
        if (this.size > otherSet.size) {
            return false;
        }
        for (const c in this.set) {
            if(!otherSet.has(this.set[c])) {
                return false;
            }
        }
        return true;
        
    }

}


var set1 = new MySet();
var set2 = new MySet();
set1.add(1)
set1.add(2)
set1.add(3)
set1.add(4)
set1.add(5)

set2.add(1)
set2.add(2)

console.log(set2.isSubset(set1));