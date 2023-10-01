// Сообщение, содержащее буквы от A до Z, можно закодировать в числа, используя следующее сопоставление:
// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// Чтобы декодировать закодированное сообщение, все цифры должны быть сгруппированы, а затем преобразованы обратно в буквы, 
// используя обратное преобразование, описанное выше(может быть несколько способов).Например, «11106» можно сопоставить с:
// «AAJF» с группировкой(1 1 10 6)
// «KJF» с группировкой(11 10 6)
// Обратите внимание, что группировка(1 11 06) недействительна, поскольку «06» нельзя сопоставить с «F», поскольку «6» отличается от «06».
// Дана строка s, содержащая только цифры, верните количество способов ее декодирования.
// Тестовые случаи генерируются таким образом, чтобы ответ умещался в 32 - битное целое число.
// 91


//
//
s = '12'
//s = '06'
s = "226";
s = "11106";

var numDecodings = function (s) {

    const sLength = s.length;
    let currentItem = 0;
    let prevItem = 1;
    let prevPrevItem = 0;
    for (let i = 1; i <= sLength; i++) {
        let temp = 0;
        currentItem = 0;
        temp = s[i - 1] - '0';
        if (1 <= temp && temp <= 9)
            currentItem += prevItem;
        if (sLength >= 2) {
            temp = (s[i - 2] - '0') * 10 + (s[i - 1] - '0');
            if (10 <= temp && temp <= 26)
                currentItem += prevPrevItem
        }
        prevPrevItem = prevItem;
        prevItem = currentItem
    }
    return currentItem;
};

console.log(numDecodings(s));


















// var numDecodings = function (s) {



//     const sLength = s.length;
//     // const dp = new Array(s.length + 1).fill(0);
//     // dp[0] = 1;
//     // //dp[1] = 1;
//     let currentItem = 1;
//     let prevItem = 0;
//     let prevPrevItem = 0;
//     let letter1 = 0;
//     let letter2 = 0;
//     for (let i = 1; i <= sLength; i++) {
//         console.log('  ----------  ')

//         letter1 = s[i - 1] - '0';
//         if (1 <= letter1 && letter1 <= 9)
//             currentItem += prevItem;

//         console.log(currentItem + ' - currentItem')
//         if (sLength >= 2) {
//             letter2 = (s[i - 2] - '0') * 10 + (s[i - 1] - '0');
//             if (10 <= letter2 && letter2 <= 26)
//                 currentItem += prevPrevItem

//         }

//         prevPrevItem = prevItem;
//         prevItem = currentItem

//         currentItem = 0;
//         console.log(prevItem + ' - prevItem - ' + prevPrevItem + ' - prevPrevItem - ')
//         console.log(currentItem + ' - currentItem')
//     }


//     return prevItem + prevPrevItem;

// };