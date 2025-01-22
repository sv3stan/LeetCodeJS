/**
Учитывая целочисленную матрицу m x n heightMap, представляющую высоту каждой элементарной ячейки на двумерной карте высот, верните объем воды, которую она может удержать после дождя.
 */

function trapRainWater(heightMap: number[][]): number {
    const rows = heightMap.length;
    const cols = heightMap[0].length;
    const minHeap: [number, [number, number]][] = [];
    const visited: number[][] = Array.from({ length: rows }, () =>
        Array(cols).fill(0),
    );

    for (let i = 0; i < cols; i++) {
        minHeap.push([heightMap[0][i], [0, i]]);
        minHeap.push([heightMap[rows - 1][i], [rows - 1, i]]);
        visited[0][i] = 1;
        visited[rows - 1][i] = 1;
    }

    for (let i = 1; i < rows - 1; i++) {
        minHeap.push([heightMap[i][0], [i, 0]]);
        minHeap.push([heightMap[i][cols - 1], [i, cols - 1]]);
        visited[i][0] = 1;
        visited[i][cols - 1] = 1;
    }

    const delrow = [-1, 0, 1, 0];
    const delcol = [0, 1, 0, -1];
    let volume = 0;

    while (minHeap.length > 0) {
        minHeap.sort((a, b) => a[0] - b[0]);
        const [height, [curRow, curCol]] = minHeap.shift()!;

        for (let i = 0; i < 4; i++) {
            const newRow = curRow + delrow[i];
            const newCol = curCol + delcol[i];

            if (
                newRow >= 0 &&
                newCol >= 0 &&
                newRow < rows &&
                newCol < cols &&
                !visited[newRow][newCol]
            ) {
                volume += Math.max(height - heightMap[newRow][newCol], 0);
                minHeap.push([
                    Math.max(height, heightMap[newRow][newCol]),
                    [newRow, newCol],
                ]);
                visited[newRow][newCol] = 1;
            }
        }
    }
    return volume;
}
