/**
Учитывая целое число n, найдите последовательность, которая удовлетворяет всем следующим: Целое число 1 встречается один раз в последовательности. Каждое целое число между 2 и N происходит дважды в последовательности. Для каждого целого числа I от 2 до N расстояние между двумя событиями I точно I. Расстояние между двумя числами на последовательности, A [i] и A [j], является абсолютной разницей их индексов, | j - i |. Вернуть лексикографически самую большую последовательность. Гарантируется, что в соответствии с данными ограничениями всегда есть решение. Последовательность A лексикографически больше, чем последовательность B (та же длины), если в первой позиции, где A и B отличаются, последовательность A имеет число больше, чем соответствующее число в B. Например, [0,1,9,0] лексикографически больше, чем [0,1,5,6], потому что первая позиция, которую они отличаются, находится на третьем числе, а 9 - больше 5.
 */

function constructDistancedSequence(n: number): number[] {
    const length = 2 * n - 1;
    const result: number[] = new Array(length).fill(0);
    const used: boolean[] = new Array(n + 1).fill(false);

    function backtrack(index: number): boolean {
        if (index === length) {
            return true;
        }

        if (result[index] !== 0) {
            return backtrack(index + 1);
        }

        for (let num = n; num >= 1; num--) {
            if (used[num]) continue;

            if (num === 1) {
                result[index] = 1;
                used[1] = true;

                if (backtrack(index + 1)) {
                    return true;
                }
                result[index] = 0;
                used[1] = false;
            } else {
                const secondIndex = index + num;
                if (secondIndex < length && result[secondIndex] === 0) {
                    result[index] = num;
                    result[secondIndex] = num;
                    used[num] = true;

                    if (backtrack(index + 1)) {
                        return true;
                    }

                    result[index] = 0;
                    result[secondIndex] = 0;
                    used[num] = false;
                }
            }
        }

        return false;
    }

    backtrack(0);

    return result;
}
