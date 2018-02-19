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

console.log(isEven(278l));

console.log(factorial(6));
console.log(4 % 12);
console.log(power(2, 3));