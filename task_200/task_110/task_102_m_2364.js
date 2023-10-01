// Вам дан целочисленный массив с нулевым индексом nums.
// Пара индексов(i, j) является плохой парой, если i < j и j - i != nums[j] - nums[i].
// Возвращает общее количество плохих пар в nums.
// 2364

let nums = [4, 1, 3, 3];
//nums = [1, 2, 3, 4, 5];

function countBadPairs(nums) {
    let differenceMap = new Map();
    let goodPairs = 0;
    let n = nums.length;
    for (let index = 0; index < n; index++) {
        let difference = nums[index] - index;
        if (differenceMap[difference]) {
            goodPairs += differenceMap[difference];
            differenceMap[difference] += 1;
        } else differenceMap[difference] = 1;
    }
    let totalPairs = (n * (n - 1)) / 2;
    return badPairs = totalPairs - goodPairs;
};

console.log(countBadPairs(nums));

//you can increase your goodpairs by simply checking for numbers  who has same difference as of (nums[i]) from thier index