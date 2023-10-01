// Учитывая массив целых чисел nums и целочисленную цель,
// вернуть индексы двух чисел так, чтобы они складывались в цель.
// Вы можете предположить, что каждый вход будет иметь ровно одно
// решение, и вы не можете использовать один и тот же элемент дважды.
// Вы можете вернуть ответ в любом порядке.
// 1

let nums = [3, 2, 7, 11, 15];
let target = 9;

//let nums = [8, 2, 6, 11, 15, 7, 5, 3];

function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(target - nums[i])) {
            map.set(nums[i], i);
        } else {
            return [map.get(target - nums[i]), i];
        }
    }
}

console.log(twoSum(nums, target));

// let left = 0;
// let right = nums.length - 1;

// while (nums[left] + nums[right] != target) {
//     console.log(left + ' -left- ' + right + ' -right ');

//     if (nums[left] > nums[right]) {
//         left++;
//     } else {
//         right--;
//     }
// }

//sum = nums.map(item)

// let slow = 0;
// let fast = 0;

// while (nums[slow] + nums[fast] != target) {
//     console.log(slow + ' -slow- ' + fast + ' -fast ');
//     (slow < nums.lenght) ? slow-- : slow++;
//     (fast < nums.lenght) ? fast -= 2 : fast += 2;

// }

// const sortedNums = nums.filter(num => num < target).sort((a, b) => a - b);
// console.log(sortedNums + ' - sortedNums');
// //nums.sort((a, b) => a - b);
// let left;
// let right;
// let half = Math.floor(target / 2) + 1;
// console.log(half + ' - half');
// for (left = 0; half > sortedNums[left]; left++) {

//     console.log(' -cюда зашло - ');
//     for (right = sortedNums.length - 1; half < sortedNums[right]; right--) {
//         console.log(' -и сюда тоже - ');
//         console.log(sortedNums[left] + ' -sortedNums[left]- ' + sortedNums[right] + ' -sortedNums[right] - 1');
//         if (sortedNums[left] + sortedNums[right] === target) {
//             console.log(sortedNums[left] + ' -sortedNums[left]- ' + sortedNums[right] + ' -sortedNums[right] - 2 ');
//             return sum = [sortedNums[left], sortedNums[right]];
//         }
//     }

//     console.log(sortedNums[left] + ' -sortedNums[left]- ' + sortedNums[right] + ' -sortedNums[right]  - 3');
// };

//     const sortedNums = nums.filter((num) => num < target).sort((a, b) => a - b);
//     let left;
//     let right;
//     const half = Math.ceil(target / 2);
//     for (left = 0; half > sortedNums[left]; left++) {
//         for (right = sortedNums.length - 1; half < sortedNums[right]; right--) {
//             if (sortedNums[left] + sortedNums[right] === target) {
//                 return (sum = [sortedNums[left], sortedNums[right]]);
//             }
//         }
//     }
// }

//let sum = [];
// let left = 0;
// let right = nums.length - 1;

// while (nums[left] + nums[right] != target) {
//     console.log(left + ' -left- ' + right + ' -right ');

//     if (nums[left] > nums[right]) {
//         left++;
//     } else {
//         right--;
//     }
// }

//sum = nums.map(item)

// let slow = 0;
// let fast = 0;

// while (nums[slow] + nums[fast] != target) {
//     console.log(slow + ' -slow- ' + fast + ' -fast ');
//     (slow < nums.lenght) ? slow-- : slow++;
//     (fast < nums.lenght) ? fast -= 2 : fast += 2;

// }

// const sortedNums = nums.filter(num => num < target).sort((a, b) => a - b);
// console.log(sortedNums + ' - sortedNums');
// //nums.sort((a, b) => a - b);
// let left;
// let right;
// let half = Math.floor(target / 2) + 1;
// console.log(half + ' - half');
// for (left = 0; half > sortedNums[left]; left++) {

//     console.log(' -cюда зашло - ');
//     for (right = sortedNums.length - 1; half < sortedNums[right]; right--) {
//         console.log(' -и сюда тоже - ');
//         console.log(sortedNums[left] + ' -sortedNums[left]- ' + sortedNums[right] + ' -sortedNums[right] - 1');
//         if (sortedNums[left] + sortedNums[right] === target) {
//             console.log(sortedNums[left] + ' -sortedNums[left]- ' + sortedNums[right] + ' -sortedNums[right] - 2 ');
//             return sum = [sortedNums[left], sortedNums[right]];
//         }
//     }

//     console.log(sortedNums[left] + ' -sortedNums[left]- ' + sortedNums[right] + ' -sortedNums[right]  - 3');
// };

// const sortedNums = nums.filter((num) => num < target).sort((a, b) => a - b);
// let left;
// let right;
// const half = Math.ceil(target / 2);
// for (left = 0; half > sortedNums[left]; left++) {
//     for (right = sortedNums.length - 1; half < sortedNums[right]; right--) {
//         if (sortedNums[left] + sortedNums[right] === target) {
//             return (sum = [sortedNums[left], sortedNums[right]]);
//         }
//     }
// }
