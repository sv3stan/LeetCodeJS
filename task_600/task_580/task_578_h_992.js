// Учитывая целочисленный массив nums и целое число k, 
// верните количество хороших подмассивов чисел.
// Хороший массив — это массив, в котором количество различных целых чисел равно k.
// Например, [1, 2, 3, 1, 2] имеет три разных целых числа: 1, 2 и 3.
// Подмассив — это непрерывная часть массива.

// 992

nums = [1, 2, 1, 2, 3], k = 2
// nums = [1, 2, 1, 3, 4], k = 3







var subarraysWithKDistinct = function (nums, k) {
    return maxK(nums, k) - maxK(nums, k - 1);
};

function maxK(nums, k) {
    let hash = new Map();
    let left = 0;
    let answer = 0;

    for (let right = 0; right < nums.length; right++) {
        if (!hash.has(nums[right])) {
            hash.set(nums[right], 0);
        }
        hash.set(nums[right], hash.get(nums[right]) + 1);

        while (hash.size > k) {
            hash.set(nums[left], hash.get(nums[left]) - 1);
            if (hash.get(nums[left]) === 0) {
                hash.delete(nums[left]);
            }
            left++;
        }

        answer += right - left + 1;
    }

    return answer;
}




// var subarraysWithKDistinct = function (nums, k) {


//     let hash = new Map();
//     let left = 0;
//     let count = 0;

//     for (let right = 0; right < nums.length; right++) {
//         // if (!hash.has(nums[right])) {
//         //     hash.set(nums[right], 0);
//         // }

//         hash.set(nums[right], (hash.get(nums[right]) || 0) + 1);
//         console.log(hash)


//         while (hash.size >= k) {
//             console.log('++++++++++++')
//             hash.set(nums[left], hash.get(nums[left]) - 1);
//             if (hash.get(nums[left]) === 0) {
//                 hash.delete(nums[left]);
//             }
//             left++;
//         }

//         count += right - left + 1;
//         console.log(right + ' - right - ' + left + ' - left - ' + count + ' - count')
//     }

//     return count;


// };


console.log(subarraysWithKDistinct(nums, k))










// let answer = 0;

// for (let start = 0; start < nums.length; start++) {

//     let end = start;
//     const hash = new Set();

//     while (hash.size <= k && end < nums.length) {

//         console.log(nums[end])
//         hash.add(nums[end]);
//         console.log(hash)
//         end++;
//         if (hash.size == k) {

//             answer++;
//             console.log(answer + ' - answer ')
//         }
//         //console.log(end)
//     }

//     console.log(' ------------  ')

// }


// return answer;