// Дан массив целых чисел arr и целое число k.
// Найдите наименьшее количество уникальных целых чисел, 
// удалив ровно k элементов.

// 1481


arr = [4, 3, 1, 1, 3, 3, 2], k = 4
arr = [5, 5, 4], k = 1

var findLeastNumOfUniqueInts = function (arr, k) {

    const hash = new Map();

    for (let i = 0; i < arr.length; i++) {
        hash.set(arr[i], (hash.get(arr[i]) || 0) + 1);
    }

    const nums = Array.from(hash).sort((a, b) => a[1] - b[1]);

    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {

        count += nums[i][1];
        if (count === k) {
            return n - i - 1;
        }
        if (count > k) {
            return n - i;
        }
    }

};

console.log(findLeastNumOfUniqueInts(arr, k))


// const hash = new Map();

// for (let i = 0; i < arr.length; i++) {

//     hash.set(arr[i], (hash.get(arr[i]) || 0) + 1);

// }

// console.log(hash)

// const nums = Array.from(hash).sort((a, b) => a[1] - b[1]);

// console.log(nums)

// let count = 0;

// for (let i = 0; i < nums.length; i++) {

//     count += nums[i][1];

//     console.log(count + '- count - ' + i)

//     if (count === k) {
//         console.log("+++++++++++")
//         return nums.length - i - 1;
//     }
//     if (count > k) {
//         console.log("=========")
//         return nums.length - i;
//     }



// }

// console.log(count)