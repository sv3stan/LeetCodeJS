/*
Вам дано целое число. Вы можете поменять местами две цифры не более одного раза, чтобы получить максимальное значение.
Верните максимальное число, которое вы можете получить.
 */

function maximumSwap(num: number): number {
    const digits = Array.from(String(num), Number);
    const lastIndex = new Array(10).fill(-1);

    // Запоминаем последнюю позицию каждой цифры
    for (let i = 0; i < digits.length; i++) {
        lastIndex[digits[i]] = i;
    }

    // Ищем первую цифру, которую можно поменять на большую
    for (let i = 0; i < digits.length; i++) {
        for (let d = 9; d > digits[i]; d--) {
            if (lastIndex[d] > i) {
                // Меняем цифры
                [digits[i], digits[lastIndex[d]]] = [
                    digits[lastIndex[d]],
                    digits[i],
                ];
                return Number(digits.join('')); // Возвращаем результат после первой замены
            }
        }
    }

    return num;
}
