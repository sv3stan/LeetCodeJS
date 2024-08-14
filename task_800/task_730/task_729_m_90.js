/**
Учитывая целочисленный массив nums, который может содержать дубликаты, верните все возможные значения подмножества  (набор мощности).
Набор решений не должен содержать повторяющихся подмно
 */

let nums = [1, 1, 2, 2, 3];

let subsetsWithDup = function (nums) {
    const answer = [];
    nums.sort((a, b) => a - b);
    function backtrack(arr, index) {
        if (arr.length === 0) answer.push([]);

        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) continue;
            arr.push(nums[i]);
            answer.push([...arr]);
            backtrack(arr, i + 1);
            arr.pop();
        }
    }
    backtrack([], 0);
    return answer;
};

console.log(subsetsWithDup(nums));
