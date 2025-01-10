/**
Учитывая массив строковых слов, верните все строки в словах, которые являются подстрокой другого слова. Вы можете вернуть ответ в любом порядке. Подстрока – это непрерывная последовательность символов внутри строки.
 */

function stringMatching(words: string[]): string[] {
    const answer: string[] = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i === j) continue;
            if (words[i].includes(words[j])) {
                if (!answer.includes(words[j])) {
                    answer.push(words[j]);
                }
            }
        }
    }
    return answer;
}
