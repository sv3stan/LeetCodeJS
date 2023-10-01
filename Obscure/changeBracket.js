// Цель этого упражнения — преобразовать строку в новую строку,
// где каждый символ в новой строке — это «(», если этот символ
// встречается в исходной строке только один раз, или «)»,
// если этот символ встречается в исходной строке более одного раза.
// нить. Игнорировать заглавные буквы при определении, является ли символ дубликатом.
// непонятно откуда задача


// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function changeBracket(word) {
    // let charArray = [];
    // let changeword = [];

    // for (let i = 0; i < word.length; i++) {
    //     let pos = 0;
    //     while (word.indexOf(word[i], pos) != -1) {
    //         let foundPos = word.indexOf(word[i], pos);

    //         charArray.push(foundPos);
    //         pos = foundPos + 1; // продолжаем со следующей позиции

    //         if (charArray.length > 1) {
    //             for (let j = 0; j < charArray.length; j++) {
    //                 changeword[charArray[j]] = ')';
    //             }
    //         } else {
    //             changeword[charArray[0]] = '(';
    //         }
    //     }

    //     charArray = [];
    // }

    // word = changeword.towording();
    // console.log(word);
    let result = '';

    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
            result += '(';
        } else {
            result += ')';
        }
    }

    return result;
}
console.log(changeBracket('recede'));
console.log(changeBracket('Success'));
console.log(changeBracket('din'));

const words = [
    'level',
    'hello',
    'radar',
    'world',
    'madam',
    'refer',
    'rotor',
    'redivider',
    'repaper',
    'racecar',
    'terminator',
    'surface',
];