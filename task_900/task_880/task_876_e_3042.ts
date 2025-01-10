/**
Вам дан массив слов с индексом 0. Давайте определим логическую функцию isPrefixAndSuffix, которая принимает две строки: str1 и str2: isPrefixAndSuffix(str1, str2) возвращает true, если str1 одновременно является префикс и суффикс из str2 и false в противном случае. Например, isPrefixAndSuffix("aba", "ababa") имеет значение true, поскольку "aba" является префиксом слова "ababa", а также суффиксом, но isPrefixAndSuffix("abc", "abcd") имеет значение false. Возвращает целое число, обозначающее количество пар индексов (i, j), таких что i < j, и значение isPrefixAndSuffix(words[i],words[j]) истинно.
 */

function countPrefixSuffixPairs(words: string[]): number {
    let answer = 0;
    const isPrefix = (str1, str2) => {
        if (str1.length <= str2.length) {
            if (
                str2.slice(0, str1.length) == str1 &&
                str2.slice(str2.length - str1.length, str2.length) == str1
            )
                return 1;
        }
        return 0;
    };
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            answer += isPrefix(words[i], words[j]);
        }
    }
    return answer;
}
