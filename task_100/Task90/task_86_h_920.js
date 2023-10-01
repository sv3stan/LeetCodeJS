// Ваш музыкальный проигрыватель содержит n разных песен.Вы хотите слушать целевые песни(не обязательно разные) во время поездки.
// Чтобы не было скуки, вы создадите плейлист так, чтобы:
// Каждая песня воспроизводится хотя бы один раз.
// Песня может быть воспроизведена снова только в том случае, если было воспроизведено k других песен.
// Учитывая n, цель и k, верните количество возможных списков воспроизведения, которые вы можете создать.
// Поскольку ответ может быть очень большим, верните его по модулю 109 + 7.
// 920

n = 3;
goal = 3;
k = 1;




function numMusicPlaylists(n, goal, k) {

    let dp = Array(n + 1).fill(0).map(() => Array(goal + 1).fill(0))

    let mod = 10 ** 9 + 7;
    dp[0][0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= goal; j++) {
            dp[i][j] = (dp[i - 1][j - 1] * (n - i + 1) + dp[i][j - 1] * Math.max(i - k, 0)) % mod
            console.log(dp)
        }
    }
    return dp[n][goal];
};





console.log(numMusicPlaylists(n, goal, k));









//var numMusicPlaylists = function (n, goal, k) {
//     let dp = Array(n + 1).fill(0).map(() => Array(goal + 1).fill(0))

//     let mod = 10 ** 9 + 7;
//     dp[0][0] = 1;
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= goal; j++) {

//             dp[i][j] = (dp[i - 1][j - 1] * (n - i + 1) + dp[i][j - 1] * Math.max(i - k, 0)) % mod
//             console.log(dp)
//         }
//     }
//     return dp[n][goal];
// };