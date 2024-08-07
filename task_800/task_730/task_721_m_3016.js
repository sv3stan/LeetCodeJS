/**
Дана строка word, содержащая строчные буквы английского алфавита.
На телефонных клавиатурах кнопки сопоставлены с различными наборами строчных английских букв, которые можно использовать для набора слов. Например, клавиша 2 сопоставлена с буквами ["a","b","c"], для набора буквы "a" необходимо нажать клавишу один раз, для набора буквы "b" — два раза, а для набора буквы "c" — три раза.
Разрешается переназначать кнопки с номерами от 2 до 9 на различные наборы букв. Клавиши могут быть переназначены на любое количество букв, но каждая буква должна быть сопоставлена ровно одной кнопке. Необходимо найти минимальное количество нажатий на клавиши, чтобы набрать строку word.
Вернуть минимальное количество нажатий, необходимых для набора строки word после переназначения кнопок.
Пример сопоставления букв с кнопками на телефонной клавиатуре приведён ниже. Обратите внимание, что кнопки 1, *, # и 0 не сопоставлены с буквами.
 */

let word = 'aabbccddeeffgghhiiiiii';

let minimumPushes = function (word) {
    const hash = new Map();

    for (let i = 0; i < word.length; i++) {
        hash.set(word[i], (hash.get(word[i]) ?? 0) + 1);
    }

    const arr = [];

    for (let [key, value] of hash.entries()) {
        arr.push([key, value]);
    }

    arr.sort((a, b) => b[1] - a[1]);

    let answer = 0;
    let multiplier = 1;
    for (let i = 1; i <= arr.length; i++) {
        answer += arr[i - 1][1] * multiplier;
        if (i % 8 === 0) multiplier++;
    }
    return answer;
};

console.log(minimumPushes(word));

// const hash = new Map();

// for (let i = 0; i < word.length; i++) {
//     hash.set(word[i], (hash.get(word[i]) ?? 0) + 1);
// }
// console.log(hash);

// const arr = [];

// for (let [key, value] of hash.entries()) {
//     arr.push([key, value]);
// }

// arr.sort((a, b) => b[1] - a[1]);
// console.log(arr);
// let answer = 0;
// let multiplier = 1;
// for (let i = 1; i <= arr.length; i++) {
//     console.log('🚀 ~ minimumPushes ~ multiplier:', multiplier);

//     console.log('🚀 ~ minimumPushes ~ arr[i][1]:', arr[i - 1][1]);
//     answer += arr[i - 1][1] * multiplier;

//     console.log(answer);
//     if (i % 8 === 0) multiplier++;
// }
// return answer;
