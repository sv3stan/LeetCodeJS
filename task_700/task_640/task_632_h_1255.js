/*
Дан список слов, список отдельных букв (может повторяться) и оценка каждого символа.
Возвращает максимальный балл любого допустимого набора слов, образованного с использованием заданных букв (слова[i] нельзя использовать два или более раз).
Не обязательно использовать все символы в буквах, каждую букву можно использовать только один раз. Оценка букв 'a', 'b', 'c', ..., 'z' определяется как счет[0], счет[1], ..., счет[25] соответственно.
*/

let words = ['xxxz', 'ax', 'bx', 'cx'];
let letters = ['z', 'a', 'b', 'c', 'x', 'x', 'x'];
let score = [
    4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0,
    10,
];

let maxScoreWords = function (words, letters, score) {
    let lettersSize = new Array(26).fill(0);
    for (let char of letters) {
        lettersSize[char.charCodeAt() - 'a'.charCodeAt()]++;
    }

    let maxScore = 0;
    const helper = function (start, cur, curScore) {
        for (let i = start; i < words.length; i++) {
            let word = words[i];
            let remaind = [...cur];
            let nextScore = curScore;
            let j = 0;
            while (j < word.length) {
                let pointer = word[j].charCodeAt() - 'a'.charCodeAt();
                if (remaind[pointer]-- === 0) break;
                nextScore += score[pointer];
                j++;
            }
            if (j === word.length) {
                maxScore = Math.max(maxScore, nextScore);
                helper(i + 1, remaind, nextScore);
            }
        }
    };

    helper(0, lettersSize, 0);
    return maxScore;
};

console.log(maxScoreWords(words, letters, score));
