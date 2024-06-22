/**
Дан массив целых чисел nums и целое число k. Непрерывный подмассив называется хорошим, если в нем содержится k нечетных чисел.
Возвращает количество хороших подмассивов.
*/

let nums = [1, 1, 2, 1, 1];
let k = 3;
nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2];
k = 2;

let numberOfSubarrays = function (nums, k) {
    let cnt = 0;
    let oddQuantity = 0;
    const freq = { 0: 1 }; // начальный элемент для учета префиксных сумм

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            oddQuantity++;
        }

        if (freq[oddQuantity - k] !== undefined) {
            cnt += freq[oddQuantity - k];
        }

        if (freq[oddQuantity] === undefined) {
            freq[oddQuantity] = 0;
        }
        freq[oddQuantity]++;
    }

    return cnt;
};

console.log(numberOfSubarrays(nums, k));
