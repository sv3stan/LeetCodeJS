/**
Вам дают целочисленные массивы длины n и 2D -массив, где запросы [i] = [li, ri, vali]. Каждое запросы [i] представляют собой следующее действие на Nums: Уменьшите значение в каждом индексе в диапазоне [li, ri] в Nums по большинству vali. Сумма, на которую уменьшается каждое значение, может быть выбрано независимо для каждого индекса. Ноль массив - это массив со всеми его элементами, равными 0. Возврат минимально возможного неотрицательного значения K, так что после обработки первых K запросов в последовательности Nums становится нулевым массивом. Если такого k не существует, верните -1.
 */

function minZeroArray(nums: number[], queries: number[][]): number {
    const n = nums.length;
    let left = 0,
        right = queries.length,
        answer = -1;
    function canMakeZero(k: number): boolean {
        let arr = [...nums];
        let diff = new Array(n + 1).fill(0);
        for (let i = 0; i < k; i++) {
            const [l, r, val] = queries[i];
            diff[l] -= val;
            diff[r + 1] += val;
        }
        let currentDecrement = 0;
        for (let i = 0; i < n; i++) {
            currentDecrement += diff[i];
            if (arr[i] + currentDecrement > 0) return false;
        }
        return true;
    }
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canMakeZero(mid)) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return answer;
}
