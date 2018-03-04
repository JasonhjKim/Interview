function swap (arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

function quicksort(arr, left, right) {
    left = left || 0;
    right = right || arr.length - 1;
    const pivot = partition(arr, left, right);
    if (left < pivot - 1) {
        quicksort(arr, left, pivot - 1);
    }
    if (right > pivot) {
        quicksort(arr, pivot, right);
    }
    return arr;
}


function partition(arr, left, right) {
    const pivot = Math.floor((left + right) / 2);

    while(left <= right) {
        while (arr[left] < arr[pivot]) {
            left++;
        }
        while (arr[right] > arr[pivot]) {
            right--;
        }

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}


const test = [17, 4, 5, 6, 12, 20, 2, 11, 19, 18, 1, 14, 3, 7, 13, 15, 16, 8, 9, 10];
console.log(test);
quicksort(test)
quicksort(test)
console.log(test);