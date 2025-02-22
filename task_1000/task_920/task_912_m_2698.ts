/**
Учитывая положительное целое число n, верните номер наказания n. Количество наказания n определяется как сумма квадратов всех целых чисел I такого, что: 1 <= i <= n Десятичное представление I * I может быть разделено на смежные подстроки, так что сумма целочисленных значений этих подстроков равна i.
 */

function punishmentNumber(n: number): number {
    function canPartition(s: string, target: number): boolean {
        function backtrack(start: number, currentSum: number): boolean {
            if (start === s.length) {
                return currentSum === target;
            }
            let num = 0;
            for (let end = start; end < s.length; end++) {
                num = num * 10 + parseInt(s[end], 10);
                if (currentSum + num > target) break;
                if (backtrack(end + 1, currentSum + num)) {
                    return true;
                }
            }
            return false;
        }
        return backtrack(0, 0);
    }

    let result = 0;
    for (let i = 1; i <= n; i++) {
        const square = i * i;
        const squareStr = square.toString();
        if (canPartition(squareStr, i)) {
            result += square;
        }
    }

    return result;
}
