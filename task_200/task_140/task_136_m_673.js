// Учитывая целочисленный массив nums, вернуть количество самых длинных возрастающих подпоследовательностей.
// Обратите внимание, что последовательность должна быть строго возрастающей.
// 673

nums = [1, 3, 5, 4, 7]



function findNumberOfLIS(nums) {
    const n = nums.length;
    const lengthsSubsequence = new Array(n).fill(1);
    const countsSubsequence = new Array(n).fill(1);

    let maxLength = 1;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (lengthsSubsequence[j] + 1 > lengthsSubsequence[i]) {
                    lengthsSubsequence[i] = lengthsSubsequence[j] + 1;
                    countsSubsequence[i] = countsSubsequence[j];
                } else if (lengthsSubsequence[j] + 1 === lengthsSubsequence[i]) {
                    countsSubsequence[i] += countsSubsequence[j];
                }
            }
        }
        maxLength = Math.max(maxLength, lengthsSubsequence[i]);
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        if (lengthsSubsequence[i] === maxLength) {
            result += countsSubsequence[i];
        }
    }

    return result;
};

console.log(findNumberOfLIS(nums))




// function findNumberOfLIS(nums) {
//     const n = nums.length;
//     const lengthsSubsequence = new Array(n).fill(1); // Инициализация длин подпоследовательностей
//     const countsSubsequence = new Array(n).fill(1); // Инициализация количеств подпоследовательностей

//     let maxLength = 1;

//     for (let i = 1; i < n; i++) {
//         console.log('+++++++++')
//         for (let j = 0; j < i; j++) {
//             console.log('------------')
//             if (nums[i] > nums[j]) {
//                 console.log(i + ' - i - ' + nums[i] + '- nums[i] - ' + j + ' - j - ' + nums[j] + ' - nums[j]')
//                 console.log(lengthsSubsequence[j] + '- lengthsSubsequence[j] -' + lengthsSubsequence[i] + ' - lengthsSubsequence[i]- ')
//                 if (lengthsSubsequence[j] + 1 > lengthsSubsequence[i]) {
//                     console.log('1111111')
//                     lengthsSubsequence[i] = lengthsSubsequence[j] + 1;
//                     countsSubsequence[i] = countsSubsequence[j];
//                 } else if (lengthsSubsequence[j] + 1 === lengthsSubsequence[i]) {
//                     console.log('222222222')
//                     countsSubsequence[i] += countsSubsequence[j];
//                 }
//                 console.log(countsSubsequence + ' - countsSubsequence')
//                 console.log(lengthsSubsequence + ' - lengthsSubsequence')
//             }
//         }
//         maxLength = Math.max(maxLength, lengthsSubsequence[i]);
//     }

//     let result = 0;
//     for (let i = 0; i < n; i++) {
//         if (lengthsSubsequence[i] === maxLength) {
//             result += countsSubsequence[i];
//         }
//     }

//     return result;
// };