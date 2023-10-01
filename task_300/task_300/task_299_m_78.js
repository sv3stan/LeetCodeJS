// Учитывая целочисленный массив чисел уникальных элементов, 
// верните все возможные подмножества (набор мощности).
// Набор решений не должен содержать повторяющихся подмножеств.
// Верните решение в любом порядке.
// 78

nums = [1, 2, 3]


var subsets = function (nums) {

    const answer = [];

    function backtrack(current, index) {
        answer.push([...current]);

        for (let i = index; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(current, i + 1);
            current.pop();
        }
    }

    backtrack([], 0);
    return answer;

};


console.log(subsets(nums))