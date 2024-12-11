/*
You are given an integer array nums where the ith bag contains nums[i] balls. You are also given an integer maxOperations. You can perform the following operation at most maxOperations times: Take any bag of balls and divide it into two new bags with a positive number of balls. For example, a bag of 5 balls can become two new bags of 1 and 4 balls, or two new bags of 2 and 3 balls. Your penalty is the maximum number of balls in a bag. You want to minimize your penalty after the operations. Return the minimum possible penalty after performing the operations.
Вам дан целочисленный массив nums, где i-й мешок содержит шары nums[i]. Вам также дано целое число maxOperations. Вы можете выполнить следующую операцию максимум за раз maxOperations: Возьмите любой мешок с шариками и разделите его на два новых мешка с положительным числом шариков. Например, мешок с 5 мячами может стать двумя новыми мешками с 1 и 4 мячами или двумя новыми мешками с 2 и 3 мячами. Ваше наказание — максимальное количество шаров в мешке. Вы хотите минимизировать штраф после операций. Вернуть минимально возможный штраф после выполнения операций.
*/

function minimumSize(nums: number[], maxOperations: number): number {
    function canDivide(maxBalls: number): boolean {
        let operations = 0;
        for (const balls of nums) {
            if (balls > maxBalls) {
                operations += Math.floor((balls - 1) / maxBalls);
                if (operations > maxOperations) {
                    return false;
                }
            }
        }
        return true;
    }

    let left = 1;
    let right = Math.max(...nums);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canDivide(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
