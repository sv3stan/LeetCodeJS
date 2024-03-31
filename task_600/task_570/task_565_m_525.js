// Учитывая числа двоичного массива, верните максимальную 
// длину непрерывного подмассива с равным количеством 0 и 1.

// 525

nums = [1, 0, 1, 0, 0, 0, 1, 1, 1, 0];
// nums = [0, 0, 1, 0, 0, 0, 1, 1]


var findMaxLength = function (nums) {

    const len = nums.length;

    const num = Array.from({ lehgth: 2 * len + 1 }).fill(-2);

    num[len] = -1;

    let maxlen = 0;
    let count = 0;

    for (let i = 0; i < len; i++) {
        nums[i] === 0 ? count-- : count++;
        
        if (num[count + len] >= -1) {
            maxlen = Math.max(maxlen, i - num[count + len]);
        } else {
            num[count + len] = i;
        }
    }
    return maxlen;

};


console.log(findMaxLength(nums))



// let maxLen = 0;

// for (let start = 0; start <= nums.length; start++) {
//     let ones = 0;
//     let zeros = 0;
//     // console.log(start)
//     for (let i = start; i <= nums.length; i++) {

//         nums[i] === 0 ? zeros++ : ones++;
//         //   console.log(zeros)
//         if (ones === zeros) {
//             maxLen = Math.max(maxLen, zeros);
//         }
//     }
// }

// return maxLen;
