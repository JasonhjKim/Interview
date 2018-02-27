function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

function factorial(exponent) {
    if (exponent === 0) {
        return 1;
    }
    return exponent * factorial(exponent - 1);
}

function isEven(number) {
    if (number > 0) {
        number = Math.abs(number);
    }

    if (number === 1) {
        return false;
    }

    if (number === 0) {
        return true;
    } else {
        number = number - 2;
        return isEven(number);
    }
    
}
function fibanocci_sequence(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 0) {
        return 0;
    }
    return n + fibanocci_sequence(n-1);
}

function bunnyEars(n) {
    if (n === 0) {
        return 0;
    }
    var current = n % 2 === 0 ? 2 : 3;
    return current + bunnyEars(n - 1)
}

console.log(bunnyEars(10));
console.log(fibanocci_sequence(10))
console.log(isEven(278));

console.log(factorial(6));
console.log(4 % 12);
console.log(power(2, 3));