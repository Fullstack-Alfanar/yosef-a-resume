
// used the count algorithm
function sortArray(arr) {
    let temp = new Array(Math.max(...arr));

    for (let i = 0; i < arr.length; i++) {
        if (temp[arr[i]] != NaN && temp[arr[i]] != undefined) {
            temp[arr[i]] += 1;
        }
        else {
            temp[arr[i]] = 0;
            temp[arr[i]] += 1;
        }
    }
    let sortedArray = [];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] != undefined)
            sortedArray.push(i);
    }
    return sortedArray;
}

let arr = [10, 4, 30, 13, 9, 17, 2, 24, 11, 23, 5, 7];
let arr2 = [10, 4, 30, 1728, 9, 17, 2, 24, 11, 23, 5, 7];

console.log(sortArray(arr));
console.log(sortArray(arr2));


