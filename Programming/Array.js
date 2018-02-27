//isUnique
function isUnique(str) {
    var map = {};
    var str = str.split('');
    for(let i = 0; i < str.length; i++) {
        if (map.hasOwnProperty(str[i])) {
            return false;
        } else {
            map[str[i]] = 1;
        }
    }
    return true;
}
//check permutation
function checkPermutation(str1, str2) {
    str1 = str1.split("").sort().toString();
    str2 = str2.split("").sort().toString();
    if (str1.length !== str2.length) {
        return false;
    }
    console.log(str1, str2);
    return (str1 == str2)
    
}

function urlify(str) {
    str = str.split("");
    let returnString = [];
    let stringBuilder = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            stringBuilder += "%20";
        } else {
            stringBuilder += str[i];
        }
    }
    return stringBuilder
 }

//  function palindromePermutation(str) {
//      str = str.split("").sort().filter((data) => data !== " ");
//      let pointer = "";
//      let counter = 0;
//      let c = 0;
//      console.log(str);
//      for(let i = 0; i < str.length; i++) {
         
//      }
//      return true;
//  }

//In an array of arrays, e.g. given [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []], print: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
const testArr = [[], [1, 2, 3], [4, 5], [], [], [6, 7], [8], [9, 10], [], []];
function arrayify(arr) {
    let returnArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > 0) {
            for(let j = 0; j < arr[i].length; j++) {
                returnArr.push(arr[i][j])
            }
        }
    }
    return returnArr;
}

 console.log(arrayify(testArr))

 //Given a list of item prices, find all possible combinations of items that sum a particular value K.
 const testArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function findAllCombination(arr, k) {
    arr = arr.filter((item) => item <= k);
    let returnArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        let temp = k - arr[i];
        if (arr.indexOf(temp) > -1) {
            returnArr.push([arr[i], temp]);
        }
    }
    return returnArr;
}

console.log(findAllCombination(testArr1, 4));

//Paginate an array with constraints, such as skipping certain items.
//State cane be: greater, lesser, equal
const testArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterConstraints(arr, state, value) {
    return arr.filter((item) => {
        if (state === "greater") {
            return item > value;
        } else if (state === "lesser") {
            return item < value;
        } else {
            return item === value;
        }
    })
}
console.log(filterConstraints(testArr2, "equal", 5));

//Implement a circular buffer using an array.
// function circularBuffer(arr) {
//     let counter = 0;
//     while (counter !== 5) {
//         for(let i = 0; i < arr.length; i++) {
            
//         }
//     }
// }

//Given array of arrays, sort them in ascending order.
const testArr3 = [1, 4, 2, 5, 3, 7, 9, 8]
function sortAscending(arr) {
    return arr.sort(">");
}

//Given an array of integers, print out a histogram using the said array; include a base layer (all stars)
const testArr4 = [40, 20, 10, 50,  29, 39, 10, 5, 2, 33, 15, 45];
const testArr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 3, 5, 7, 9, 7, 5, 3, 1, 0, 2, 4, 6, 8, 6, 4, 2, 0]
function drawHistogram(arr) {
    let histogram = "";
    let max = Math.max.apply(null, arr);
    console.log(max);
    for (let i = 0; i < max; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (max - i <= arr[j]) {
                histogram += "+" + " "
            } else {
                histogram += "|" + " "
            }   
        }
        histogram += "\n";
    }
    return histogram
}
console.log(drawHistogram(testArr5));

//Given an array and an index, find the product of the elements of the array except the element at that index.
const testArr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function productExcept(arr, index) {
    let product = 1;
    for(let i = 0; i < arr.length; i++) {
        if (i !== index) {
            product *= arr[i]
        }
    }
    return product;
}
console.log(productExcept(testArr6, 4));

//Given a set of rectangles represented by a height and an interval along the y-axis, determine the size of its union
//need more clarification


//Given 2 separate arrays, write a method to find the values that exist in both arrays and return them.
function has(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        mid = Math.floor((start + end)/2);
        if (arr[mid] === value) {
            return true;
        } else if (arr[mid] < value) {   
            start = mid + 1;
        } else if (arr[mid] > value) {
            end = mid - 1
        }
    }
    return false;
}

const test1 = [1, 2, 3, 4, 5, 9, 10];
const test2 = [4, 5, 6, 7];
function intersect(arr1, arr2) {
    let returnArr = [];
    for(let i = 0; i < (arr1.length > arr2.length ? arr1.length : arr2.length); i++) {
        if(has(arr2, arr1[i])) {
            returnArr.push(arr1[i]);
        }
    }
    return returnArr;
}

console.log(intersect(test1, test2));

//Given an array of integers find whether there is a sub-sequence that sums to 0 and return it.
const testArr7 = [-3, 2, 3, 1, 6];
const testArr8 = [4, 2, -3, 1, 6];
const testArr9 = [4, 2, 0, 1, 6];
function subSequence(arr) {
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        let returnArr = [];
        for (var j = 0; j < arr.length; j++) {
            sum += arr[j];
            returnArr.push(arr[j]);
            if (sum === 0) {
                return returnArr;
            }
        }
        arr.shift();
    }
    return false;
}

//Given an array of non-negative numbers, find continuous subarray with sum to S.
function subArraySum(arr, S) {
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        let returnArr = [];
        for (var j = 0; j < arr.length; j++) {
            sum += arr[j];
            returnArr.push(arr[j]);
            if (sum === S) {
                return returnArr;
            }
        }
        arr.shift();
    }
    return false;
}

function subArraySum2(arr, S) {

}


console.log(subArraySum([1, 2, 3, 4, 5, 6, 7], 12));

let array = [1, 2, 3, 4, 5, 6, 7, 8,9]
array.splice(0, 2);
console.log("==========================");
console.log(array);

var removeElement = function(nums, val) {
    var length = nums.length;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            length--;
        }
    }
    return length;
};