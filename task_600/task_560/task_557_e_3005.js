// Вам дан массив nums, состоящий из целых положительных чисел.
// Возвращает общие частоты элементов в числах так, 
// чтобы все эти элементы имели максимальную частоту.
// Частота элемента — это количество вхождений этого элемента в массив.
// 3005


nums = [1, 2, 2, 3, 1, 4]
// nums = [1, 2, 3, 4, 5]
// nums = [6, 13, 15, 15, 11, 6, 7, 12, 4, 11]

var maxFrequencyElements = function (nums) {

    const hash = new Map();
    let sum = 0;



    console.log(nums)

    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], (hash.get(nums[i]) + 1) || 1)
    }
    console.log(hash)
    const arr = [];
    for (const [value, items] of hash.entries()) {
        arr.push([value, items]);
    }

    arr.sort((a, b) => b[1] - a[1])

    console.log(arr)

    const freq = arr[0][1];
    console.log(freq);

    let i = 0;
    while (i < arr.length && arr[i][1] === freq) {
        console.log(i)
        sum += arr[i][1];
        i++;
        console.log(sum + ' - sum')
    }

    return sum;
};


console.log(maxFrequencyElements(nums))