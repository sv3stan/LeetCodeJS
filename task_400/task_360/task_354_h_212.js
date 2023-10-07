// Учитывая доску символов m x n и список строковых слов, верните все слова на доске.
// Каждое слово должно быть составлено из букв последовательно соседних ячеек, 
// где соседние ячейки являются соседними по горизонтали или по вертикали.
// Одна и та же буквенная ячейка не может использоваться в слове более одного раза.
// 212


board = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]];
words = ["oath", "pea", "eat", "rain"];
//board = [["a", "b"], ["c", "d"]], words = ["abcb"]
//board = [["o", "a", "b", "n"], ["o", "t", "a", "e"], ["a", "h", "k", "r"], ["a", "f", "l", "v"]];
//words = ["oa", "oaa"]


class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}


var findWords = function (board, words) {



    const m = board.length;
    const n = board[0].length;
    //const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const answer = [];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    //console.log(visited)

    function back(word, x, y, index) {
        console.log('++++++++++++++++++++')
        if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== word[index]) {
            return false;
        }

        // Проверяем, соответствует ли текущая ячейка символу в слове
        if (board[x][y] !== word[index]) {
            return false;
        }
        // Если дошли до конца слова, то слово найдено
        if (index === word.length - 1) {
            answer.push(word);
            return true;
        }
        const originalChar = board[x][y];
        board[x][y] = '#';

        for (const [dx, dy] of directions) {
            if (back(word, x + dx, y + dy, index + 1)) {
                board[x][y] = originalChar; // Восстанавливаем исходный символ
                return true;
            }
        }

        board[x][y] = originalChar; // Восстанавливаем исходный символ
        return false;

    }

    for (const item of words) {
        //  for (let i = 0; i < m; i++) {
        //      for (let j = 0; j < n; j++) {
        //      console.log(item)
        console.log(item)
        if (back(item, 0, 0, 0)) {
            answer.push(item);
            //break;
        }
        //     }
        // }
    }

    return Array.from(new Set(answer));

};

console.log(findWords(board, words))

























// const m = board.length;
// const n = board[0].length;
// //const visited = Array.from({ length: m }, () => Array(n).fill(false));
// const answer = [];
// const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

// //console.log(visited)

// function back(word, x, y, index) {

//     if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== word[index]) {
//         return false;
//     }

//     // Проверяем, соответствует ли текущая ячейка символу в слове
//     if (board[x][y] !== word[index]) {
//         return false;
//     }
//     // Если дошли до конца слова, то слово найдено
//     if (index === word.length - 1) {
//         answer.push(word);
//         return true;
//     }
//     const originalChar = board[x][y];
//     board[x][y] = '#';

//     for (const [dx, dy] of directions) {
//         if (back(word, x + dx, y + dy, index + 1)) {
//             board[x][y] = originalChar; // Восстанавливаем исходный символ
//             return true;
//         }
//     }

//     board[x][y] = originalChar; // Восстанавливаем исходный символ
//     return false;

// }

// for (const item of words) {
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             //      console.log(item)
//             if (back(item, i, j, 0)) {
//                 break;
//             }
//         }
//     }
// }

// return Array.from(new Set(answer));






























// const m = board.length;
// const n = board[0].length;
// const answer = [];
// const trie = new TrieNode();

// // Строим префиксное дерево из слов
// for (const word of words) {
//     let node = trie;
//     for (const char of word) {
//         if (!node.children.has(char)) {
//             node.children.set(char, new TrieNode());
//             console.log(node)
//         }
//         node = node.children.get(char);
//     }
//     node.isEndOfWord = true;
// }

// const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

// function back(node, x, y, currentWord) {
//     const char = board[x][y];
//     const nextNode = node.children.get(char);

//     if (!nextNode) return;

//     currentWord += char;
//     board[x][y] = '#';

//     if (nextNode.isEndOfWord) {
//         answer.push(currentWord);
//         nextNode.isEndOfWord = false; // Чтобы избежать дубликатов
//     }

//     for (const [dx, dy] of directions) {
//         const newX = x + dx;
//         const newY = y + dy;
//         if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
//             back(nextNode, newX, newY, currentWord);
//         }
//     }

//     board[x][y] = char; // Восстанавливаем исходный символ
// }

// for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//         back(trie, i, j, '');
//     }
// }

// return answer;