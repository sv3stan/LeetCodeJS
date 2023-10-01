// Имеется n городов.Некоторые из них связаны, а некоторые нет.
// Если город А напрямую связан с городом Б, а город Б напрямую связан с городом С, 
// то город А связан с городом С косвенно.
// Провинция — это группа прямо или косвенно связанных городов и 
// никаких других городов за пределами группы.
// Вам дана матрица isConnected размера n x n, где isConnected[i][j] = 1, 
// если i - й город и j - й город напрямую связаны, и isConnected[i][j] = 0 
// в противном случае. Возвращает общее количество провинций.
// 547

isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];

var findCircleNum = function (isConnected) {

    const length = isConnected.length;
    let answer = 0;
    const visited = new Array(length).fill(false);

    function dfs(city) {
        visited[city] = true;
        for (let j = 0; j < length; j++) {
            if (isConnected[city][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    }

    for (let i = 0; i < length; i++) {
        if (!visited[i]) {
            answer++;
            dfs(i);
        }
    }

    return answer;

};

console.log(findCircleNum(isConnected))










    // let count = 0;
    // const numRows = isConnected.length;
    // const numCols = isConnected[0].length
    // const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));


    // function dfs(grid, y, x, visited) {
        
    //     // Проверяем, что текущая позиция находится в пределах матрицы и не посещена
    //     if (x < 0 || x >= numRows || y < 0 || y >= numCols || visited[x][y]) {
    //         return;
    //     }
    //     // Посещаем текущую ячейку
    //     visited[x][y] = true;
    //     // Выполняем операции с текущей ячейкой (например, выводим ее значение)
    //     console.log(`Посещена ячейка (${x}, ${y}): ${isConnected[x][y]}`);
    //     // Рекурсивно переходим к соседним ячейкам
    //     //dfs(isConnected, x - 1, y, visited); // Вверх
    //     dfs(isConnected, x + 1, y, visited); // Вниз
    //     //dfs(isConnected, x, y - 1, visited); // Влево
    //     dfs(isConnected, x, y + 1, visited); // Вправо
    //     count++;
    //     console.log(count)
    // }


    // return dfs(isConnected, 0, 0, visited)









// console.log('11111')
// // Устанавливаем значение текущей ячейки в 0, обозначая, что мы её посетили.
// grid[y][x] = 0;
// console.log(`Посещена ячейка (${x}, ${y}): ${isConnected[x][y]}`);
// // Массив смежных соседних ячеек: право, нижняя, лево, верхняя.
// const directions = [[0, 1], [1, 0]];

// // Перебираем все соседние ячейки.
// for (let [dx, dy] of directions) {
//     console.log(2222)
//     const nextX = x + dx;
//     const nextY = y + dy;
//     console.log(y + ' - y -' + x + ' - x -' + grid[y][x])
//     // Проверяем, что соседняя ячейка находится в пределах сетки и имеет значение 1.
//     if (withinGrid(grid.length, grid[0].length, nextX, nextY) && nextX === 0 && nextY === 0) {
//         // Рекурсивно вызываем функцию dfs для соседней ячейки.
//         count++;
//         console.log('33333333333333')
//         dfs(grid, nextY, nextX);
//     }
// }
