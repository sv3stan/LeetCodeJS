// Учитывая массив nums из n целых чисел, где nums[i] находится 
// в диапазоне[1, n], верните массив всех целых чисел в 
// диапазоне[1, n], которые не встречаются в nums.
// 448


nums = [4, 3, 2, 7, 8, 2, 3, 1];

var findDisappearedNumbers = function (nums) {


    const hash = [...new Set(nums)].sort((a, b) => a - b);


    console.log(hash)

};

console.log(findDisappearedNumbers(nums))