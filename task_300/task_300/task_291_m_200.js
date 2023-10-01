// Учитывая двумерную двоичную сетку размером m x n, 
// которая представляет собой карту из «1» (суша) и «0» (вода), 
// верните количество островов.
// Остров окружен водой и образован путем соединения соседних земель 
// по горизонтали или вертикали.Вы можете предположить, 
// что все четыре края сетки окружены водой.
// 200

Input: grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

var numIslands = function (grid) {
    const numRows = grid.length;
    const numCols = grid[0].length;
    const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));
    let count = 0;

    function dfs(x, y) {
        if (x < 0 || x >= numRows || y < 0 || y >= numCols || visited[x][y] || grid[x][y] === '0') {
            return;
        }
        visited[x][y] = true;
        console.log(visited)
        // Рекурсивно переходим к соседним ячейкам
        dfs(x - 1, y);
        dfs(x, y - 1);
        dfs(x + 1, y);
        dfs(x, y + 1);
    }

    for (let i = 0; i < numRows; i++) {
        console.log(' +++++++++++++ ')
        for (let j = 0; j < numCols; j++) {
            console.log(' ------------ ')
            if (!visited[i][j] && grid[i][j] === '1') {

                dfs(i, j);
                // console.log(count)
                count++;
            }
        }
    }

    return count;
};


console.log(numIslands(grid))














// const length = grid.length;
// let answer = 0;
// const visited = new Array(length).fill(false);

// function dfs(city) {
//     visited[city] = true;
//     for (let j = 0; j < length; j++) {
//         if (grid[city][j] === 1 && !visited[j]) {
//             dfs(j);
//         }
//     }
// }

// for (let i = 0; i < length; i++) {
//     if (!visited[i]) {
//         answer++;
//         dfs(i);
//     }
// }

// return answer;