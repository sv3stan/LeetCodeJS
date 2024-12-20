/**
Вам дана строка s и целое число повторения. Создайте новую строку restartLimitedString, используя символы s, так, чтобы ни одна буква не появлялась более повторного лимита раз подряд. Вам не обязательно использовать все символы из s. Возвращает максимально возможную лексикографически повторную строкуLimitedString. Строка a лексикографически больше строки b, если в первой позиции, где a и b различаются, строка a имеет букву, которая появляется в алфавите позже, чем соответствующая буква в b. Если первые символы min(a.length, b.length) не различаются, то более длинная строка является лексикографически большей.
 */

function repeatLimitedString(s: string, repeatLimit: number): string {
    const freq: Map<string, number> = new Map();

    for (const ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    const sortedChars: string[] = Array.from(freq.keys()).sort((a, b) =>
        b.localeCompare(a),
    );

    let result: string = '';
    let i = 0;
    let prevChar: string = '';
    let prevCount: number = 0;

    while (i < sortedChars.length) {
        const char = sortedChars[i];
        const count = freq.get(char)!;

        if (prevChar === char && prevCount >= repeatLimit) {
            if (i + 1 < sortedChars.length) {
                const nextChar = sortedChars[i + 1];
                result += nextChar;
                freq.set(nextChar, freq.get(nextChar)! - 1);

                if (freq.get(nextChar)! === 0) {
                    sortedChars.splice(i + 1, 1);
                }
                prevChar = nextChar;
                prevCount = 1;
            } else {
                break;
            }
        } else {
            const addCount = Math.min(count, repeatLimit);
            result += char.repeat(addCount);
            freq.set(char, count - addCount);

            if (freq.get(char)! === 0) {
                sortedChars.splice(i, 1);
            }
            prevChar = char;
            prevCount = addCount;
        }
    }

    return result;
}
