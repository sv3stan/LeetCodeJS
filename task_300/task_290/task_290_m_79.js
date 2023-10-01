// Учитывая сетку символов m x n и строковое слово, верните true, 
// если слово существует в сетке.
// Слово может быть составлено из букв последовательно соседних ячеек, 
// где соседние ячейки являются соседними по горизонтали или по вертикали.
// Одна и та же буквенная ячейка не может использоваться более одного раза.
// 79


board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"


var exist = function (board, word) {


    function backtrack(matrix, x, y, visited, index) {
        const numRows = matrix.length;
        const numCols = matrix[0].length;

        // Проверяем, что текущая позиция находится в пределах матрицы и не посещена
        if (x < 0 || x >= numRows || y < 0 || y >= numCols || visited[x][y]) {
            return false;
        }

        // Проверяем, соответствует ли текущая ячейка символу в слове
        if (matrix[x][y] !== word[index]) {
            return false;
        }

        // Если дошли до конца слова, то слово найдено
        if (index === word.length - 1) {
            return true;
        }

        // Посещаем текущую ячейку
        visited[x][y] = true;

        // Рекурсивно переходим к соседним ячейкам
        if (
            backtrack(matrix, x - 1, y, visited, index + 1) ||
            backtrack(matrix, x + 1, y, visited, index + 1) ||
            backtrack(matrix, x, y - 1, visited, index + 1) ||
            backtrack(matrix, x, y + 1, visited, index + 1)
        ) {
            return true;
        }

        // Снимаем отметку о посещении текущей ячейки при возврате из рекурсии
        visited[x][y] = false;

        return false;
    }

    const numRows = board.length;
    const numCols = board[0].length;
    //const visited = new Array(numRows).fill(null).map(() => new Array(numCols).fill(false));
    const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (backtrack(board, i, j, visited, 0)) {
                return true;
            }
        }
    }

    return false;



};


console.log(exist(board, word))