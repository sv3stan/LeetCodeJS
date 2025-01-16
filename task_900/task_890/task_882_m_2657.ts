/**
Вам даны две целочисленные перестановки A и B с нулевым индексом длины n. Общий префиксный массив A и B — это массив C, такой, что C[i] равен количеству чисел, которые присутствуют в индексе i или перед ним как в A, так и в B. Верните общий массив префиксов A и B. Последовательность из n целых чисел называется перестановкой, если она содержит все целые числа от 1 до n ровно один раз.
 */

function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const n = A.length;
    const C: number[] = new Array(n);
    const seenA = new Set<number>();
    const seenB = new Set<number>();

    for (let i = 0; i < n; i++) {
        seenA.add(A[i]);
        seenB.add(B[i]);

        const common = new Set([...seenA].filter(x => seenB.has(x)));
        C[i] = common.size;
    }

    return C;
}
