// Для массива целых чисел nums с нулевым индексом длины n и целого числа k вернуть количество пар(i, j), 
// где 0 <= i < j < n, таких, что nums[i] == nums[j] и(i * j) делится на k.
// 2176
let nums = [3, 1, 2, 2, 2, 1, 3];
let k = 2;

function countPairs(nums, k) {
    let count = 0;
    const n = nums.length;
    const map = new Map();

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (!map.has(num)) {
            map.set(num, []);
        }
        map.get(num).push(i);
    }

    for (const [num, quantity] of map.entries()) {
        for (let i = 0; i < quantity.length - 1; i++) {
            for (let j = i + 1; j < quantity.length; j++) {
                if ((quantity[i] * quantity[j]) % k === 0) {
                    count++;
                }
            }
        }
    }

    return count;
};

console.log(countPairs(nums, k));












    // for (let i = 0; i < nums.length; i++) {

    //     if (map.has(nums[i])) {
    //         console.log(map.get(nums[i]))
    //         if ((map.get(nums[i]) % i)) {
    //             count++;
    //         }
    //     } else {
    //         map.set(nums[i], i)
    //     }
    //     console.log(map)
    // }