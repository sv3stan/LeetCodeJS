/**
The bitwise AND of an array nums is the bitwise AND of all integers in nums. For example, for nums = [1, 5, 3], the bitwise AND is equal to 1 & 5 & 3 = 1. Also, for nums = [7], the bitwise AND is 7. You are given an array of positive integers candidates.Evaluate the bitwise AND of every combination of numbers of candidates.Each number in candidates may only be used once in each combination. Return the size of the largest combination of candidates with a bitwise AND greater than 0.
Побитовое И для массива nums — это побитовое И для всех целых чисел в nums. Например, для nums = [1, 5, 3] побитовое И равно 1, 5 и 3 = 1. Кроме того, для nums = [7] побитовое И равно 7. Вам дан массив кандидатов в положительные целые числа. Оцените побитовое И каждой комбинации чисел кандидатов. Каждое число кандидатов можно использовать только один раз в каждой комбинации. Возвращает размер наибольшей комбинации кандидатов с побитовым И больше 0.
 */

let candidates = [16, 17, 71, 62, 12, 24, 14];

function largestCombination(candidates: number[]): number {
    let maxSize = 0;

    for (let bit = 0; bit < 32; bit++) {
        let count = 0;
        for (let el of candidates) {
            if ((el & (1 << bit)) !== 0) {
                count++;
            }
        }
        maxSize = Math.max(maxSize, count);
    }

    return maxSize;
}

// Пример использования

console.log(largestCombination(candidates)); // Вывод: 3
