function insertionSort(arr) {
    console.log(arr);
    console.log("========================")
    for(var i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1; 
        while(j >= 0 && current < arr[j]) {
            console.log(+ arr[j + 1], arr[j]);
            console.log(arr);  
            console.log("==================");
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
console.log(insertionSort([4, 3, 1, 5, 7, 2]))