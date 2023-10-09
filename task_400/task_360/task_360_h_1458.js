// Даны два массива nums1 и nums2.
// Возвращает максимальное скалярное произведение непустых 
// подпоследовательностей nums1 и nums2 одинаковой длины.
// Подпоследовательность массива — это новый массив, который 
// формируется из исходного массива путем удаления некоторых(
// может быть и ни одного) символов без нарушения относительного 
// положения остальных символов. (т.е. [2, 3, 5] является 
// подпоследовательностью[1, 2, 3, 4, 5], а[1, 5, 3] — нет).
// 1458


nums1 = [2, 1, -2, 5], nums2 = [3, 0, -6]
nums1 = [3, -2], nums2 = [2, -6, 7]
//nums1 = [-1, -1], nums2 = [1, 1]

var maxDotProduct = function (nums1, nums2) {
    if (nums1.length === 0 || nums2.length === 0) {
        return 0;
    }
    // const temp = nums1[0] * nums2[0];
    // const dp = Array.from({ length: Math.max(nums1.length, nums2.length) }).fill(0);
    // dp[0] = nums1[0] * nums2[0];

    const m = nums1.length;
    const n = nums2.length;
    const dp = Array.from(({ length: m }), () => Array(n).fill());

    dp[0][0] = nums1[0] * nums2[0];

    for (let i = 1; i < m; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], nums1[i] * nums2[0]);
    }

    for (let j = 1; j < n; j++) {
        dp[0][j] = Math.max(dp[0][j - 1], nums1[0] * nums2[j]);
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            const temp = nums1[i] * nums2[j];
            dp[i][j] = Math.max(
                temp,
                dp[i - 1][j - 1] + temp,
                dp[i - 1][j],
                dp[i][j - 1]
            );
        }
    }

    return dp[m - 1][n - 1];










    // for (let i = 0; i < nums1.length; i++) {
    //     for (let j = i; j < nums2.length; j++) {
    //         //      console.log(dp)
    //         console.log(nums1[i] * nums2[j])
    //         dp[i] = Math.max(dp[i], nums1[i] * nums2[j]);

    //     }
    //     if (i > 0) {
    //         dp[i] = Math.max(dp[i], dp[i - 1] + dp[i]);
    //     }

    //     console.log(dp)
    // }


    console.log(dp)
    return Math.max(...dp);
};


console.log(maxDotProduct(nums1, nums2))