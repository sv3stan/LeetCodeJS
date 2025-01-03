/**
Учитывая целое число, верните строку его представления по основанию 7.
 */

function convertToBase7(num: number): string {
    if (num === 0) return '0';

    const isNegative = num < 0;
    num = Math.abs(num);

    let result = '';
    while (num > 0) {
        result = (num % 7).toString() + result;
        num = Math.floor(num / 7);
    }

    return isNegative ? `-${result}` : result;
}
