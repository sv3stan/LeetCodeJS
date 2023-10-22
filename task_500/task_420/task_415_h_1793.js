// Вам дан массив целых чисел nums(с индексом 0) и целое число k.
// Оценка подмассива(i, j) определяется как 
// min(nums[i], nums[i + 1], ..., nums[j]) * (j - i + 1).
// Хороший подмассив — это подмассив, в котором i <= k <= j.
// Возвращает максимально возможную оценку хорошего подмассива.
// 1793


//nums = [1, 4, 3, 7, 4, 5], k = 3;
nums = [5, 5, 4, 5, 4, 1, 1, 1], k = 0

var maximumScore = function (nums, k) {
    const length = nums.length;
    let leftPointer = k;
    let rightPointer = k;
    let min_value = nums[k];
    let answer = min_value;

    while (leftPointer > 0 || rightPointer < length - 1) {
        (leftPointer == 0 || (rightPointer < length - 1 && nums[rightPointer + 1] > nums[leftPointer - 1])) ? rightPointer++ : leftPointer--;

        min_value = Math.min(min_value, Math.min(nums[leftPointer], nums[rightPointer]));
        answer = Math.max(answer, min_value * (rightPointer - leftPointer + 1));
    }

    return answer;
};


console.log(maximumScore(nums, k))

