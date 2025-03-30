/**
Вам дают массивные числа n положительных целых чисел и целое число k. Первоначально вы начинаете с оценки 1. Вы должны максимизировать свой счет, применив следующую операцию в максимум K Times: Выберите любые непустые Subarray Nums [l, ..., r], которые вы не выбрали ранее. Выберите элемент x nums [l, ..., r] с наивысшей оценкой. Если существует несколько таких элементов, выберите один с наименьшим индексом. Умножьте свой счет на x. Здесь Nums [l, ..., R] обозначает Subarray of Nums, начиная с индекса L и заканчивается в индексе R, оба концы были включены. Основная оценка целочисленного X равен количеству различных основных факторов x. Например, основной балл 300 составляет 3 с 300 = 2 * 2 * 3 * 5 * 5. Верните максимально возможный балл после применения в максимальной k операциях. Поскольку ответ может быть большим, вернуть его модуль 109 + 7.
 */

const MOD = 1_000_000_007;

function calculatePrimeScores(maxValue: number): number[] {
    const scores = new Array(maxValue + 1).fill(0);
    for (let i = 2; i <= maxValue; i++) {
        if (scores[i] === 0) {
            for (let j = i; j <= maxValue; j += i) {
                scores[j]++;
            }
        }
    }
    return scores;
}

function modularExponentiation(
    base: number,
    exponent: number,
    mod: number,
): number {
    let result = 1n;
    let b = BigInt(base);
    let exp = BigInt(exponent);
    let m = BigInt(mod);

    while (exp > 0n) {
        if (exp % 2n === 1n) {
            result = (result * b) % m;
        }
        b = (b * b) % m;
        exp /= 2n;
    }

    return Number(result);
}

function maximumScore(numbers: number[], operationsCount: number): number {
    const count = numbers.length;
    const maxNumber = Math.max(...numbers);
    const primeScores = calculatePrimeScores(maxNumber);

    const leftBoundaries = new Array(count).fill(-1);
    const rightBoundaries = new Array(count).fill(count);
    const stack: number[] = [];

    for (let i = 0; i < count; i++) {
        while (
            stack.length > 0 &&
            primeScores[numbers[stack[stack.length - 1]]] <
                primeScores[numbers[i]]
        ) {
            stack.pop();
        }
        leftBoundaries[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }

    while (stack.length > 0) stack.pop();

    for (let i = count - 1; i >= 0; i--) {
        while (
            stack.length > 0 &&
            primeScores[numbers[stack[stack.length - 1]]] <=
                primeScores[numbers[i]]
        ) {
            stack.pop();
        }
        rightBoundaries[i] =
            stack.length === 0 ? count : stack[stack.length - 1];
        stack.push(i);
    }

    const priorityQueue: [number, number][] = numbers.map((num, index) => [
        num,
        index,
    ]);
    priorityQueue.sort((a, b) => b[0] - a[0]);

    let result = 1n;
    let remainingOperations = BigInt(operationsCount);

    for (const [value, position] of priorityQueue) {
        if (remainingOperations <= 0n) break;

        const leftSpan = BigInt(
            position -
                (leftBoundaries[position] === -1
                    ? -1
                    : leftBoundaries[position]),
        );
        const rightSpan = BigInt(
            (rightBoundaries[position] === count
                ? count
                : rightBoundaries[position]) - position,
        );
        const possibleOperations = leftSpan * rightSpan;

        if (possibleOperations > 0n) {
            const actualOperations =
                possibleOperations < remainingOperations
                    ? possibleOperations
                    : remainingOperations;
            result =
                (result *
                    BigInt(
                        modularExponentiation(
                            value,
                            Number(actualOperations),
                            MOD,
                        ),
                    )) %
                BigInt(MOD);
            remainingOperations -= actualOperations;
        }
    }

    return Number(result);
}
