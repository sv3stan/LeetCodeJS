/**
Вы начинаете в ячейке (rStart, cStart) на сетке размером rows x cols, смотря на восток. Северо-западный угол находится в первой строке и первом столбце сетки, а юго-восточный угол - в последней строке и последнем столбце.
Вы будете идти по спирали по часовой стрелке, чтобы посетить каждую позицию в этой сетке. Каждый раз, когда вы выходите за границу сетки, вы продолжаете движение за пределами сетки (но можете вернуться на границу сетки позже). В конце концов, вы достигнете всех ячеек сетки rows * cols.
Верните массив координат, представляющих позиции сетки в порядке их посещения.
 */

let rows = 5;
let cols = 6;
let rStart = 1;
let cStart = 4;

let spiralMatrixIII = function (rows, cols, rStart, cStart) {
    const direct = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    let answer = [];
    let visit = Array.from({ length: rows }, () => Array(cols).fill(false));

    let directIndex = 0;
    let steps = 1;

    let r = rStart,
        c = cStart;
    answer.push([r, c]);
    visit[r][c] = true;

    while (answer.length < rows * cols) {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < steps; j++) {
                r += direct[directIndex][0];
                c += direct[directIndex][1];

                if (r >= 0 && r < rows && c >= 0 && c < cols && !visit[r][c]) {
                    answer.push([r, c]);
                    visit[r][c] = true;
                }
            }
            directIndex = (directIndex + 1) % 4;
        }
        steps++;
    }

    return answer;
};

console.log(spiralMatrixIII(rows, cols, rStart, cStart));
