function binarySearch(arr, a) {
    var start = 0;
    var end = arr[arr.length - 1];
    while(start <= end) {
        var mid = start + (end - 1) / 2;

        if (arr[mid] === a) {
            return mid;
        }
        if (arr[mid] > a) {
            end = mid + 1;
        } else {
            start = mid - 1;
        }
    }
    return -1;
}