// Учитывая двоичный массив nums, вам следует удалить из него один элемент.
// Возвращает размер самого длинного непустого подмассива, содержащего только 1 
// в результирующем массиве.Верните 0, если такого подмассива нет.
// 1493

nums = [0, 1, 1, 1, 1, 1, 1, 1, 0, 1];
nums = [1, 1, 0, 1];

var longestSubarray = function (nums) {

    const length = nums.length - 1;
    let countZero = 0;
    let answer = 0;
    let start = 0;

    for (let i = 0; i <= length; i++) {
        countZero += (nums[i] === 0);
        while (countZero > 1) {
            countZero -= (nums[start] == 0);
            start++;
        }
        answer = Math.max(answer, i - start);
    }
    return answer;

};

console.log(longestSubarray(nums))























   // const length = nums.length - 1;
    // let currentOnes = 0;
    // let prevOnes = 0;
    // let maxOnes = 0;
    // let countZero = 0;
    // for (let i = 0; i < length; i++) {

    //     if (nums[i] === 1) {
    //         currentOnes++;
    //         countZero = 0;
    //     } else {
    //         prevOnes = currentOnes;
    //         currentOnes = 0;
    //         countZero++;
    //     }
    //     if (maxOnes < prevOnes + currentOnes && countZero < 2) maxOnes = currentOnes + prevOnes;
    //     console.log(prevOnes + ' - prevOnes - ' + currentOnes + ' - currentOnes - ' + i + ' - i')
    //     console.log(countZero + ' - countZero - ' + maxOnes + ' - maxOnes - ++++++++++++++++++++')

    // }
