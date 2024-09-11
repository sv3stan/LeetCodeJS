/**
Учитывая положительное целое число n, сгенерируйте матрицу размера n x n, заполненную элементами от 1 до n2 в спиральном порядке.
 */

let n = 3;

let generateMatrix = function (n) {
    // const answer = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const answer = Array.from({ length: n }, () =>
        Array.from({ length: n }).fill(0),
    );
    const direct = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    let d = 0;
    let row = 0;
    let col = 0;
    let count = 1;

    while (count <= n * n) {
        answer[row][col] = count++;
        let newRow = (row + (direct[d][0] % n) + n) % n;
        let newCol = (col + (direct[d][1] % n) + n) % n;

        if (answer[newRow][newCol] != 0) d = (d + 1) % 4;
        row += direct[d][0];
        col += direct[d][1];
    }
    return answer;
};

console.log(generateMatrix(n));
