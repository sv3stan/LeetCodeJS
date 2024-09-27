/**
Вам дан массив nums с нулевым индексом, состоящий из n различных положительных целых чисел. Примените m операций к этому массиву, где в i-й операции вы замените число Operations[i][0] на Operations[i][1].
Гарантируется, что в i-й операции:
Operations[i][0] существует в числах.
Operations[i][1] не существует в числах.
Верните массив, полученный после применения всех операций.
 */
let nums = [1, 2, 4, 6];
let operations = [
    [1, 3],
    [4, 7],
    [6, 1],
];

let arrayChange = function (nums, operations) {
    const indexMap = {};
    for (let i = 0; i < nums.length; i++) indexMap[nums[i]] = i;
    for (let i = 0; i < operations.length; i++) {
        let oldNum = operations[i][0];
        let newNum = operations[i][1];
        let index = indexMap[oldNum];
        nums[index] = newNum;
        delete index[oldNum];
        indexMap[newNum] = index;
    }
    return nums;
};

console.log(arrayChange(nums, operations));
