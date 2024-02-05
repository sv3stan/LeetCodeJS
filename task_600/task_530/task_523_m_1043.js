// Учитывая целочисленный массив arr, разделите массив на(непрерывные) 
// подмассивы длиной не более k.После разделения значения каждого 
// подмассива изменяются, чтобы стать максимальным значением этого подмассива.
// Возвращает наибольшую сумму данного массива после разделения.Тестовые 
// случаи генерируются таким образом, чтобы ответ умещался в 32 - битное целое число.

// 1043

arr = [1, 15, 7, 9, 2, 5, 10], k = 3

var maxSumAfterPartitioning = function (arr, k) {

    const length = arr.length;
    const dp = Array.from({ length: length + 1 }).fill(0);
    //     int dp[length + 1];
    // memset(dp, 0, sizeof(dp));

    for (let begin = length - 1; begin >= 0; begin--) {
        let currMax = 0;
        let end = Math.min(length, begin + k);

        for (let i = begin; i < end; i++) {
            currMax = Math.max(currMax, arr[i]);
            // Store the maximum of all options for the current subarray.
            dp[begin] = Math.max(dp[begin], dp[i + 1] + currMax * (i - begin + 1));
        }
    }
    return dp[0];

};



console.log(maxSumAfterPartitioning(arr, k))