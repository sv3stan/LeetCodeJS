/**
Вам дан целочисленный массив nums и целочисленная цель. Вы хотите построить выражение из чисел, добавив один из символов «+» и «-» перед каждым целым числом в числах, а затем объединить все целые числа. Например, если nums = [2, 1], вы можете добавить «+» перед 2 и «-» перед 1 и объединить их, чтобы построить выражение «+2-1». Возвращает количество различных выражений, которые вы можете построить и которые достигают целевого значения.
 */

function findTargetSumWays(nums: number[], target: number): number {
    const hash = new Map<string, number>();

    function dfs(index: number, sum: number): number {
        if (index === nums.length) {
            return sum === target ? 1 : 0;
        }

        const key = `${index},${sum}`;
        if (hash.has(key)) {
            return hash.get(key)!;
        }

        const add = dfs(index + 1, sum + nums[index]);
        const subtract = dfs(index + 1, sum - nums[index]);

        hash.set(key, add + subtract);

        return add + subtract;
    }

    return dfs(0, 0);
}
