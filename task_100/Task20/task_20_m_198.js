// Вы профессиональный грабитель, планирующий ограбить дома вдоль улицы.
// В каждом доме спрятана определенная сумма денег, единственное ограничение, 
// мешающее вам ограбить каждый из них, заключается в том, что в соседних 
// домах подключены системы безопасности, и она автоматически свяжется с 
// полицией, если два соседних дома будут взломаны в одну и ту же ночь.
// Учитывая целочисленный массив nums, представляющий сумму денег в каждом 
// доме, верните максимальную сумму денег, которую вы можете ограбить сегодня 
// вечером, не предупредив полицию

// 198

let nums = [1, 2, 3, 1];
//let nums = [2, 7, 9, 3, 1];
//let nums = [1];
//let nums = [2, 1];
//let nums = [2, 3, 2];
//let nums = [];
//let nums = [6, 1, 2, 10, 4]; 
nums = [6, 3, 2, 8, 4, 1, 7];
//nums = [20, 3, 9, 25, 1];
//nums = [2, 1];



function rob(nums) {
    // const length = nums.length;
    // if (length === 0) return 0;
    // const dp = Array.from({ length: length }).fill(0);
    // dp[0] = nums[0];
    // if (nums.length > 1) {
    //     dp[1] = Math.max(nums[0], nums[1]);
    // }


    // //if (length === 2) return Math.max(dp[0], dp[1]);
    // for (let i = 2; i < length; i++) {
    //     dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    //     // console.log(dp)
    // }
    // //console.log(dp[length - 1])
    // return dp[length - 1];

    const n = nums.length;

    nums[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {

        nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1]);

        console.log(nums)
    }


    return nums[n - 1];
};

console.log(rob(nums));









// var rob = function (nums) {
//     const length = nums.length;

//     if (length < 3) return Math.max(...nums);
//     prevPrevZero = nums[0];
//     prevZero = Math.max(nums[0], nums[1]);
//     currentZero = 0;
//     for (let i = 2; i < length; i++) {
//         currentZero = Math.max(prevPrevZero + nums[i], prevZero);
//         prevPrevZero = prevZero;
//         prevZero = currentZero;
//     }

//     return currentZero;
// };







//  первоначальное решение по формуле
// function rob(nums) {

//     let sum = [];

//     if (nums.length == 0) {
//         return -1;
//     }
//     if (nums.length == 1) {
//         return nums[0];
//     }
//     if (nums.length == 2) {
//         return Math.max(nums[0], nums[1]);
//     }
//     sum[0] = nums[0];
//     sum[1] = Math.max(nums[0], nums[1]);
//     for (let i = 2; i < nums.length; i++) {
//         console.log(i + ' -- i');
//         sum.push(Math.max(sum[i - 2] + nums[i], sum[i - 1]));
//         console.log(sum);
//     }

//     return sum[sum.length - 1];
// };