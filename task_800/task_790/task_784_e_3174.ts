/**
Вам дана строка s.
Ваша задача — удалить все цифры, проделав эту операцию несколько раз:
Удалите первую цифру и ближайший нецифровой символ слева от нее.
Верните полученную строку после удаления всех цифр.
 */

function clearDigits(s: string): string {
    const chars = s.split('');
    let i = 0;
    while (i < chars.length) {
        if (chars[i] > '9' && chars[i + 1] < 'a') {
            chars.splice(i, 2);
            i = 0;
        } else {
            i++;
        }
    }
    return chars.join('');
}
