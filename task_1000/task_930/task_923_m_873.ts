/**
 Последовательность x1, x2, ..., xn-подобный фибоначчи, если: n> = 3 xi + xi + 1 == xi + 2 для всех i + 2 <= n Учитывая строго увеличивающегося ARR массива положительных целых чисел, образующих последовательность, верните длину самой длинной Fibonacci-подобной последующей подпоследовательности ARR. Если не существует, верните 0. Последующая последовательность получена из другой последовательности ARR, удаляя любое количество элементов (включая нет) из ARR, без изменения порядка оставшихся элементов. Например, [3, 5, 8] представляет собой последующую [3, 4, 5, 6, 7, 8].
 */

function lenLongestFibSubseq(arr: number[]): number {
    const n = arr.length;
    const indexMap: Map<number, number> = new Map();
    for (let i = 0; i < n; i++) {
        indexMap.set(arr[i], i);
    }
    const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(2));
    let maxLength = 0;
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < j; i++) {
            const prevValue = arr[j] - arr[i];
            if (indexMap.has(prevValue)) {
                const k = indexMap.get(prevValue)!;
                if (k < i) {
                    dp[i][j] = dp[k][i] + 1;
                    maxLength = Math.max(maxLength, dp[i][j]);
                }
            }
        }
    }
    return maxLength >= 3 ? maxLength : 0;
}
