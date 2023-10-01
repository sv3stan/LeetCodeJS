// Учитывая массив целых чисел nums и целое число k, вернуть количество уникальных пар k - diff в массиве.
// Пара k - diff — это пара целых чисел(nums[i], nums[j]), где верно следующее:
// 0 <= i, j < nums.length
// i != j
// | числа[i] - числа[j] | == к
// Обратите внимание, что | val | обозначает абсолютное значение val.
// 532

let nums = [3, 1, 4, 1, 5];
//let nums = [1, 2, 3, 4, 5];
let k = 2;

//nums = [1, 2, 4, 4, 3, 3, 0, 9, 2, 3]
//k = 3

function findPairs(nums, k) {
    const hash = new Map();
    let count = 0;

    for (const num of nums) {
        hash.set(num, (hash.get(num) || 0) + 1);
    }

    for (const [num, quantity] of hash.entries()) {
        if ((k !== 0 && hash.has(num + k)) || (k === 0 && quantity > 1)) {
            count++;
        }
    }
    return count;
};

console.log(findPairs(nums, k));












// function findPairs(nums, k) {
//     const sortArray = nums.sort((a, b) => a - b);
//     let count = sortArray.length - 1;
//     const result = [];
//     const set = new Set();
//     while (count >= 0) {
//         current = sortArray[count];
//         //console.log(current)
//         target = current - k;
//         left = 0;
//         right = count - 1;

//         while (left <= right) {
//             const middle = (left + right) >> 1;
//             console.log(left + ' - left - ' + middle + ' - middle - ' + right + ' - right - ');
//             console.log(sortArray)
//             if (sortArray[middle] === target) {
//                 console.log('============')
//                 set.add(sortArray[middle], current);
//                 result.push([sortArray[middle], current]);
//             }

//             if ((sortArray[left] <= sortArray[middle] && sortArray[left] <= target && target < sortArray[middle]) ||
//                 (!(sortArray[left] <= sortArray[middle]) && !(sortArray[middle] < target && target <= sortArray[right]))) {
//                 right = middle - 1;
//             } else {
//                 left = middle + 1;
//             }
//         }



//         //sortArray.pop()
//         count--;

//     }
//     console.log(set)
//     console.log(result)


// };




    // мое принятое решение, но не эффективное - лучше чем 43% всего лишь
    // const sortArray = nums.sort((a, b) => a - b);
    // let count = sortArray.length - 1;
    // const set = new Set();
    // while (count >= 0) {
    //     current = sortArray[count];
    //     target = current - k;
    //     left = 0;
    //     right = count - 1;
    //     while (left <= right) {
    //         const middle = (left + right) >> 1;
    //         if (sortArray[middle] === target) {
    //             var uniqueKey = sortArray[middle] + '-' + current;
    //             set.add(uniqueKey);
    //         }
    //         if ((sortArray[left] <= sortArray[middle] && sortArray[left] <= target && target < sortArray[middle]) ||
    //             (!(sortArray[left] <= sortArray[middle]) && !(sortArray[middle] < target && target <= sortArray[right]))) {
    //             right = middle - 1;
    //         } else {
    //             left = middle + 1;
    //         }
    //     }
    //     count--;
    // }
    // return set.size;