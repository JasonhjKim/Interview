function mergesort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    return arr = merge(mergesort(left), mergesort(right));;
}


function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left.slice()).concat(right.slice());
}

const test = [17, 4, 5, 6, 12, 20, 2, 11, 19, 18, 1, 14, 3, 7, 13, 15, 16, 8, 9, 10];
console.log(test);
console.log(mergesort(test));
console.log(test);
