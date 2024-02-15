// Учитывая целочисленный массив nums, верните наиболее часто встречающийся четный элемент.

// Если есть ничья, верните наименьшую.Если такого элемента нет, верните - 1.

// 2404


nums = [4, 0, 1, 2, 2, 2, 2, 4, 4, 1]
nums = [29, 47, 21, 41, 13, 37, 25, 7]
nums = [4, 4, 4, 9, 2, 4]
nums = [0, 1, 4, 4, 2, 2, 1]

var mostFrequentEven = function (nums) {

    const hash = new Map();
    let maxFreq = 0;
    let max = -1;

    const arr = nums.filter((item) => (item % 2 === 0)).sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        hash.set(arr[i], (hash.get(arr[i]) || 0) + 1);
    }


    for (let [key, value] of hash.entries()) {
        if (value > maxFreq) {
            max = key;
            maxFreq = value;
        }
    }
    return max;
};


console.log(mostFrequentEven(nums))