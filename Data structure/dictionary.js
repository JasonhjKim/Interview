class MyDictionary {
    constructor() {
        this.dictionary = {}
        this.size = 0;
    }

    has(key) {
        this.dictionary.hasOwnProperty(key);
    }

    set(key, value) {
        if (!this.has(key)) {
            this.dictionary[key] = value;
            this.size++;
        }
    }

    get(key) {
        if (key in this.dictionary) {
            return this.dictionary[key]
        }
        return null;
    }

    remove(key) {
        const value = this.dictionary[key];
        if (this.dictionary.hasOwnProperty(key)) {
            delete this.dictionary[key]
            this.size--;
            return true;
        }
    }

    print() {
        var stringBuilder = "";
        for (const c in this.dictionary) {
            stringBuilder += `${c}, ${this.dictionary[c]}\n`
        }
        return console.log(stringBuilder);
    }

    clear() {
        return this.dictionary = {};
    }

    size() {
        return this.size;
    }

    keys() {
        return Object.keys(this.dictionary);
    }
    
    values() {
        const returnArr = [];
        for(const c in this.dictionary) {
            returnArr.push(this.dictionary[c]);
        }
        return returnArr;
    }

}

var dic = new MyDictionary();
dic.set(1, "one");
dic.set(2, "two");
dic.set(3, "three");
dic.set(4, "four");

dic.print();
dic.remove(3);
dic.print();

console.log(dic.values());

