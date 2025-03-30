/**
Вам дают массивные числа, состоящие из положительных целых чисел. Мы называем Subarray Nums Nice, если кусочка и каждая пара элементов, которые находятся в разных положениях в субраре, равны 0. Верните длину самого длинного хорошего субаррея. Subarray является смежной частью массива. Обратите внимание, что субрари длины 1 всегда считаются хорошими.
 */

function longestNiceSubarray(nums: number[]): number {
    let left = 0;
    let bitwiseOr = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        while ((bitwiseOr & nums[right]) !== 0) {
            bitwiseOr ^= nums[left];
            left++;
        }

        bitwiseOr |= nums[right];
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
