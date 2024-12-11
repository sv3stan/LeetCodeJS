/**
An array is considered special if every pair of its adjacent elements contains two numbers with different parity. You are given an array of integer nums and a 2D integer matrix queries, where for queries[i] = [fromi, toi] your task is to check that subarray nums[fromi..toi] is special or not. Return an array of booleans answer such that answer[i] is true if nums[fromi..toi] is special.
Массив считается особенным, если каждая пара его соседних элементов содержит два числа разной четности. Вам дан массив целочисленных чисел и запросы к двумерной целочисленной матрице, где для запросов [i] = [fromi, toi] ваша задача — проверить, что подмассив nums[fromi..toi] особенный или нет. Возвращает массив логических значений ответа, в котором ответ[i] имеет значение true, если nums[fromi..toi] является особенным.
 */

function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
    let res: boolean[] = new Array(queries.length).fill(false);
    let prefix: number[] = new Array(nums.length).fill(0);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % 2 == nums[i - 1] % 2) {
            prefix[i] = prefix[i - 1] + 1;
        } else {
            prefix[i] = prefix[i - 1];
        }
    }

    for (let i = 0; i < queries.length; i++) {
        res[i] = prefix[queries[i][1]] - prefix[queries[i][0]] === 0;
    }

    return res;
}
