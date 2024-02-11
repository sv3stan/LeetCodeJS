// Учитывая набор различных положительных целых чисел nums, 
// верните самый большой answer подмножества, такой, 
// что каждая пара(answer[i], answer[j]) элементов в этом подмножестве удовлетворяет:
// answer[i] % answer[j] == 0, или
// answer[j] % answer[i] == 0
// Если существует несколько решений, верните любое из них.

// 368

nums = [1, 2, 4, 8]
// nums = [3, 7, 9, 18]
// nums = [1];
// nums = [2, 3, 4, 8]
// nums = [2, 3, 4, 6, 8]

nums = [5, 9, 18, 54, 108, 540, 90, 180, 360, 720]

var largestDivisibleSubset = function (nums) {
    const length = nums.length;

    if (length <= 1) {
        return nums;
    }

    nums.sort((a, b) => a - b);

    const dp = Array.from({ length: length }).fill(1);
    const prev = Array.from({ length: length }).fill(-1);


    let maxIndex = 0;


    for (let i = 1; i < length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[i] > dp[maxIndex]) {
            maxIndex = i;
        }
    }

    const answer = [];
    while (maxIndex !== -1) {
        answer.push(nums[maxIndex]);
        maxIndex = prev[maxIndex];
    }

    return answer.reverse();
};


console.log(largestDivisibleSubset(nums))