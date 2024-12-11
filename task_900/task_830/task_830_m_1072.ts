/**
You are given an m x n binary matrix matrix. You can choose any number of columns in the matrix and flip every cell in that column (i.e., Change the value of the cell from 0 to 1 or vice versa). Return the maximum number of rows that have all values equal after some number of flips.
Вам дана двоичная матрица размером m x n. Вы можете выбрать любое количество столбцов в матрице и перевернуть каждую ячейку в этом столбце (т. е. изменить значение ячейки с 0 на 1 или наоборот). Возвращает максимальное количество строк, все значения которых равны после некоторого количества переворотов.
 */

const matrix = [
    [0, 0, 0],
    [0, 0, 1],
    [1, 1, 0],
];

function maxEqualRowsAfterFlips(matrix: number[][]): number {
    const hash = new Map<string, number>();

    for (const row of matrix) {
        let patternBuilder = '';
        for (let col = 0; col < row.length; col++) {
            if (row[0] === row[col]) {
                patternBuilder += 'T';
            } else {
                patternBuilder += 'F';
            }
        }

        const count = hash.get(patternBuilder) || 0;
        hash.set(patternBuilder, count + 1);
    }

    let answer = 0;
    for (const value of hash.values()) {
        answer = Math.max(value, answer);
    }

    return answer;
}

console.log(maxEqualRowsAfterFlips(matrix));
