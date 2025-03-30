/**
Вам дают 0-индексированную двухмерную целочисленную сеть сетки размера n * n со значениями в диапазоне [1, N2]. Каждое целое число появляется ровно один раз, кроме A, который появляется дважды, и B, который отсутствует. Задача состоит в том, чтобы найти повторяющиеся и отсутствующие числа A и B. Вернуть 0-индексацию целочисленного массива ANS размера 2, где ANS [0] равна A и ANS [1], равно B.
 */

function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const n = grid.length;
    const hash = new Map<number, number>();
    const answer = [0, 0];
    for (let i = 1; i <= n * n; i++) {
        hash.set(i, 1);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (hash.get(grid[i][j]) === undefined) answer[0] = grid[i][j];
            if (hash.get(grid[i][j]) == 1) hash.delete(grid[i][j]);
        }
    }
    for (const [key] of hash) {
        answer[1] = key;
    }
    return answer;
}
