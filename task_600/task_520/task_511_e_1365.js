// Учитывая массив nums, для каждого nums[i] определите, 
// сколько чисел в массиве меньше его.То есть для каждого 
// nums[i] вам нужно подсчитать количество допустимых j, 
// таких что j != i и nums[j] < nums[i].
// Вернуть ответ в массиве.
// 1365

nums = [8, 1, 2, 2, 3]
nums = [7, 7, 7, 7]
nums = [6, 5, 4, 8]

var smallerNumbersThanCurrent = function (nums) {

    const n = nums.length;
    const hash = new Map();
    const sortNums = [...nums];
    const answer = Int8Array.from({ length: n });

    sortNums.sort((a, b) => b - a)

    for (let i = 0; i < n; i++) {
        hash.set(sortNums[i], (hash.get(sortNums[i]) || 0) + 1);
    }

    let count = n;
    for (const [key, value] of hash.entries()) {
        count -= value;
        nums.forEach((item, index) => {
            if (item === key) {
                answer[index] = count;
            }
        });
    }
    return answer;

};


console.log(smallerNumbersThanCurrent(nums))












// const n = nums.length;
// const hash = new Map();
// const sortNums = [...nums];
// sortNums.sort((a, b) => b - a)

// for (let i = 0; i < n; i++) {
//     hash.set(sortNums[i], (hash.get(sortNums[i]) || 0) + 1);
// }

// const hashCount = new Map();
// let count = n;

// for (const [key, value] of hash.entries()) {
//     count -= value;
//     hashCount.set(key, count)
// }

// const answer = [];
// for (let i = 0; i < n; i++) {
//     answer.push(hashCount.get(nums[i]))
// }

// return answer;