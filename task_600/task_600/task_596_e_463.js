// Вам дана сетка строк x столбцов, представляющая карту, 
// где Grid[i][j] = 1 представляет землю, а Grid[i][j] = 0 представляет воду.
// Ячейки сетки соединяются горизонтально / вертикально(не по диагонали).
// Сетка полностью окружена водой, и имеется ровно один
// остров(т.е.одна или несколько связанных ячеек суши).
// На острове нет «озёр», то есть вода внутри не связана с водой вокруг острова.
// Одна ячейка представляет собой квадрат со стороной 1. 
// Сетка прямоугольная, ширина и высота не превышают 100. Определите периметр острова.

// 463

grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]

var islandPerimeter = function (grid) {

    const rows = grid.length;
    const cols = grid[0].length;
    let answer = 0;

    const checkNeighbor = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
            answer++;
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                checkNeighbor(i - 1, j);
                checkNeighbor(i + 1, j);
                checkNeighbor(i, j - 1);
                checkNeighbor(i, j + 1);
            }
        }
    }

    return answer;
};

console.log(islandPerimeter(grid))