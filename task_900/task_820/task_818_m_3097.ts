/**
You are given an array nums of non-negative integers and an integer k. An array is called special if the bitwise OR of all of its elements is at least k. Return the length of the shortest special non-empty subarray of nums, or return -1 if no special subarray exists.
Вам дан массив nums неотрицательных целых чисел и целое число k. Массив называется специальным, если побитовое ИЛИ всех его элементов не меньше k. Возвращает длину кратчайшего специального непустого подмассив чисел или верните -1, если специального подмассива не существует.
 */

let nums = [1, 2, 32, 21];
let k = 55;

function minimumSubarrayLength(nums: number[], k: number): number {
    const n = nums.length;
    let minLength = n + 1; // Изначально устанавливаем минимальную длину больше длины массива
    const bitCount: number[] = new Array(32).fill(0); // Массив для хранения количества включенных битов для каждого бита
    let current = 0; // Текущее значение OR для текущего окна

    let left = 0;

    for (let right = 0; right < n; right++) {
        // Обновляем текущее значение OR, включая nums[right]
        current |= nums[right];

        // Обновляем массив bitCount, чтобы отметить, какие биты включены в current
        for (let bit = 0; bit < 32; bit++) {
            if ((nums[right] >> bit) & 1) {
                bitCount[bit]++;
            }
        }

        // Сжимаем окно слева, пока текущее значение OR >= k
        while (current >= k && left <= right) {
            // Обновляем минимальную длину, если текущее окно удовлетворяет условию
            minLength = Math.min(minLength, right - left + 1);

            // Уменьшаем значение OR, убирая nums[left] из текущего окна
            for (let bit = 0; bit < 32; bit++) {
                if ((nums[left] >> bit) & 1) {
                    // Если это был последний элемент с этим битом, убираем бит из current
                    if (--bitCount[bit] === 0) {
                        current ^= 1 << bit;
                    }
                }
            }

            // Сдвигаем левую границу окна вправо
            left++;
        }
    }

    // Если мы не нашли подмассив, возвращаем -1; иначе — минимальную длину
    return minLength === n + 1 ? -1 : minLength;
}

console.log(minimumSubarrayLength(nums, k));
