// Учитывая целое число n, вернуть количество структурно уникальных BST(бинарных деревьев поиска), 
// которые имеют ровно n узлов с уникальными значениями от 1 до n.
// 96
n = 4;
function numTrees(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n + 1; i++) {
        for (let j = 0; j <= i - 1; j++) {
            dp[i] += dp[j] * dp[i - j - 1];
        }
    }
    return dp[n]
};

console.log(numTrees(n)); 