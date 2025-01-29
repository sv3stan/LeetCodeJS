/**
Вам дан массив положительных целых чисел с индексом 0 и предел положительных целых чисел. За одну операцию вы можете выбрать любые два индекса i и j и поменять местами nums[i] и nums[j], если |nums[i] - nums[j]| <= предел. Возвращает лексикографически наименьший массив, который можно получить, выполнив операцию любое количество раз. Массив a лексикографически меньше массива b, если в первой позиции, где a и b различаются, массив a содержит элемент, меньший соответствующего элемента в b. Например, массив [2,10,3] лексикографически меньше массива [10,2,3], поскольку они различаются индексами 0 и 2 < 10.
 */

function lexicographicallySmallestArray(
    nums: number[],
    limit: number,
): number[] {
    const n: number = nums.length;
    const sortedIndices: number[] = Array.from(
        { length: n },
        (_, index) => index,
    );
    sortedIndices.sort((a, b) => nums[a] - nums[b]);

    const answer: number[] = Array(n).fill(0);

    let groupStart: number = 0;
    while (groupStart < n) {
        let groupEnd: number = groupStart + 1;

        while (
            groupEnd < n &&
            nums[sortedIndices[groupEnd]] - nums[sortedIndices[groupEnd - 1]] <=
                limit
        ) {
            groupEnd++;
        }

        const group: number[] = sortedIndices
            .slice(groupStart, groupEnd)
            .sort((a, b) => a - b);

        const sortVal: number[] = group
            .map(index => nums[index])
            .sort((a, b) => a - b);

        for (let i = 0; i < group.length; i++) {
            answer[group[i]] = sortVal[i];
        }

        groupStart = groupEnd;
    }

    return answer;
}
