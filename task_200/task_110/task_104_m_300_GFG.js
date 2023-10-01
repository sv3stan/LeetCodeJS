//Дан массив целых чисел, найти длину самой длинной(строго) возрастающей подпоследовательности из данного массива.
// 300
//Задача сайта GFG

// n = 6;
// a = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
// a = [5, 8, 3, 7, 9, 1];

nums = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
nums = [10, 9, 2, 5, 3, 7, 101, 18]
//nums = [0, 1, 0, 3, 2, 3]
//nums = [7, 7, 7, 7, 7, 7, 7]

function lengthOfLIS(nums) {
    n = nums.length;
    const dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && dp[i] <= dp[j] + 1) dp[i] = dp[j] + 1;
            //  console.log(dp)
        }
    }
    return Math.max(...dp);

};

console.log(lengthOfLIS(nums));
// function longestSubsequence(n, a) {
//     const dp = new Array(n).fill(1);
//     for (let i = 1; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             if (a[i] > a[j]) dp[i] = dp[j] + 1;
//             console.log(dp)
//         }
//     }
//     return Math.max(...dp);
// }


//console.log(longestSubsequence(n, a))












//function longestSubsequence(n, a) {


//     const dp = [];
//     dp.push(...new Array(n).fill(1));
//     console.log(dp)
//     console.log(n)
//     for (let i = 1; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             //   console.log(i + ' - i - ' + j + ' - j')
//             //   console.log(a[i] + ' - a[i] - ' + a[j] + ' - a[j] - ' + dp[i] + ' - dp[i] - ' + dp[j] + ' - dp[j] + 1 - ');
//             if (a[i] > a[j] && dp[i] <= dp[j] + 1) { dp[i] = dp[j] + 1; }
//             //   console.log(dp[i] + + ' - dp[i] - ')

//         }

//     }
//     console.log(dp)
//     return Math.max(...dp);
// }
