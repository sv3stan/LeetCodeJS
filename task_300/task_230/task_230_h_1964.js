// Вы хотите построить несколько полос препятствий.Вам дан целочисленный массив препятствий с индексом 0 и длиной n, 
// где препятствия[i] описывают высоту i - го препятствия.
// Для каждого индекса i от 0 до n - 1(включительно) найдите длину самой длинной полосы препятствий среди препятствий, таких что:
// Вы выбираете любое количество препятствий от 0 до i включительно.
// Вы должны включить i - е препятствие в маршрут.
// Вы должны расположить выбранные препятствия в том же порядке, в котором они появляются в препятствиях.
// Каждое препятствие(кроме первого) выше или равной высоте с препятствием непосредственно перед ним.
// Верните массив answer длины n, где answer[i] — длина самой длинной полосы препятствий для индекса i, как описано выше.
// 1964

obstacles = [3, 1, 5, 6, 4, 2]

var longestObstacleCourseAtEachPosition = function (obstacles) {
    const length = obstacles.length;
    const answer = new Array(length).fill(1);
    const stack = [obstacles[0]];

    for (let i = 1; i < length; i++) {
        if (obstacles[i] >= stack[stack.length - 1]) {
            stack.push(obstacles[i]);
            answer[i] = stack.length;
        } else {
            let left = 0;
            let right = stack.length - 1;
            while (left <= right) {
                const middle = Math.floor((left + right) / 2);
                if (stack[middle] <= obstacles[i]) {
                    left = middle + 1;
                } else {
                    right = middle - 1;
                }
            }
            stack[left] = obstacles[i];
            answer[i] = left + 1;
        }

    }


    return answer;
};

console.log(longestObstacleCourseAtEachPosition(obstacles))



//const length = obstacles.length;
// const dp = Array.from({ length: length }).fill(1);


// for (let i = 0; i <= length; i++) {
//     for (let j = 0; j < i; j++) {
//         console.log('+++++++++++++')
//         console.log(obstacles[j] + ' - obstacles[j] - ' + obstacles[i] + ' - obstacles[i]')
//         if (obstacles[j] <= obstacles[i]) {
//             console.log('-----------')
//             dp[i] = Math.max(dp[i], dp[j] + 1);
//             console.log(dp)
//         }
//     }
// }

// return dp;