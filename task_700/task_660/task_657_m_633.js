/**
 Учитывая неотрицательное целое число c, решите, существуют ли два целых числа a и b такие, что a2 + b2 = c. 
 */

let c = 25;

let judgeSquareSum = function (c) {
    let left = 0;
    let right = Math.floor(Math.sqrt(c));

    while (left <= right) {
        if (left * left + right * right === c) return true;
        if (left * left + right * right < c) {
            left++;
        } else {
            right--;
        }
    }
    return false;
};

console.log(judgeSquareSum(c));
