class Human {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayHello() {
        return "Hello " + this.firstname + " "  + this.lastname;
    }
}


class Person extends Human {
    constructor(firstname,lastname, age) {
        super(firstname, lastname);
        this.age = age;
    }

    get Age() {
        return this.age;
    }
}


let p = new Person("matt", "Kim", 5);

console.log(p.Age);