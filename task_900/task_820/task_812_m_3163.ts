/**
Given a string word, compress it using the following algorithm: Begin with an empty string comp.While word is not empty, use the following operation: Remove a maximum length prefix of word made of a single character c repeating at most 9 times. Append the length of the prefix followed by c to comp. Return the string comp.
Учитывая строковое слово, сжимаем его, используя следующий алгоритм: Начните с пустой строки comp. Пока слово не пусто, используйте следующую операцию: Удалить префикс максимальной длины слова, состоящего из одного символа c, повторяющегося не более 9 раз. Добавьте длину префикса, за которым следует c, к comp. Верните строку comp.
 */

function compressedString(word: string): string {
    const res = new Array();
    let char = word[0];
    for (let i = 1; i < word.length + 1; i++) {
        let cnt = 1;
        while (char == word[i] && cnt < 9) {
            cnt++;
            i++;
        }
        res.push(cnt);
        res.push(char);
        char = word[i];
    }
    return res.join('');
}
