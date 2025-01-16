/**
Вам дана строка s. Вы можете выполнить следующий процесс для s любое количество раз: Выберите индекс i в строке так, чтобы слева от индекса i был хотя бы один символ, равный s[i], и хотя бы один символ справа, который также равен s[i]. Удалить ближайший символ слева от индекса i, равный s[i]. Удалить ближайший символ справа от индекса i, равный s[i]. Верните минимальную длину последней строки s, которую вы можете достичь.
 */

function minimumLength(s: string): number {
    const hash = new Map<string, number>();

    const arr = s.split('');
    for (const char of arr) {
        hash.set(char, (hash.get(char) ?? 0) + 1);
    }

    let newLength = 0;

    for (let count of hash.values()) {
        if (count >= 3) {
            while (count >= 3) {
                count -= 2;
            }
            newLength += count;
        } else {
            newLength += count;
        }
    }

    return newLength;
}
