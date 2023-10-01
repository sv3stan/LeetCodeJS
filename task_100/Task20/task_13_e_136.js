// Учитывая непустой массив целых чисел nums, 
// каждый элемент появляется дважды, кроме одного.
// Найти этот элемент.
// Вы должны реализовать решение с линейной сложностью 
// времени выполнения и использовать только постоянное 
// дополнительное пространство.
// 136

let nums = [4, 4, 1, 6, 2, 1, 2];
//let nums = [2, 2, 1];
//let nums = [1];

function singleNumber(nums) {
    // nums.sort((a, b) => a - b);
    // for (let i = 0; i < nums.length; i += 2) {
    //     if (nums[i] != nums[i + 1]) {
    //         return nums[i];
    //     }
    // }
    // return -1;
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
};



console.log(singleNumber(nums));