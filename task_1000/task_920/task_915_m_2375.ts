/**
Вам дается 0-индексированная струнная шаблон длины n, состоящий из символов «i», означающего увеличение, а «d» означает уменьшение. Строка с 0 индексацией длины n + 1 создается с использованием следующих условий: Число состоит из цифр «1» до «9», где каждая цифра используется не более раз. Если шаблон [i] == 'i', то num [i] <num [i + 1]. Если шаблон [i] == 'd', то num [i]> num [i + 1]. Верните лексикографически наименьшее возможное num String, которое соответствует условиям.
как решить задачу на typescript?
 */

function smallestNumber(pattern: string): string {
    let result = '';
    let stack: number[] = [];

    for (let i = 0; i <= pattern.length; i++) {
        stack.push(i + 1);

        if (i === pattern.length || pattern[i] === 'I') {
            while (stack.length > 0) {
                result += stack.pop();
            }
        }
    }

    return result;
}
