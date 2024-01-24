// Вам дан массив строк arr. Строка s формируется путем объединения 
// подпоследовательности arr, содержащей уникальные символы.
// Возвращает максимально возможную длину s.
// Подпоследовательность — это массив, который можно получить из 
// другого массива путем удаления некоторых элементов или их отсутствия 
// без изменения порядка остальных элементов.

// 1239

arr = ["cha", "r", "act", "ers"]
arr = ["un", "iq", "ue"]
arr = ["un", "iq"]
arr = ["aa", "bb"]
arr = ["abcdefghijklmnopqrstuvwxyz"]
arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"]

var maxLength = function (arr) {
    // Функция для проверки уникальности символов в строке
    function isUnique(str) {
        return new Set(str).size === str.length;
    }

    // Рекурсивная функция для поиска максимальной длины подпоследовательности
    function checkMaxSubsequence(idx, currentItem) {
        // Базовый случай: достигли конца массива
        if (idx === arr.length) {
            return isUnique(currentItem) ? currentItem.length : 0;
        }

        // Вариант 1: не включать текущую строку в подпоследовательность
        const result1 = checkMaxSubsequence(idx + 1, currentItem);

        // Вариант 2: включать текущую строку в подпоследовательность
        const result2 = isUnique(currentItem + arr[idx]) ?
            checkMaxSubsequence(idx + 1, currentItem + arr[idx]) :
            0;

        // Возвращаем максимум из двух вариантов
        return Math.max(result1, result2);
    }

    // Начинаем с первой строки и пустой подпоследовательности
    return checkMaxSubsequence(0, '');



    // const setsArray = arr.map(str => new Set(str));

    // let sum = 0;
    // if (arr.length === 0) return 0;
    // if (arr.length === 1) return arr[0].length;
    // console.log(setsArray)
    // function check(hashFirst, hashSecond) {

    //     for (const key of hashFirst) {
    //         if (hashSecond.has(key)) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

    // for (let i = 0; i < setsArray.length - 1; i++) {
    //     let count = 0;
    //     console.log(arr[i].length)
    //     console.log(setsArray[i].size)
    //     if (arr[i].length === setsArray[i].size) {
    //         count = arr[i].length;
    //         console.log(count + ' - count')
    //         console.log(' -     - ')
    //         for (let j = i + 1; j < setsArray.length; j++) {
    //             if (check(setsArray[i], setsArray[j])) {
    //                 console.log(' ++++++++++++ ')
    //                 //console.log(sum + ' - sum')
    //                 //sum = Math.max(sum, arr[i].length + arr[j].length);
    //                 count = Math.max(count, arr[i].length + arr[j].length);
    //                 console.log(count + ' - count')
    //             }
    //         }
    //     }

    //     sum = Math.max(sum, count);
    //     console.log(sum + ' - sum')
    // }

    // return sum;
};

console.log(maxLength(arr))



// const setsArray = arr.map(str => new Set(str));
// let sum = 0;
// if (arr.length === 1) return arr[0].length;

// function check(hashFirst, hashSecond) {
//     for (const key of hashFirst) {
//         console.log(key)
//         if (hashSecond.has(key)) {
//             console.log('------------')
//             return false;
//         }
//     }
//     return true;
// }

// for (let i = 0; i < setsArray.length - 1; i++) {
//     console.log(i + ' - i ')
//     for (let j = i + 1; j < setsArray.length; j++) {
//         console.log(j + ' - j ')
//         if (check(setsArray[i], setsArray[j])) {
//             console.log('11111')
//             console.log(sum + ' - sum')
//             console.log(arr[i].length)
//             console.log(arr[j].length)
//             sum = Math.max(sum, arr[i].length + arr[j].length);
//         }
//     }
// }

// return sum;