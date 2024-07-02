/*
Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
*/

let arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];
arr = [1, 3];

let threeConsecutiveOdds = function (arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (
            arr[left] % 2 !== 0 &&
            arr[left + 1] % 2 !== 0 &&
            arr[left + 2] % 2 !== 0
        ) {
            console.log('left');
            return true;
        }

        left++;
        console.log(right);
        if (
            arr[right] % 2 !== 0 &&
            arr[right - 1] % 2 !== 0 &&
            arr[right - 2] % 2 !== 0
        ) {
            console.log('right');
            return true;
        }

        right--;
    }
    return false;
};

console.log(threeConsecutiveOdds(arr));

// for (let i = 0; i < arr.length - 2; i++) {
//     if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
//         return true;
//     }
// }
// return false;
