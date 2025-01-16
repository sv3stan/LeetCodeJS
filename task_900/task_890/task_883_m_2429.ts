/**
Учитывая два положительных целых числа num1 и num2, найдите натуральное число x такое, что: x имеет то же количество установленных битов, что и num2, и Значение x XOR num1 минимально. Обратите внимание, что XOR — это побитовая операция XOR. Вернуть целое число x. Тестовые случаи генерируются таким образом, что x определяется однозначно. Количество установленных бит целого числа — это количество единиц в его двоичном представлении.
 */

function minimizeXor(num1: number, num2: number): number {
    const countBits = (num: number): number => {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    };

    let setBits = countBits(num2);
    let result = 0;

    for (let i = 31; i >= 0 && setBits > 0; i--) {
        if ((num1 & (1 << i)) !== 0) {
            result |= 1 << i;
            setBits--;
        }
    }

    for (let i = 0; i < 32 && setBits > 0; i++) {
        if ((result & (1 << i)) === 0) {
            result |= 1 << i;
            setBits--;
        }
    }

    return result;
}
