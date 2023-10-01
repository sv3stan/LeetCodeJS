// Дан массив целых чисел nums и целое число k, вернуть общее количество подмассивов, сумма которых равна k.
// Подмассив — это непрерывная непустая последовательность элементов внутри массива.
// 560


// let nums = [2, 0, 1, 2, 3, 1, 4, 1, 2];
// //nums = [2];
// nums = [1, -1, 0]
// let k = 0;

let arr = [2, 0, 1, 2, 3, 1, 4, 1, 2];
//nums = [2];
arr = [1, -1, 0]
let k = 0;
n = 3

function findSubArraySum(arr, n, k) {
    let arrayLength = n;
    const prefixSumQuantity = new Map();
    let prefixSum = 0;
    let count = 0;
    for (let num of arr) {
        console.log(' ------------ ')
        console.log(prefixSumQuantity)
        console.log(prefixSum)
        prefixSum += num;

        //if (num === 0) continue;

        if (prefixSum === k) count++;

        if (prefixSumQuantity.has(prefixSum - k)) count += prefixSumQuantity.get(prefixSum - k)

        if (prefixSumQuantity.has(prefixSum)) {
            prefixSumQuantity.set(prefixSum, prefixSumQuantity.get(prefixSum) + 1)
        } else {
            prefixSumQuantity.set(prefixSum, 1);
        }

        // if (num === 0) {
        //     prefixSumQuantity.delete(prefixSum);
        // }
        //console.log(prefixSumQuantity)
        console.log(prefixSum)
        // console.log(prefixSumQuantity)
    }
    return count;


}

console.log(findSubArraySum(arr, n, k))
//console.log(subarraySum(nums, k));

// function subarraySum(nums, k) {
//     const prefixSumQuantity = new Map();
//     let prefixSum = 0;
//     let count = 0;
//     for (let num of nums) {
//         console.log(' ------------ ')
//         console.log(prefixSumQuantity)
//         console.log(prefixSum)
//         prefixSum += num;

//         //if (num === 0) continue;

//         if (prefixSum === k) count++;

//         if (prefixSumQuantity.has(prefixSum - k)) count += prefixSumQuantity.get(prefixSum - k)

//         if (prefixSumQuantity.has(prefixSum)) {
//             prefixSumQuantity.set(prefixSum, prefixSumQuantity.get(prefixSum) + 1)
//         } else {
//             prefixSumQuantity.set(prefixSum, 1);
//         }

//         // if (num === 0) {
//         //     prefixSumQuantity.delete(prefixSum);
//         // }
//         //console.log(prefixSumQuantity)
//         console.log(prefixSum)
//         // console.log(prefixSumQuantity)
//     }
//     return count;
// };







//function subarraySum(nums, k) {
//     const n = nums.length;
//     const prefixSum = [];
//     let temp = 0;
//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         if (nums[i] !== 0) {
//             temp += nums[i];
//             prefixSum.push(temp);
//         }
//     }
//     console.log(prefixSum);

//     for (let i = 1; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             console.log(i + '- i - ' + j + ' - j - ' + prefixSum[i] + ' - (prefixSum[i] - ' + prefixSum[j] + ' - (prefixSum[j]');
//             //  if (nums[i] === 0 || nums[j] === 0) {
//             if (prefixSum[i] - prefixSum[j] === k) {
//                 count++;
//                 console.log(count)
//             }
//             //  }
//         }
//     }
//     return count;
// };