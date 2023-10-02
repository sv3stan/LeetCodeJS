// В ряд выстроены n фигур, каждая из которых окрашена в цвет «А» или «В». 
// Вам дана строка цветов длиной n, где colors[i] — цвет i - го фрагмента.
// Алиса и Боб играют в игру, в которой поочередно убирают фигуры с линии.
// В этой игре Алиса ходит первой.
// Алисе разрешено удалить фигуру цвета «А», только если оба ее соседа также имеют цвет «А». 
// Ей не разрешается удалять фигуры, отмеченные буквой «B».
// Бобу разрешается удалить фигуру цвета «B», только если оба ее соседа также имеют цвет «B». 
// Ему не разрешается удалять фигуры, отмеченные буквой «А».
// Алиса и Боб не могут убрать фигуры с края линии.
// Если игрок не может сделать ход в свой ход, он проигрывает, а другой игрок выигрывает.
// Предполагая, что Алиса и Боб играют оптимально, 
// верните true, если Алиса выиграет, или false, если выиграет Боб.
// 2038

colors = "AAABABB"
colors = "ABBBBBBBAAA"


var winnerOfGame = function (colors) {

    let count = 0
    for (let i = 0; i <= colors.length - 2; i++) {
        if (colors[i] === colors[i + 1] && colors[i] === colors[i + 2]) {
            if (colors[i] === 'A') {
                count++;
            } else {
                count--;
            }

        }
    }

    return (count > 0);

};


console.log(winnerOfGame(colors))





// const n = colors.length;
// const dp = Array(n).fill(false);

// for (let i = n - 3; i >= 0; i--) {
//     if (colors[i] === 'A' && colors[i + 1] === 'A' && colors[i + 2] === 'A') {
//         dp[i] = !dp[i + 2];
//     } else if (colors[i] === 'B' && colors[i + 1] === 'B' && colors[i + 2] === 'B') {
//         dp[i] = !dp[i + 2];
//     } else {
//         dp[i] = dp[i + 1];
//     }
// }

// return dp[0];







// let countA = 0;
// let countB = 0;

// for (let i = 0; i < colors.length - 2; i++) {
//     for (let j = i + 1; j < colors.length - 1; j++) {
//         for (let k = j + 1; k < colors.length; k++) {
//             console.log(colors[i] + ' - colors[i] - ' + i + ' - i - ' + colors[j] + ' - colors[j] - ' + j + ' - j - ' + colors[k] + ' - colors[k] -  ' + k + ' - k - ')
//             if (colors[i] === 'A' && (j - i === 1 && colors[j] === 'A') && (k - j === 1 && colors[k] === 'A')) {
//                 countA++
//                 console.log(countA)
//                 break;
//             }
//             if (colors[i] === 'B' && (j - i === 1 && colors[j] === 'B') && (k - j === 1 && colors[k] === 'B')) {
//                 countB++;
//                 console.log(countB)
//                 break;
//                 console.log(countB)
//             }
//         }
//     }
// }

// console.log(countA)
// console.log(countB)

// return (countA > countB)