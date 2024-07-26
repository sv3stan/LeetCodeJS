// Дан массив целых чисел nums, отсортируйте
// его в порядке возрастания и верните его.
// Вы должны решить задачу без использования
// каких - либо встроенных функций с временной
// сложностью O(nlog(n)) и с минимально возможной
// пространственной сложностью.
// 912

nums = [5, 1, 1, 2, 0, 0];

let sortArray = function (nums) {
    function merge(left, right) {
        const res = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                res.push(left[i]);
                i++;
            } else {
                res.push(right[j]);
                j++;
            }
        }
        while (i < left.length) {
            res.push(left[i]);
            i++;
        }
        while (j < right.length) {
            res.push(right[j]);
            j++;
        }
        return res;
    }
    const len = nums.length;
    if (len < 2) {
        return [...nums];
    } else {
        const middle = Math.floor(len / 2);
        const left = sortArray(nums.slice(0, middle));
        const right = sortArray(nums.slice(middle));
        return merge(left, right);
    }
};

console.log(sortArray(nums));

// const stack = [{ left: 0, right: nums.length - 1 }];
// console.log(stack)
// while (stack.length) {
//     const { left, right } = stack.pop();

//     if (left >= right) continue;

//     let pivot = nums[right];
//     let i = left - 1;

//     for (let j = left; j < right; j++) {
//         if (nums[j] < pivot) {
//             i++;
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//         }
//     }

//     [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]];

//     stack.push({ left, right: i });
//     stack.push({ left: i + 2, right });
// }

// return nums;

// if (nums.length <= 1) {
//     return nums;
// }
// const peak = nums[0];
// const left = [];
// const right = [];

// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < peak) {
//         left.push(nums[i]);
//     } else {
//         right.push(nums[i]);
//     }
// }
// return [...sortArray(left), peak, ...sortArray(right)];
