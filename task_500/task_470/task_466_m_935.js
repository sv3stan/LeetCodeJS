// Учитывая целое число n, выведите количество различных 
// телефонных номеров длины n, которые мы можем набрать.
// Вам разрешено изначально разместить коня на любой числовой ячейке, 
// а затем вам необходимо совершить n - 1 прыжков, 
// чтобы набрать число длиной n.Все прыжки должны быть 
// действительными прыжками коня.
// Поскольку ответ может быть очень большим, верните ответ по модулю 109 + 7.

//935


n = 3131
n = 6

var knightDialer = function (n) {
    const jumps = [[4, 6], [6, 8], [7, 9], [4, 8], [3, 9, 0], [], [1, 7, 0], [2, 6], [1, 3], [2, 4]];
    let answer = 0;
    const MOD = 1000 * 1000 * 1000 + 7;

    const dp = Array.from({ length: n }, () => Array(10).fill(0));


    for (let initial = 0; initial < 10; initial++) {
        dp[0][initial] = 1;
    }


    for (let current = 1; current < n; current++) {
        for (let initial = 0; initial < 10; initial++) {
            let result = 0;
            for (const nextSquare of jumps[initial]) {
                result = (result + dp[current - 1][nextSquare]) % MOD;
            }

            dp[current][initial] = result;
        }
    }


    for (let initial = 0; initial < 10; initial++) {
        answer = (answer + dp[n - 1][initial]) % MOD;
    }

    return answer;
};

console.log(knightDialer(n))