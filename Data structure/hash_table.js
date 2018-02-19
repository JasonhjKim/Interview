class MyHashTable {
    constructor(size) {
        this.hashtable = {}
        this.size = size;
    }

    calculateHash(key) {
        let total = 0;
        for (let i = 0; i < key.toString().length; i++) {
            total += key.toString().charCodeAt(i);
        }
        let bucket = total % this.size;
        return bucket;
    }

    put(key, value) {
        this.hashtable[this.calculateHash(key)] = value;
    }

    get(key) {
        return this.hashtable[this.calculateHash(key)]
    }

    delete(key) {
        delete this.hashtable[this.calculateHash(key)];
    }

    print() {
        var stringBuilder = "";
        for(const c in this.hashtable) {
            stringBuilder += `${this.hashtable[c]}\n`
        }
        return console.log(stringBuilder);
    }
}

var ht = new MyHashTable(4);

ht.put(1, "one");
ht.put("ew", "two");
ht.put(123, "three");
ht.put("c", "four");
console.log(ht.delete("ew"));
ht.print();