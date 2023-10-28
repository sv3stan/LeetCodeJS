// Дан массив целых чисел nums, отсортируйте 
// его в порядке возрастания и верните его.
// Вы должны решить задачу без использования 
// каких - либо встроенных функций с временной 
// сложностью O(nlog(n)) и с минимально возможной 
// пространственной сложностью.
// 912

nums = [5, 1, 1, 2, 0, 0]

var sortArray = function (nums) {



    const stack = [{ left: 0, right: nums.length - 1 }];
    console.log(stack)
    while (stack.length) {
        const { left, right } = stack.pop();

        if (left >= right) continue;

        let pivot = nums[right];
        let i = left - 1;

        for (let j = left; j < right; j++) {
            if (nums[j] < pivot) {
                i++;
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]];

        stack.push({ left, right: i });
        stack.push({ left: i + 2, right });
    }

    return nums;



};


console.log(sortArray(nums))

















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