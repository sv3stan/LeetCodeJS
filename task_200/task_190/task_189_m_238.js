// Учитывая целочисленный массив nums, верните ответ массива, такой, 
// что ответ[i] равен произведению всех элементов nums, кроме nums[i].
// Произведение любого префикса или суффикса чисел гарантированно вписывается в 32 - битное целое число.
// Вы должны написать алгоритм, который работает за время O(n) и не использует операцию деления.

// 238
nums = [2, 3, 4, 5]
nums = [-1, 1, 0, -3, 3]
var productExceptSelf = function (nums) {
    const length = nums.length - 1;
    const answer = [];
    answer[0] = 1;

    for (let i = 1; i <= length; i++) answer[i] = nums[i - 1] * answer[i - 1];

    let right = 1;
    for (let i = length; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i]
    }
    return answer;
};

console.log(productExceptSelf(nums))























//var productExceptSelf = function (nums) {
//     const length = nums.length - 1;
//     const left = [...nums];
//     const right = [...nums];
//     const answer = [];

//     left.unshift(1)
//     right.push(1)
//     console.log(left)
//     for (let i = 2; i <= length; i++) {


//         left[i] = left[i - 1] * left[i];
//         console.log(left)
//     }

//     console.log(right)
//     for (let i = length; i > 0; i--) {
//         console.log(right)
//         right[i - 1] = right[i] * right[i - 1];
//     }

//     right.shift();
//     left.pop();
//     console.log(right)
//     console.log(left)

//     for (let i = 0; i <= length; i++) answer.push(left[i] * right[i])

//     return answer;

// };