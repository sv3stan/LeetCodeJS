/**
Given a 0-indexed integer array nums of size n and two integers lower and upper, return the number of fair pairs. A pair (i, j) is fair if: 0 <= i < j < n, and lower <= nums[i] + nums[j] <= upper
Учитывая целочисленный массив nums с нулевым индексом размера n и два целых числа нижнее и верхнее, верните количество справедливых пар. Пара (i, j) считается справедливой, если: 0 <= i < j < n, и нижний <= nums[i] + nums[j] <= верхний
 */

let nums = [0, 1, 7, 4, 4, 5];
let lower = 3;
let upper = 6;

function countFairPairs(nums: number[], lower: number, upper: number): number {
    // Сортируем массив для упрощения поиска
    nums.sort((a, b) => a - b);
    // Вычисляем количество пар в пределах upper + 1 и lower
    return firePairs(nums, upper + 1) - firePairs(nums, lower);

    function firePairs(nums: number[], value: number): number {
        let left = 0;
        let right = nums.length - 1;
        let ans = 0;

        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum < value) {
                // Если сумма меньше value, добавляем размер текущего окна к результату
                ans += right - left;
                left++; // Сдвигаем левый указатель вправо
            } else {
                // Если сумма больше или равна value, сдвигаем правый указатель влево
                right--;
            }
        }
        return ans;
    }
}

console.log(countFairPairs(nums, lower, upper));
