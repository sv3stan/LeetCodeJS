// Имея две строки s и t, вернуть true, если s является подпоследовательностью t, или false в противном случае.
// Подпоследовательность строки — это новая строка, 
// образованная из исходной строки путем удаления некоторых(может быть ни одного) символов без нарушения взаимного 
// расположения оставшихся символов. (т.е. «туз» является подпоследовательностью «abcde», а «aec» — нет).
// 392


s = "abcz";
t = "ahbgdc";

text1 = "abcde";
text2 = "ace";
s = "";
t = ""
//s = "axc";
s = "axc";
t = "ahbgdc"
//s = "";
//t = ""

s = "leeeeetcode";
//t = "yyyyylyyyyyyyyyyeyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyeyyyyyyeyyyyyyyyyyeyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyytyyyyyyyyyyyyyyyyyyyyyyyycyyyyyyyyyyyyyyyoyyyyyyyyyyyyyyydyyyyyyyyyyyyyyyyyyyeyyyyyyy";
t = "yylyyyeyyyyeyyyyyeyyeyyyyyeyyyeyyyytyyyycyyyoyyydyyeyy";
// s = "acb";
// t = "ahbgdc";
function isSubsequence(s, t) {
    const dp = Array.from({ length: s.length + 1 }).fill(false);
    dp[0] = true;
    let point = 0;
    for (let i = 0; i < s.length; i++) {
        console.log(i + ' - i -')
        console.log('----------------------')

        for (let j = point; j < t.length; j++) {
            console.log(i + ' - i- ' + s[i] + ' - s[i] -' + j + ' - j- ' + t[j] + ' - t[j] -')
            if (s[i] === t[j]) {
                dp[i + 1] = dp[i] && true;
                point = j + 1;
                i++;
            }
            console.log(dp)
        }

        console.log('----------------------')
    }
    return dp[s.length]

};


console.log(isSubsequence(s, t))





// const tLength = t.length;
// const sLength = s.length;
// if (sLength === 0) return true;
// let sPoint = 0;
// //const dp = Array.from({ length: sLength }).fill(false);
// //console.log(dp)
// for (let i = 0; i < tLength; i++) {
//     if (sPoint < sLength && t[i] === s[sPoint]) {
//         sPoint++;
//     }
//     if (sPoint === sLength) return true;
// }

// //console.log(dp)
// return false;

















// if (t === '' && s === '') return true;
// if (t === '') return false;

// let sPoint = 0;
// let tPoint = 0;
// while (sPoint < s.length) {
//     console.log('+++++++++++++++++++++++++++++')
//     console.log('t[tPoint] - ' + t[tPoint] + ' - ' + tPoint + ' - s[sPoint] - ' + s[sPoint] + ' - ' + sPoint)
//     if (tPoint === t.length) return false;
//     while (tPoint < t.length) {
//         console.log('-------------------------------------')
//         console.log('t[tPoint] - ' + t[tPoint] + ' - ' + tPoint + ' - s[sPoint] - ' + s[sPoint] + ' - ' + sPoint)
//         if (t[tPoint] === s[sPoint]) {
//             tPoint++;
//             sPoint++;
//             break;
//         } else {
//             tPoint++;
//         }
//         if (tPoint === t.length) return false;
//     }

// }
// return true;





// function isSubsequence(s, t) {
//     const m = t.length;
//     const n = s.length;
//     const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
//     console.log(dp)
//     for (let i = 1; i <= t.length; i++) {
//         console.log(' --------- ')
//         for (let j = 1; j <= s.length; j++) {
//             console.log(t[i - 1] + ' - text1[i - 1]- ' + s[j - 1] + ' - text2[j - 1] - ')
//             if (t[i - 1] === s[j - 1]) {
//                 console.log(' +++++++++ ')
//                 dp[i][j] = dp[i - 1][j - 1] + 1;
//             } else {
//                 console.log(' ============ ')
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
//             }
//             console.log(dp)
//         }
//     }

//     console.log(dp)
//     return dp[m][n]
// };