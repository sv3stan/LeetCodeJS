// Учитывая буквенно - цифровую строку s, верните вторую по величине 
// числовую цифру, которая встречается в s, или - 1, если она не существует.
// Буквенно - цифровая строка — это строка, состоящая из строчных английских букв и цифр.

// 1796

s = "dfa1cv2fgh3rd21afd"
s = "abc1111"
s = "ck077"



var secondHighest = function (s) {

    let min = -1;
    let minSec = -1;


    for (let char of s) {
        if (!isNaN(parseInt(char))) {
            const digit = parseInt(char)
            if (digit > min) {
                minSec = min;
                min = digit;
            }
            else if
                (digit < min && digit > minSec) {
                minSec = digit;
            }
        }
    }
    return minSec;


    // for (let i = 0; i < s.length; i++) {
    //     if (parseInt(s[i])) {
    //         console.log(parseInt(s[i]) + ' - parseInt(s[i] ---11111111111111111')
    //         if (parseInt(s[i]) < min) {
    //             minSec = min;
    //             min = parseInt(s[i]);

    //         }

    //         if (min < parseInt(s[i]) && parseInt(s[i]) < minSec) {
    //             minSec = parseInt(s[i]);
    //         }

    //     }
    // }

    // console.log(min + ' - min')
    // console.log(minSec + ' - minSec')

    // return (minSec === Infinity) ? -1 : minSec
};


console.log(secondHighest(s))