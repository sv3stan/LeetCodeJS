/**
Вам даны два массива строк:word1 иword2. Строка b является подмножеством строки a, если каждая буква в строке b встречается в включенной кратности. Например, «wrr» — это подмножество слова «воин», но не подмножество слова «мир». Строка a из word1 является универсальной, если для каждой строки b в word2 b является подмножеством a. Возвращает массив всех универсальных строк в word1. Вы можете вернуть ответ в любом порядке.
 */


function wordSubsets(words1: string[], words2: string[]): string[] {
    const answer: string[] = [];
    const freq: number[] = new Array(26).fill(0);

    for (const str of words2) {
        const temp: number[] = new Array(26).fill(0);
        for (const char of str) {
            temp[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for (let i = 0; i < 26; i++) {
            freq[i] = Math.max(freq[i], temp[i]);
        }
    }

    for (const str of words1) {
        const temp: number[] = new Array(26).fill(0);
        for (const char of str) {
            temp[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let isSubset = true;

        for (let i = 0; i < 26; i++) {
            if (temp[i] < freq[i]) {
                isSubset = false;
                break;
            }
        }

        if (isSubset) {
            answer.push(str);
        }
    }

    return answer;
};