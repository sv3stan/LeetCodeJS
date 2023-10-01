// Вам даны два целочисленных массива nums1 и nums2.Мы записываем целые числа nums1 и 
// nums2(в том порядке, в котором они даны) на двух отдельных горизонтальных линиях.
// Мы можем провести соединительные линии: прямую линию, соединяющую два числа nums1[i] и nums2[j] так, что:
// nums1[i] == nums2[j] и
// линия, которую мы рисуем, не пересекает никакую другую соединительную(негоризонтальную) линию.
// Обратите внимание, что соединительная линия не может пересекаться даже в конечных точках
// (т.е.каждое число может принадлежать только одной соединительной линии).
// Возвращает максимальное количество соединительных линий, которые мы можем нарисовать таким образом.
// 1035
//nums1 = [2, 5, 1, 2, 5], nums2 = [10, 5, 2, 1, 5, 2]

//nums1 = [1, 4, 2], nums2 = [1, 2, 4]
nums1 = [1, 3, 7, 1, 7, 5], nums2 = [1, 9, 2, 5, 1]

nums1 = [2, 1]; nums2 = [1, 2, 1, 3, 3, 2];

function maxUncrossedLines(nums1, nums2) {

    //nums1 = [-1].concat(nums1);
    //nums2 = [-1].concat(nums2);

    const m = nums1.length;
    const n = nums2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n]

};

console.log(maxUncrossedLines(nums1, nums2))

















// function maxUncrossedLines(nums1, nums2) {

//     const m = nums2.length;
//     const n = nums1.length;
//     const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
//     console.log(dp)

//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             console.log(i + ' - i -' + j + ' - j -' + nums1[i - 1] + ' - nums1[i - 1] - ' + nums2[j - 1] + ' - nums2[j - 1] -')
//             if (nums1[i - 1] === nums2[j - 1]) {
//                 dp[i][j] = dp[i - 1][j - 1] + 1;
//                 console.log('++++++++++')
//             } else {
//                 console.log(dp[i][j] + ' - dp[i][j] -' + dp[i - 1][j] + ' - dp[i - 1][j] - ' + dp[i][j - 1] + ' - dp[i][j - 1] -  =====')
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//                 console.log(dp[i][j] + ' - dp[i][j] -' + dp[i - 1][j] + ' - dp[i - 1][j] - ' + dp[i][j - 1] + ' - dp[i][j - 1] -++++++')
//             }
//             console.log(dp)
//         }
//     }

//     console.log(dp)
//     return dp[m][n]

// };