// Учитывая двоичную матрицу mat m x n, верните количество специальных позиций в mat.
// Позиция(i, j) называется специальной, если mat[i][j] == 1 и все остальные элементы 
// в строке i и столбце j равны 0(строки и столбцы имеют индекс 0).
// 1582

mat = [[1, 0, 0], [0, 0, 1], [1, 0, 0]];

var numSpecial = function (mat) {
    let m = mat.length;
    let n = mat[0].length;

    // let rowQuantity = Array.from({ length: m }).fill(0);
    // let colQuantity = Array.from({ length: n }).fill(0);

    let rowQuantity = new Int8Array(m).fill(0);
    let colQuantity = new Int8Array(n).fill(0);

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] == 1) {
                rowQuantity[row]++;
                colQuantity[col]++;
            }
        }
    }


    console.log(colQuantity)
    console.log(rowQuantity)

    let answer = 0;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] == 1) {
                if (rowQuantity[row] == 1 && colQuantity[col] == 1) {
                    answer++;
                }
            }
        }
    }
    return answer;
};


console.log(numSpecial(mat))