/**
Вам дана карта серверного центра, представленная в виде сетки целочисленной матрицы m * n, где 1 означает, что в этой ячейке есть сервер, а 0 означает, что это не сервер. Говорят, что два сервера взаимодействуют, если они находятся в одной строке или в одном столбце. Возвращает количество серверов, которые взаимодействуют с любым другим сервером.
 */

function countServers(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;

    const rowCount = new Array(rows).fill(0);
    const colCount = new Array(cols).fill(0);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    let result = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1 && (rowCount[i] > 1 || colCount[j] > 1)) {
                result++;
            }
        }
    }

    return result;
}
