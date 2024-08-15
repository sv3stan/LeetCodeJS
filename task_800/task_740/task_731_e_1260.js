/*
Дана двумерная сетка размером m x n и целое число k. Вам нужно переместить grid k раз.
За одну смену работы:
Элемент в grid[i][j] перемещается в grid[i][j + 1].
Элемент в grid[i][n - 1] перемещается в grid[i + 1][0].
Элемент в grid[m - 1][n - 1] перемещается в grid[0][0].
Верните 2D-grid после применения операции сдвига k раз.
 */

let grid = [
    [3, 8, 1, 9],
    [19, 7, 2, 5],
    [4, 6, 11, 10],
    [12, 0, 21, 13],
];
let k = 4;

let shiftGrid = function (grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    let shift = 0;
    for (let i = 0; i < k; i++) {
        for (let i = 0; i < m; i++) {
            const temp = grid[i];
            if (i === 0) {
                temp.unshift(grid[m - 1][n - 1]);
                shift = temp.pop();
                grid[i] = [...temp];
            } else {
                temp.unshift(shift);
                shift = temp.pop();
                grid[i] = [...temp];
            }
        }
    }
    return grid;
};

console.log(shiftGrid(grid, k));

// const m = grid.length;

// const n = grid[0].length;

// for (let i = 0; i < m; i++) {
//     console.log('🚀 ~ shiftGrid ~ i:', i);

//     let temp = grid[i][1];
//     for (let j = 0; j < n; j++) {
//         console.log('🚀 ~ shiftGrid ~ temp:', temp);

//         grid[i][j + 1] = grid[i][j];
//         grid[i][j] = temp;

//         console.log('🚀 ~ shiftGrid ~ grid[i][j + 1]:', grid[i]);

//         console.log('🚀 ~ shiftGrid ~ j:', j);

//         //grid[i][j] = temp;
//     }

//     console.log('🚀 ~ shiftGrid ~ grid:', grid);
// }

// return grid;
