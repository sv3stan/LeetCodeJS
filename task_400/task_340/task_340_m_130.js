// Учитывая матричную доску размером m x n, содержащую «X» и «O», 
// захватите все области, которые в 4 - х направлениях окружены «X».
// Регион захватывается путем перестановки всех букв «О» в «Х» 
// в этом окруженном регионе.
// 130

board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]

var solve = function (board) {
    const m = board.length;
    const n = board[0].length;
    const visited = {};
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    function dfs(row, col) {
        if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] !== 'O') {
            return;
        }

        board[row][col] = 'T'; // Temporary marker

        // Рекурсивно вызываем dfs для соседних ячеек
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }

    // Обход краевых ячеек и пометка их и их соседей
    for (let i = 0; i < m; i++) {
        dfs(i, 0); // Левая граница
        dfs(i, n - 1); // Правая граница
    }

    for (let j = 0; j < n; j++) {
        dfs(0, j); // Верхняя граница
        dfs(m - 1, j); // Нижняя граница
    }

    // Замена 'O' на 'X', восстановление временно помеченных ячеек
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === 'T') {
                board[i][j] = 'O';
            }
        }
    }

    return board
};


solve(board);
console.log(board);