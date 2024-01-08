// У нас есть n заданий, каждое из которых запланировано выполнить
//  с startTime[i] до endTime[i], получая прибыль в виде прибыли[i].
// Вам даны массивы startTime, endTime иprofit, которые возвращают 
// максимальную прибыль, которую вы можете получить, чтобы в подмножестве 
// не было двух заданий с перекрывающимся диапазоном времени.
// Если вы выберете задание, которое заканчивается во время X, 
// вы сможете начать другое задание, которое начнется во время X.

// 1235

function binSearch(jobs, index) {
    let start = 0, end = index - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (jobs[mid][1] <= jobs[index][0]) {
            if (jobs[mid + 1][1] <= jobs[index][0]) {
                start = mid + 1;
            } else {
                return mid;
            }
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

var jobScheduling = function (startTime, endTime, profit) {
    let jobs = startTime.map((start, i) => [start, endTime[i], profit[i]]);
    jobs.sort((a, b) => a[1] - b[1]);
    let dp = new Array(jobs.length);
    dp[0] = jobs[0][2];
    for (let i = 1; i < jobs.length; i++) {
        let inclProf = jobs[i][2];
        let l = binSearch(jobs, i);
        if (l != -1) {
            inclProf += dp[l];
        }
        dp[i] = Math.max(inclProf, dp[i - 1]);
    }
    return dp[jobs.length - 1];
};

