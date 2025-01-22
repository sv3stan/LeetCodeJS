/**
Вам дан целочисленный массив arr с нулевым индексом и целочисленная матрица m x n mat. arr и mat содержат все целые числа в диапазоне [1, m * n]. Просмотрите каждый индекс i в arr, начиная с индекса 0, и закрасьте ячейку в mat, содержащую целое число arr[i]. Возвращает наименьший индекс i, при котором строка или столбец будут полностью закрашены матом.
 */

function firstCompleteIndex(arr: number[], mat: number[][]): number {
    const m = mat.length;
    const n = mat[0].length;

    const cellMap: Map<number, [number, number]> = new Map();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            cellMap.set(mat[i][j], [i, j]);
        }
    }

    const rows = Array(m).fill(0);
    const cols = Array(n).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const [row, col] = cellMap.get(arr[i])!;

        rows[row]++;
        cols[col]++;

        if (rows[row] === n || cols[col] === m) {
            return i;
        }
    }

    return -1;
}
