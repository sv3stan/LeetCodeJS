/**
You are given a 0-indexed array of strings words and a 2D array of integers queries. Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri (both inclusive) of words that start and end with a vowel. Return an array ans of size queries.length, where ans[i] is the answer to the ith query. Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.
Вам дан массив строковых слов с нулевым индексом и двумерный массив целочисленных запросов. Каждый запрос query[i] = [li, ri] просит нас найти количество строк, присутствующих в диапазоне от li до ri (включительно) слов, которые начинаются и заканчиваются гласной. Возвращает массив ans размера query.length, где ans[i] — это ответ на i-й запрос. Обратите внимание, что гласные буквы — это «а», «е», «я», «о» и «у».
 */

let words = ['aba', 'bcb', 'ece', 'aa', 'e'];
let queries = [
    [0, 2],
    [1, 4],
    [1, 1],
];

function vowelStrings(words: string[], queries: number[][]): number[] {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const prefix: number[] = Array(words.length).fill(0);
    const result: number[] = Array(queries.length).fill(0);

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const left = vowels.includes(word[0].toLowerCase());
        const right = vowels.includes(word[word.length - 1].toLowerCase());

        prefix[i] = (i > 0 ? prefix[i - 1] : 0) + (left && right ? 1 : 0);
    }

    for (let i = 0; i < queries.length; i++) {
        const [li, ri] = queries[i];
        result[i] = prefix[ri] - (li > 0 ? prefix[li - 1] : 0);
    }

    return result;
}

console.log(vowelStrings(words, queries));
