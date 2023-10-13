// Учитывая массив nums из n целых чисел, где nums[i] находится 
// в диапазоне[1, n], верните массив всех целых чисел в 
// диапазоне[1, n], которые не встречаются в nums.
// 448


nums = [4, 3, 2, 7, 8, 2, 3, 1];

//nums = [1, 1]
//nums = [2, 2]
var findDisappearedNumbers = function (nums) {

    const max = Math.max(...nums);
    const length = nums.length;
    //const min = Math.min(...nums);
    //console.log(min)
    const hash = [...new Set(nums)].sort((a, b) => a - b);
    const answer = [];
    for (let i = 1; i <= Math.max(max, length); i++) {
        if (!hash.includes(i)) {
            answer.push(i);
        }

    }

    return answer;

    console.log(answer)




};

console.log(findDisappearedNumbers(nums))