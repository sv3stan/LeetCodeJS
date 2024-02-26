// Учитывая числа двоичного массива, 
// верните максимальное количество последовательных единиц в массиве.

// 485


var findMaxConsecutiveOnes = function (nums) {

    let cnt = 0;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) {
            cnt++;
        } else {
            max = Math.max(max, cnt);
            cnt = 0;
        }

    }

    return Math.max(max, cnt);

};