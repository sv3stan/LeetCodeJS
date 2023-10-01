// Учитывая бинарную матрицу m x n, верните расстояние до ближайшего 0 для каждой ячейки.
// Расстояние между двумя соседними ячейками равно 1.
// 542

mat = [[0, 0, 0], [0, 1, 0], [1, 1, 1]];

var updateMatrix = function (mat) {
    const m = mat.length;
    const n = mat[0].length;
    const queue = [];


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = m * n;
            }
        }
    }

    console.log(queue)
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (queue.length > 0) {
        console.log(queue.length + ' - queue.length')
        const [row, col] = queue.shift();
        console.log(row + ' - row - ' + col + ' - col -')
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && mat[newRow][newCol] > mat[row][col] + 1) {
                console.log(mat[newRow][newCol] + ' - mat[newRow][newCol]- ' + mat[row][col] + ' - mat[row][col]')
                mat[newRow][newCol] = mat[row][col] + 1;
                queue.push([newRow, newCol]);

            }
            console.log('mat')
            console.log(mat)
            console.log('queue')
            console.log(queue)
        }
    }

    return mat;

};

console.log(updateMatrix(mat));