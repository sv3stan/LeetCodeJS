/**
You are given two 0-indexed strings str1 and str2. In an operation, you select a set of indices in str1, and for each index i in the set, increment str1[i] to the next character cyclically. That is 'a' becomes 'b', 'b' becomes 'c', and so on, and 'z' becomes 'a'. Return true if it is possible to make str2 a subsequence of str1 by performing the operation at most once, and false otherwise. Note: A subsequence of a string is a new string that is formed from the original string by deleting some (possibly none) of the characters without disturbing the relative positions of the remaining characters.
Вам даны две строки с нулевым индексом str1 и str2. В операции вы выбираете набор индексов в str1 и для каждого индекса i в наборе циклически увеличиваете str1[i] до следующего символа. То есть «а» становится «б», «б» становится «в» и так далее, а «з» становится «а». Возвращайте true, если можно сделать str2 подпоследовательностью str1, выполнив операцию не более одного раза, и false в противном случае. Примечание. Подпоследовательность строки — это новая строка, которая формируется из исходной строки путем удаления некоторых (возможно, ни одного) символов без нарушения относительного положения остальных символов.
 */

function canMakeSubsequence(str1: string, str2: string): boolean {
    let firstIndex = 0;
    let secondIndex = 0;

    while (firstIndex < str1.length && secondIndex < str2.length) {
        const char1 = str1[firstIndex];
        const char2 = str2[secondIndex];

        if (
            char1 === char2 ||
            (char1.charCodeAt(0) + 1 - 97) % 26 === char2.charCodeAt(0) - 97
        ) {
            secondIndex++;
        }
        firstIndex++;
    }

    return secondIndex === str2.length;
}
