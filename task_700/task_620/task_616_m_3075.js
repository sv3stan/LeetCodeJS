/*
Вам дан массив счастья длиной n и целое положительное число k.
В очереди стоят n детей, где i-й ребенок имеет значение счастья счастье[i]. Вы хотите выбрать k детей из этих n детей по k ходов.
На каждом ходу, когда вы выбираете ребенка, значение счастья всех детей, которые до сих пор не были выбраны, уменьшается на 1. Обратите внимание, что значение счастья не может стать отрицательным и уменьшается, только если оно положительное.
Возвращает максимальную сумму значений счастья выбранных детей, которых вы можете достичь, выбрав k детей.
*/

let happiness = [2, 3, 4, 5];
let k = 2;

let maximumHappinessSum = function (happiness, k) {
    happiness.sort((a, b) => b - a);
    let answer = 0;
    let count = 1;
    console.log(happiness);
    answer += happiness[0];
    for (let i = 1; i < k; i++) {
        if (happiness[i] - count > 0) {
            answer += happiness[i] - count;
            count++;
        }
        console.log(count + ' - i ');
        console.log(answer);
    }

    return answer;
};

console.log(maximumHappinessSum(happiness, k));
