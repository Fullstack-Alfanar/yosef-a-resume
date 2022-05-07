
function sortArray(arr) {
    let sortedArr = []; // the sorted array

    for (let i = 1; i < arr.length; i++) {
        sortedArr.splice(2, 0, arr[i]);
    }

    return sortedArr;
}

let arr = [10, 4, 30, 13, 9, 17, 2, 24, 11, 23, 5, 7];

console.log(sortArray(arr));