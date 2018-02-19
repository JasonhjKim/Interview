function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var currentMinIndex = i;
        for(var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[currentMinIndex]) {
                currentMinIndex = j;
            }
        }
        var temp =  arr[currentMinIndex];
            arr[currentMinIndex] = arr[i];
            arr[i] = temp;
    }
    return arr;
}

console.log(selectionSort([3, 1, 4, 6, 2, 8, 9]))