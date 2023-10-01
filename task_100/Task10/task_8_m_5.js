//Учитывая строку s, вернуть самую длинную
//палиндромную подстроку в s.
// 5



//'use strit';
let s = 'abcdeecgsedcbaabcdes';
//let s = 'babad';
//let s = 'cbbd';
//let s = 'avva';
//let s = 'a';
//let s = 'cc';
//let s = 'abc';
//let s = "aacabdkacaa"
//let s = 'abcdasdfghjkldcba';
//let s = "iptmykvjanwiihepqhzupneckpzomgvzmyoybzfynybpfybngttozprjbupciuinpzryritfmyxyppxigitnemanreexcpwscvcwddnfjswgprabdggbgcillisyoskdodzlpbltefiz"
//let s = "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"



function longestPalindrome(s) {
    let maxLength = 0;
    let longestPalindrome = '';

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i); // Центр в одном символе
        let len2 = expandAroundCenter(s, i, i + 1); // Центр между символами
        let len = Math.max(len1, len2);
        if (len > maxLength) {
            let start = i - Math.floor((len - 1) / 2);
            let end = i + Math.floor(len / 2);
            longestPalindrome = s.substring(start, end + 1);
            maxLength = len;
        }
    }

    return longestPalindrome;
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}



// function longestPalindrome(s) {
//     const letters = Array.from(s);
//     let current = [];
//     let palindromeArray = [];
//     let currentLength = 0;
//     let maxLength = 0;
//     let i = 0;

//     do {
//         let j = letters.length - 1;
//         do {

//             if (letters[i] === letters[j]) {
//                 let k = 0;
//                 do {
//                     if (i + k > j - k) {
//                         break;
//                     }
//                     if (letters[i + k] === letters[j - k]) {
//                         if (i + k === j - k) {
//                             current.splice(k, 0, letters[j - k]);
//                             currentLength++;
//                         } else {
//                             current.splice(k, 0, letters[j - k]);
//                             current.splice(k + 1, 0, letters[j - k]);
//                             currentLength++;
//                             currentLength++;
//                         }
//                     } else {
//                         if ((j - k + 1) - (i + k - 1) > 1) {
//                             current = [];
//                             currentLength = 0;
//                         }
//                         break;
//                     }
//                     k++;
//                 } while (k < Math.floor(letters.length / 2) + 1);
//             }
//             if (currentLength > maxLength) {
//                 palindromeArray = [];
//                 palindromeArray.push(current);
//                 maxLength = currentLength;
//             }
//             current = [];
//             currentLength = 0;
//             j--;
//         } while (j > i)
//         i++;
//     } while (i < letters.length - 1)

//     if (palindromeArray.length > 0) {
//         const str = palindromeArray[0].join('');
//         return str;
//     } else {
//         return s[0]; // Возвращаем пустую строку, если массив пустой
//     }
// }



// function longestPalindrome(s) {
//     const letters = Array.from(s);
//     let current = [];
//     let palindromeArray = [];
//     let currentLength = 0;
//     let maxLength = 0;
//     let i = 0;

//     do {
//         let j = letters.length - 1;
//         do {
//             console.log(s[i] + '--' + i + '- i - ' + s[j] + '--' + j + ' - j ');
//             if (letters[i] === letters[j]) {
//                 let k = 0;
//                 do {
//                     if (i + k > j - k) {
//                         console.log(i + ' == i; ' + j + ' == j; ' + k + ' == k');
//                         console.log('---- Сюда заскочило ----- 3_3');
//                         //  current = [];
//                         //  currentLength = 0;

//                         break;
//                     }
//                     console.log(i + ' == i; ' + j + ' == j; ' + k + ' == k');
//                     if (letters[i + k] === letters[j - k]) {

//                         if (i + k === j - k) {
//                             current.splice(k, 0, letters[j - k]);
//                             newStr = letters[i] + letters[j];
//                             currentLength++;
//                             console.log('1 == ' + current + ' - crnt - ' + currentLength + ' --crtLngh-- ');
//                         } else {
//                             newStr = letters[i] + letters[j];
//                             current.splice(k, 0, letters[j - k]);
//                             current.splice(k + 1, 0, letters[j - k]);
//                             currentLength++;
//                             currentLength++;
//                             console.log('2 == ' + current + ' - crnt - ' + currentLength + ' --crtLngh-- ');
//                         }
//                     } else {
//                         console.log('---- Сюда заскочило ----- 1_3');
//                         if ((j - k + 1) - (i + k - 1) > 1) {
//                             current = [];
//                             currentLength = 0;
//                             console.log('2 == ' + current + ' = crnt = ' + currentLength + ' --crtLngh-- ');
//                         }
//                         break;
//                     }
//                     k++;
//                 } while (k < Math.floor(letters.length / 2) + 1);
//             }
//             if (currentLength > maxLength) {
//                 palindromeArray = [];
//                 palindromeArray.push(current);
//                 maxLength = currentLength;
//                 console.log(palindromeArray + ' --------- palindromeArray ');
//                 console.log(currentLength + ' --currentLength-- ');
//                 console.log(maxLength + ' --maxLength-- ');
//             }
//             current = [];
//             currentLength = 0;
//             console.log(' Умешьшаем J');
//             console.log(currentLength + ' --cntLength-- ' + j + '== j');
//             j--;
//         } while (j > i)
//         console.log(' Увеличивем I');
//         console.log(currentLength + ' --cntLength-- ' + i + '== i');
//         i++;
//     } while (i < letters.length - 1)

//     if (palindromeArray.length > 0) {
//         const str = palindromeArray[0].join('');
//         return str;
//     } else {
//         return s[0]; // Возвращаем пустую строку, если массив пустой
//     }
// }












// function longestPalindrome(s) { 
//     const letters = Array.from(s);
//     let current = [];
//     let firstMatch = false;
//     let palindromeArray = [];
//     let currentLength = 0;
//     let maxLength = 0;

//     for (let i = 0; i <= letters.length - 1; i++) {
//         for (let j = letters.length - 1; j >= i; j--) {
//             if (letters[i] === letters[j]) {
//                 firstMatch = false;
//                 let k = 0;
//                 do {
//                     if (i + k > j - k) {
//                         break;
//                     }
//                     if (letters[i + k] === letters[j - k]) {
//                         if (!firstMatch) {
//                             if (i + k === j - k) {
//                                 current.splice(k, 0, letters[j - k]);
//                             } else {
//                                 current.splice(k, 0, letters[j - k]);
//                                 current.splice(k + 1, 0, letters[j - k]);
//                                 currentLength++;
//                             }
//                             firstMatch = true;

//                         } else {
//                             if (i + k === j - k) {
//                                 current.splice(k, 0, letters[j - k]);
//                             } else {
//                                 current.splice(k, 0, letters[j - k]);
//                                 current.splice(k + 1, 0, letters[j - k]);
//                                 currentLength++;
//                             }
//                         }
//                     } else {
//                         break;
//                     }
//                     k++;
//                 } while (k < letters.length / 2 - 1);
//             }
//             if (currentLength >= maxLength) {
//                 palindromeArray = [];
//                 palindromeArray.push(current);
//                 maxLength = currentLength;
//             }
//             current = [];
//             currentLength = 0;
//         }
//     }
//     if (palindromeArray.length > 0) {
//         const str = palindromeArray[0].join('');
//         return str;
//     } else {
//         return ''; // Возвращаем пустую строку, если массив пустой
//     }
// }

console.log(longestPalindrome(s));



//последний рабочий вариант

// function longestPalindrome(s) {
//     const letters = Array.from(s);
//     let current = [];
//     let firstMatch = false;
//     let palindromeArray = [];
//     let currentLength = 0;
//     let maxLength = 0;

//     for (let i = 0; i <= letters.length; i++) {
//         //console.log(i + ' i ');
//         for (let j = letters.length - 1; j > i; j--) {
//             console.log(s[i] + '--' + i + '- i - ' + s[j] + '--' + j + ' - j ');
//             if (letters[i] === letters[j]) {
//                 firstMatch = false;
//                 let k = 0;
//                 do {
//                     if (i + k > j - k) {
//                         console.log('---- Сюда заскочило ----- 3_3');
//                         break;
//                     }
//                     if (letters[i + k] === letters[j - k]) {
//                         if (!firstMatch) {
//                             if (i + k === j - k) {
//                                 current.splice(k, 0, letters[j - k]);
//                                 newStr = letters[i] + letters[j];
//                                 currentLength++;
//                                 console.log(current + ' - crnt - 1 - ' + currentLength + ' --crtLngh-- ');
//                             } else {
//                                 newStr = letters[i] + letters[j];
//                                 current.splice(k, 0, letters[j - k]);
//                                 current.splice(k + 1, 0, letters[j - k]);
//                                 currentLength++;
//                                 console.log(current + ' - crnt - 2 - ' + currentLength + ' --crtLngh-- ');
//                             }

//                             firstMatch = true;

//                         } else {
//                             if (i + k === j - k) {
//                                 current.splice(k, 0, letters[j - k]);
//                                 newStr = letters[i] + letters[j];
//                                 currentLength++;
//                                 console.log(current + ' - crnt - 3 - ' + currentLength + ' --crtLngh-- ');
//                             } else {
//                                 newStr = letters[i] + letters[j];
//                                 currentLength++;
//                                 console.log(current + ' - crnt - 4 - ' + currentLength + ' --crtLngh-- ');
//                                 current.splice(k, 0, letters[j - k]);
//                                 current.splice(k + 1, 0, letters[j - k]);

//                             }

//                         }
//                     } else {
//                         console.log('---- Сюда заскочило ----- 1_3');
//                         break;
//                     }
//                     k++;
//                 } while (k < letters.length / 2);
//             }
//             if (currentLength >= maxLength) {
//                 palindromeArray = [];
//                 palindromeArray.push(current);
//                 maxLength = currentLength;
//                 console.log(palindromeArray + ' --------- palindromeArray ');
//                 console.log(currentLength + ' --currentLength-- ');
//                 console.log(maxLength + ' --maxLength-- ');
//             }

//         }
//         current = [];
//         currentLength = 0;
//     }
//     if (palindromeArray.length > 0) {
//         const str = palindromeArray[0].join('');
//         return str;
//     } else {
//         return ''; // Возвращаем пустую строку, если массив пустой
//     }
// }

















// function longestPalindrome(s) {
//     const letters = Array.from(s);
//     let current = [];
//     let firstMatch = false;
//     let palindromeArray = [];
//     let currentLength = 0;
//     let maxLength = 0;

//     for (let i = 0; i < letters.length - 1; i++) {
//         for (let j = letters.length - 1; j > i; j--) {
//             if (letters[i] === letters[j]) {
//                 firstMatch = false;
//                 let k = 0;
//                 do {
//                     if (i + k > j - k) {
//                         break;
//                     }
//                     if (letters[i + k] === letters[j - k]) {
//                         if (!firstMatch) {
//                             current.splice(0, 0, letters[i]);
//                             current.splice(1, 0, letters[j]);
//                             firstMatch = true;
//                             currentLength++;
//                         } else {
//                             if (i + k === j - k) {
//                                 current.splice(k, 0, letters[j - k]);
//                             } else {
//                                 current.splice(k, 0, letters[j - k]);
//                                 current.splice(k + 1, 0, letters[j - k]);
//                             }
//                             currentLength++;
//                         }
//                     } else {
//                         break;
//                     }
//                     k++;
//                 } while (k < letters.length / 2 - 1);
//             }
//             if (currentLength > maxLength) {
//                 palindromeArray = [];
//                 palindromeArray.push(current);
//                 maxLength = currentLength;
//             }
//             current = [];
//             currentLength = 0;
//         }
//     }
//     if (palindromeArray.length > 0) {
//         const str = palindromeArray[0].join('');
//         return str;
//     } else {
//         return ''; // Возвращаем пустую строку, если массив пустой
//     }
// }

// console.log(
//     k +
//         ' - k - ' +
//         s[i + k] +
//         ' - ' +
//         i +
//         ' - ' +
//         s[j - k] +
//         ' -- ' +
//         j +
//         ' [i + k] ++++++++++++ [j - k] '
// );
//console.log(k + ' --- Зашло на K ');
//current.push[s[i + k]];

// function longestPalindrome(s) {
//     const s = Array.from(s);
//     let current = [];
//     let firstMatch = false;
//     let palindromeArray = [[]];
//     let currentLength = 0;
//     let maxLength = 0;

//     console.log(s.length);

//     for (let i = 0; i < s.length - 2; i++) {
//         console.log(i + ' i ');
//         for (let j = s.length - 1; j > i; j--) {
//             console.log(j + ' j ');
//             console.log(s[i] + '- i - ' + s[j] + ' - j ');
//             if (s[i] === s[j]) {
//                 firstMatch = false;
//                 let k = 1;
//                 do {
//                     console.log(' -- Вообще не заходит  ');
//                     if (i + k > j - k) {
//                         console.log(' -- Сюда зашло  ');
//                         break;
//                     }
//                     if (s[i + k] === s[j - k]) {
//                         // console.log(current + ' -- Первое  ');

//                         console.log(
//                             s[i + k] +
//                                 '- [i + k] - ' +
//                                 s[j - k] +
//                                 ' - [j - k] '
//                         );
//                         if (!firstMatch) {
//                             current.splice(0, 0, s[i]);
//                             current.splice(1, 0, s[j]);
//                             firstMatch = true;
//                             currentLength++;
//                         }

//                         if (i + k === j - k) {
//                             current.splice(k, 0, s[j - k]);
//                         } else {
//                             current.splice(k, 0, s[j - k]);
//                             current.splice(k + 1, 0, s[j - k]);
//                         }
//                         currentLength++;
//                         console.log(
//                             k +
//                                 '-- k --' +
//                                 current +
//                                 ' ----- ' +
//                                 currentLength +
//                                 ' -- currentLength'
//                         );
//                     } else {
//                         break;
//                     }
//                     k++;
//                 } while (k < s.length / 2 - 1);
//             }
//             console.log(maxLength + ' -- maxLength');
//             console.log(palindromeArray + ' -- palindromeArray  ');
//             console.log(current + ' -- Второе  ');
//             if (currentLength > maxLength) {
//                 palindromeArray = [];
//                 palindromeArray.push(current);
//                 maxLength = currentLength;
//             }
//             current = [];
//             currentLength = 0;
//         }
//     }
// }

// function longestPalindrome(s) {
//     const s = Array.from(s);
//     let current = [];
//     let firstMatch = false;
//     let palindromeArray = [[]];
//     let currentLength = 0;
//     let maxLength = 0;

//     console.log(s.length);

//     for (let i = 0; i < s.length - 2; i++) {
//         console.log(i + ' i ');
//         for (let j = s.length - 1; j > i; j--) {
//             console.log(j + ' j ');
//             console.log(s[i] + '- i - ' + s[j] + ' - j ');
//             if (s[i] === s[j]) {
//                 firstMatch = false;
//                 let k = 0;
//                 do {
//                     console.log(' -- Вообще не заходит  ');
//                     if (i + k > j - k) {
//                         console.log(' -- Сюда зашло  ');
//                         break;
//                     }
//                     if (s[i + k] === s[j - k]) {
//                         // console.log(current + ' -- Первое  ');

//                         console.log(
//                             s[i + k] +
//                                 '- [i + k] - ' +
//                                 s[j - k] +
//                                 ' - [j - k] '
//                         );
//                         if (!firstMatch) {
//                             current.splice(0, 0, s[i]);
//                             current.splice(1, 0, s[j]);
//                             firstMatch = true;
//                             currentLength++;
//                             console.log(' -- !firstMatch  ');
//                         } else {
//                             if (i + k === j - k) {
//                                 current.splice(k, 0, s[j - k]);
//                             } else {
//                                 current.splice(k, 0, s[j - k]);
//                                 current.splice(k + 1, 0, s[j - k]);
//                             }
//                             currentLength++;
//                             console.log(
//                                 k +
//                                     '-- k --' +
//                                     current +
//                                     ' ----- ' +
//                                     currentLength +
//                                     ' -- currentLength'
//                             );
//                         }
//                     } else {
//                         break;
//                     }
//                     k++;
//                 } while (k < s.length / 2 - 1);
//             }
//             console.log(maxLength + ' -- maxLength');
//             console.log(palindromeArray + ' -- palindromeArray  ');
//             console.log(current + ' -- Второе  ');
//             if (currentLength > maxLength) {
//                 palindromeArray = [];
//                 palindromeArray.push(current);
//                 maxLength = currentLength;
//             }
//             current = [];
//             currentLength = 0;
//         }
//     }
// }
