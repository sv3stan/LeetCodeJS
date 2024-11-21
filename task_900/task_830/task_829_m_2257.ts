/**
You are given two integers m and n representing a 0-indexed m x n grid.You are also given two 2D integer arrays guards and walls where guards[i] = [rowi, coli] and walls[j] = [rowj, colj] represent the positions of the ith guard and jth wall respectively. A guard can see every cell in the four cardinal direct (north, east, south, or west) starting from their position unless obstructed by a wall or another guard.A cell is guarded if there is at least one guard that can see it. Return the number of unoccupied cells that are not guarded.
Вам даны два целых числа m и n, представляющие сетку m x n с индексом 0. Вам также даны два целочисленных двумерных массива Guards и Walls, где Guards[i] = [rowi, coli] и Walls[j] = [rowj, colj] представляют позиции i-го ограждения и j-й стены соответственно. Охранник может видеть каждую клетку в четырех основных направлениях (север, восток, юг или запад), начиная со своей позиции, если ему не мешает стена или другой охранник. Ячейка охраняется, если есть хотя бы один охранник, который может ее видеть. Возвращает количество незанятых ячеек, которые не охраняются.
 */

let m = 4;
let n = 6;
let guards = [
    [0, 0],
    [1, 1],
    [2, 3],
];
let walls = [
    [0, 1],
    [2, 2],
    [1, 4],
];

function countUnguarded(
    m: number,
    n: number,
    guards: number[][],
    walls: number[][],
): number {
    const grid: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

    // Пометка охранников и стен
    for (const [row, col] of guards) {
        grid[row][col] = -1; // Охранники
    }
    for (const [row, col] of walls) {
        grid[row][col] = -2; // Стены
    }

    // Вспомогательные массивы для направления движения
    const direct = [
        [-1, 0], // вверх
        [1, 0], // вниз
        [0, -1], // влево
        [0, 1], // вправо
    ];

    // Функция для пометки охраняемых клеток
    const markGuarded = (row: number, col: number, dir: number[]) => {
        let r = row + dir[0];
        let c = col + dir[1];
        while (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] >= 0) {
            if (grid[r][c] === 0) {
                grid[r][c] = 1; // Пометка охраняемой клетки
            }
            r += dir[0];
            c += dir[1];
        }
    };

    // Пометка всех охраняемых клеток
    for (const [row, col] of guards) {
        for (const dir of direct) {
            markGuarded(row, col, dir);
        }
    }

    // Подсчёт незащищённых клеток
    let answer = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                answer++;
            }
        }
    }

    return answer;
}

console.log(countUnguarded(m, n, guards, walls));
