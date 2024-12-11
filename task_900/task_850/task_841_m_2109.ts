/**
You are given a 0-indexed string s and a 0-indexed integer array spaces that describes the indices in the original string where spaces will be added. Each space should be inserted before the character at the given index. For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place spaces before 'Y' and 'C', which are at indices 5 and 9 respectively. Thus, we obtain "Enjoy Your Coffee". Return the modified string after the spaces have been added.
Вам дана строка s с индексом 0 и целочисленный массив пробелов с индексом 0, который описывает индексы в исходной строке, куда будут добавлены пробелы. Каждый пробел должен быть вставлен перед символом по данному индексу. Например, учитывая s = «EnjoyYourCoffee» и пробелы = [5, 9], мы помещаем пробелы перед «Y» и «C», которые находятся под индексами 5 и 9 соответственно. Таким образом, мы получаем «Наслаждайтесь кофе». Верните измененную строку после добавления пробелов.
 */

function addSpaces(s: string, spaces: number[]): string {
    const hash = new Set(spaces);
    const all = Array.from({ length: s.length + spaces.length }).fill(' ');
    for (let i = 0, j = 0; i < s.length; i++, j++) {
        if (hash.has(i)) {
            j++;
            all[j] = s[i];
        } else {
            all[j] = s[i];
        }
    }
    return all.join('');
}
