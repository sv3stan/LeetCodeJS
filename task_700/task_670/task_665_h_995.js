/**
Вам дан двоичный массив nums и целое число k.
k-битный переворот — это выбор подмассива длины k из чисел и одновременное изменение каждого 0 в подмассиве на 1 и каждой 1 в подмассиве на 0.
Возвращает минимальное количество k-битных переворотов, необходимое для того, чтобы в массиве не было 0. Если это невозможно, верните -1.
Подмассив — это непрерывная часть массива. 
*/

let nums = [0, 0, 0, 1, 0, 1, 1, 0];
let k = 3;

let minKBitFlips = function (nums, k) {
    let len = nums.length;
    let flips = 0;
    let current_flips = 0;
    let is_flip = Array.from({ length: len }).fill(0);

    for (let i = 0; i < len; i++) {
        if (i >= k) {
            current_flips ^= is_flip[i - k];
        }

        if ((nums[i] ^ current_flips) === 0) {
            if (i + k > len) {
                return -1;
            }
            flips++;
            current_flips ^= 1;
            is_flip[i] = 1;
        }
    }

    return flips;
};

console.log(minKBitFlips(nums, k));
