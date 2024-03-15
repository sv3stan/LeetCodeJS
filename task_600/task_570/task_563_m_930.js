// Учитывая двоичный массив nums и целочисленную цель, 
// верните количество непустых подмассивов с целью суммы.
// Подмассив — это непрерывная часть массива.

// 930


nums = [0, 0, 0, 0, 0], goal = 0;

var numSubarraysWithSum = function (nums, goal) {

    let count = 0;

    let index = 0;
    while (index < nums.length) {

        let i = index;
        let sum = 0;
        while (sum <= goal) {
            sum += nums[i];
            if (sum === goal) {
                count++;
            }
            i++;
        }

        index++
    }
    return count;

};


console.log(numSubarraysWithSum(nums, goal))