/**
Вам дана строка s из строчных английских букв и двумерный целочисленный массив сдвигов, где сдвиги[i] = [starti, endi, Directioni]. Для каждого i сдвиньте символы в s от индекса starti до индекса endi (включительно) вперед, если Directioni = 1, или сдвиньте символы назад, если Directioni = 0. Сдвиг символа вперед означает замену его следующей буквой алфавита (переход так, что «z» становится «а»). Аналогично, сдвиг символа назад означает замену его предыдущей буквой алфавита (переход так, что «a» становится «z»). Верните окончательную строку после применения всех таких сдвигов к s.
 */

function shiftingLetters(s: string, shifts: number[][]): string {
    const n = s.length;
    const changes = new Array(n + 1).fill(0);

    for (const [start, end, direction] of shifts) {
        const shiftValue = direction === 1 ? 1 : -1;
        changes[start] += shiftValue;
        if (end + 1 < n) {
            changes[end + 1] -= shiftValue;
        }
    }

    let currentShift = 0;
    const shiftAmounts = new Array(n);
    for (let i = 0; i < n; i++) {
        currentShift += changes[i];
        shiftAmounts[i] = currentShift;
    }

    const result = s.split('').map((char, index) => {
        const base = char.charCodeAt(0) - 97;
        const shiftedIndex = (base + (shiftAmounts[index] % 26) + 26) % 26;
        return String.fromCharCode(shiftedIndex + 97);
    });

    return result.join('');
}
