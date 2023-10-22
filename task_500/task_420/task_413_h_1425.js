// Учитывая целочисленный массив nums и целое число k, 
// верните максимальную сумму непустой подпоследовательности 
// этого массива такую, что для каждых двух последовательных 
// целых чисел в подпоследовательности nums[i] и nums[j], 
// где i < j, условие j - i <= k выполнено.
// Подпоследовательность массива получается удалением некоторого 
// количества элементов(может быть нулевым) из массива, 
// оставляя оставшиеся элементы в исходном порядке.
// 1425


nums = [10, 2, -10, 5, 20], k = 2;


var constrainedSubsetSum = function (nums, k) {

    let dQueue = [];
    for (let i = 0; i < nums.length; i++) {

        nums[i] += dQueue.length > 0 ? nums[dQueue[0]] : 0;

        while (dQueue.length > 0 && (i - dQueue[0] >= k || nums[i] >= nums[dQueue[dQueue.length - 1]]))
            (nums[i] >= nums[dQueue[dQueue.length - 1]]) ? dQueue.pop() : dQueue.shift();


        if (nums[i] > 0) dQueue.push(i);

    }
    return Math.max(...nums);

};


console.log(constrainedSubsetSum(nums, k))