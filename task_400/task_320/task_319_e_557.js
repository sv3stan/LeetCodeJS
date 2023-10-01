// Учитывая строку s, измените порядок символов в каждом слове предложения, 
// сохраняя при этом пробелы и первоначальный порядок слов.
// 557

s = "Let's take LeetCode contest"
//s = "God Ding"
//s = "hehhhhhhe";
var reverseWords = function (s) {


    // Разделяем строку на слова
    const words = s.split(' ');

    // Проходим по каждому слову
    const reversedWords = words.map(word => {
        // Преобразуем слово в массив символов, меняем порядок и объединяем обратно
        const reversedChars = word.split('').reverse().join('');
        return reversedChars;
    });

    // Объединяем слова обратно в строку с пробелами
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;


};


console.log(reverseWords(s))






// // Разделяем строку на слова
// //const words = s.split(' ');
// //console.log(words)
// // Проходим по каждому слову
// const answer = s.split(' ').map(word => {
//     // Создаем два указателя
//     let ahead = 0;
//     let end = word.length - 1;

//     // Преобразуем слово в массив символов, меняя порядок символов методом двух указателей
//     const ch = word.split('');
//     while (ahead < end) {
//         // Меняем символы местами
//         const temp = ch[ahead];
//         ch[ahead] = ch[end];
//         ch[end] = temp;

//         // Сдвигаем указатели
//         ahead++;
//         end--;
//     }

//     // Объединяем символы массива в строку
//     return ch.join('');
// });

// // Объединяем слова обратно в строку с пробелами
// //const reversedSentence = answer.join(' ');

// return answer.join(' ');








// let answer = '';
// for (let i = 0; i < s.length; i++) {
//     let temp = '';

//     while (s[i] !== ' ' && i < s.length) {
//         temp = s[i] + temp;
//         i++;
//     }
//     console.log(temp);
//     (i === s.length) ? answer += temp : answer += temp + ' ';
//     console.log(answer);
// }