// Определите, действительна ли доска для судоку 9 x 9. 
// Только заполненные ячейки подлежат проверке согласно следующим правилам:
// Каждая строка должна содержать цифры от 1 до 9 без повторений.
// Каждый столбец должен содержать цифры 1–9 без повторений.
// Каждый из девяти подполей сетки размером 3х3 должен содержать цифры от 1 до 9 без повторений.
// Примечание:
// Доска судоку(частично заполненная) может быть допустимой, но не обязательно решаемой.
// Только заполненные ячейки должны быть проверены в соответствии с указанными правилами.
// 36

board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


var isValidSudoku = function (board) {

    // const hash = new Map();
    const m = board.length;
    const n = board[0].length;

    for (let i = 0; i < m; i++) {
        const hashR = new Map();
        const hashV = new Map();
        for (let j = 0; j < n; j++) {
            if (board[i][j] !== '.') {
                hashR.set(board[i][j], (hashR.get(board[i][j]) || 0) + 1);
                if (hashR.get(board[i][j]) > 1) return false;
            }
            if (board[j][i] !== '.') {
                hashV.set(board[j][i], (hashV.get(board[j][i]) || 0) + 1);
                if (hashV.get(board[j][i]) > 1) return false;
            }
        }
    }

    // for (let j = 0; j < n; j++) {
    //     const hash = new Map();
    //     for (let i = 0; i < m; i++) {
    //         if (board[i][j] !== '.') {
    //             //    console.log(hash.get(board[i][j]))
    //             hash.set(board[i][j], (hash.get(board[i][j]) || 0) + 1);
    //             if (hash.get(board[i][j]) > 1) return false;
    //             //    console.log(hash)
    //         }
    //     }
    // }

    function subBoxes(x, y) {
        const hash = new Map();
        for (let i = x; i < x + 3; i++) {
            for (let j = y; j < y + 3; j++) {
                if (board[i][j] !== '.') {
                    //  console.log(hash.get(board[i][j]))
                    hash.set(board[i][j], (hash.get(board[i][j]) || 0) + 1);
                    //  console.log(hash.get(board[i][j]) + ' - hash.get(board[i][j]) ')
                    if (hash.get(board[i][j]) > 1) return false;
                    //  console.log(hash)
                }
            }
        }
        return true
    }

    const direct = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]];

    for (const [x, y] of direct) if (!subBoxes(x, y)) return false;

    return true;
};

console.log(isValidSudoku(board))