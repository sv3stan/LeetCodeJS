// Учитывая матрицу и цель, верните количество непустых подматриц, 
// сумма которых равна цели.
// Подматрица x1, y1, x2, y2 — это набор всех ячеек матрицы[x][y] 
// с x1 <= x <= x2 и y1 <= y <= y2.
// Две подматрицы(x1, y1, x2, y2) и(x1', y1', x2', y2') различны, 
// если у них есть какая - то другая координата: например, если x1 != x1'.

// 1074

matrix = [[0, 1, 0], [1, 1, 1], [0, 1, 0]], target = 0

var numSubmatrixSumTarget = function (matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let result = 0;
    const prefixSum = Array.from({ length: rows + 1 }, () => Array.from({ length: cols + 1 }).fill(0));
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            prefixSum[i][j] = matrix[i - 1][j - 1] + prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1];
        }
    }
    console.log(prefixSum)
    for (let x1 = 1; x1 <= rows; x1++) {
        for (let y1 = 1; y1 <= cols; y1++) {
            for (let x2 = x1; x2 <= rows; x2++) {
                for (let y2 = y1; y2 <= cols; y2++) {
                    const sum = prefixSum[x2][y2] - prefixSum[x1 - 1][y2] - prefixSum[x2][y1 - 1] + prefixSum[x1 - 1][y1 - 1];
                    if (sum === target) {
                        result++;
                    }
                }
            }
        }
    }
    return result;
};


console.log(numSubmatrixSumTarget(matrix, target))