// Вам дан целочисленный массив nums и целое положительное число k.
// Возвращает количество подмассивов, в которых максимальный 
// элемент nums встречается в этом подмассиве не менее k раз.
// Подмассив — это непрерывная последовательность элементов массива.

// 2962

nums = [1, 3, 2, 3, 3], k = 2

var countSubarrays = function (nums, k) {

    let max = Math.max(...nums);
    let result = 0;
    let begin = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] === max) {
            k--;
        }
        while (!k) {
            if (nums[begin] === max) {
                k++;
            }
            begin++;
        }
        result += begin;
    }
    return result;


};


console.log(countSubarrays(nums, k))