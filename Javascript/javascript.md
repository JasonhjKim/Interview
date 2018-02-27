#### Javascript Questions

1. What is the difference between `NULL` and `undefined`?
    Undefined means variables has been declared, but yet to be initalized. NULL is a value, which representation of no value.
2. What are the difference between `==` and `===`?
    ```javascript
    var a = 5;
    var b = "5";
    var c = "6";
    a == b //true
    a === b //false
    b === c //false
    ```
    `=` only checks value, `===` checks types and value
3. True and False in Javascript
    falsy: false, null, undefined, "", 0, NaN
    truthy: everything else...
- Is 'false' is false?
    false, this is a string with length longer than 0.
- Is " " is false;
    false, this is a tring with length longer than 0.
- What about {}, empty object?
    true, it's an object. Object without property cannot be falsy.
- What about [], empty Array?
    true, array object is always truthy.
    