// Вы поднимаетесь по лестнице.Требуется n шагов, чтобы добраться до вершины.
// Каждый раз вы можете подняться либо на 1, либо на 2 ступеньки.
// Сколькими различными способами вы можете подняться на вершину?
// 70

n = 4;
function climbStairs(n) {
    // if (n === 1) return 1;
    // if (n === 2) return 2;

    const methods = [1, 1];
    for (let i = 2; i <= n; i++) {
        methods[i] = methods[i - 1] + methods[i - 2];
    }
    return methods[n];
};

console.log(climbStairs(n));

