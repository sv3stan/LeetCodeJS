// Учитывая массив целых чисел nums, верните количество хороших пар.
// Пара(i, j) называется хорошей, если nums[i] == nums[j] и i < j.
// 1512

nums = [1, 2, 3, 1, 1, 3];
nums = [1, 1, 1, 1]
var numIdenticalPairs = function (nums) {

    const hashTable = new Map();
    const memo = new Map();
    let count = 0;

    function factorialRecursive(n) {
        if (n === 0) {
            return 1;
        }
        if (memo.has(n)) {
            return memo.get(n)
        } else {
            memo.set(n, n * factorialRecursive(n - 1))
            return memo.get(n)
        }
    }
    for (const item of nums) hashTable.set(item, (hashTable.get(item) || 0) + 1);
    for (const value of hashTable.values()) {

        if (value > 1) {
            count += (factorialRecursive(value) / (2 * factorialRecursive(value - 2)));
        }
    }
    return count
};


console.log(numIdenticalPairs(nums))