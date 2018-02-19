function linearSearch(arr, a) {
    for(const c in arr) {
        if (arr[c] === a) return c;
    }
    return null;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 8));
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 10));

