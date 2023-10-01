// Вам дан матричный лабиринт размером m x n(с индексом 0) с пустыми ячейками(обозначенными как «.»)
// и стенами(обозначенными как «+»).Вам также дан вход в лабиринт, 
// где вход = [entrancerow, входной столбец] обозначает строку и столбец ячейки, 
// в которой вы изначально стоите.
// За один шаг вы можете переместить одну ячейку вверх, вниз, влево или вправо.
// Вы не можете войти в клетку со стеной и не можете выйти за пределы лабиринта.
// Ваша цель — найти ближайший выход из входа.Выход определяется как пустая ячейка, 
// находящаяся на границе лабиринта.Вход не считается выходом.
// Возвращает количество шагов по кратчайшему пути от входа до ближайшего выхода или - 1, 
// если такого пути не существует.
// 1926


maze = [["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]], entrance = [1, 2]

var nearestExit = function (maze, entrance) {

    const m = maze.length;
    const n = maze[0].length;
    const queue = [entrance];
    const visit = new Set();
    const direct = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    visit.add(entrance.join(','));


    let step = 0;

    while (queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift();

            for (const [dx, dy] of direct) {
                const newX = x + dx;
                const newY = y + dy;

                if (newX >= 0 && newX < m && newY >= 0 && newY < n && maze[newX][newY] === '.') {
                    const newPosition = [newX, newY].join(',');

                    if (!visit.has(newPosition)) {
                        if (newX === 0 || newX === m - 1 || newY === 0 || newY === n - 1) {
                            return step + 1;
                        }

                        queue.push([newX, newY]);
                        visit.add(newPosition);
                    }
                }
            }
        }

        step++;
    }

    return -1; // No exit found

};
console.log(nearestExit(maze, entrance))