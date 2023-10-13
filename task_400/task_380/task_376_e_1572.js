// Учитывая mat с квадратной матрицей, верните сумму диагоналей матрицы.
// Включайте только сумму всех элементов главной диагонали и всех элементов 
// вторичной диагонали, которые не являются частью основной диагонали.
// 1572

mat = [[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]]

mat = [[5]]

// mat = [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]

mat =
    [[7, 3, 1, 9], [3, 4, 6, 9], [6, 9, 6, 6], [9, 5, 8, 5]]

var diagonalSum = function (mat) {

    const length = mat.length;
    let sum = 0;

    for (let i = 0; i < length; i++) {
        //  console.log(mat[0][length - i - 1])
        sum += mat[i][length - i - 1];
        sum += mat[i][i];
        console.log(sum)

    }

    if (length % 2) {
        console.log('==============')
        const center = Math.floor(length / 2);
        sum -= mat[center][center];
    }

    console.log(sum)
    return sum;

};

console.log(diagonalSum(mat))