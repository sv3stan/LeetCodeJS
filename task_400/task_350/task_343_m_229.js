// Дан целочисленный массив размера n.Найдите все элементы, 
// которые встречаются более ⌊ n / 3 ⌋ раз.
// 229

nums = [3, 2, 3, 3, 1, 2, 3, 3, 4, 5, 3, 3];

var majorityElement = function (nums) {

    const answer = []
    const hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], (hash.get(nums[i]) ?? 0) + 1);
        if (hash.get(nums[i]) > Math.floor(nums.length / 3)) {
            answer.push(nums[i]);
            hash.set(nums[i], NaN)
        }
    }
    return answer
};


console.log(majorityElement(nums))