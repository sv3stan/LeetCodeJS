// Вы хотите запланировать список заданий на d дней.
// Рабочие места являются зависимыми(т.е.для работы над i - м 
// заданием необходимо завершить все задания j, где 0 <= j < i).
// Вы должны выполнять хотя бы одно задание каждый день.
// Сложность расписания работ равна сумме трудностей каждого дня из d дней.
// Сложность дня — это максимальная сложность работы, выполненной в этот день.
// Вам дан целочисленный массив jobDifficulty и целое число d.
// Сложность i - го задания равна jobDifficulty[i].
// Возвращает минимальную сложность расписания заданий.
// Если вы не можете найти расписание заданий, верните - 1.

// 1335

jobDifficulty = [6, 5, 4, 3, 2, 1], d = 2
// jobDifficulty = [9, 9, 9], d = 4

var minDifficulty = function (jobDifficulty, d) {

    if (jobDifficulty.length < d) return -1;

    const hash = {};

    const dfs = (ahead, numberDays) => {

        if (numberDays === d) {
            return ahead === jobDifficulty.length ? 0 : Infinity
        }

        const key = `${ahead}-${numberDays}`
        if (hash[key] !== undefined) return hash[key];

        const end = jobDifficulty.length - d + numberDays;

        let result = Infinity;
        let max = -Infinity

        for (let i = ahead; i <= end; i++) {
            max = Math.max(max, jobDifficulty[i]);
            result = Math.min(result, max + dfs(i + 1, numberDays + 1));
        }

        return hash[key] = result;
    }
    return dfs(0, 0);

};


console.log(minDifficulty(jobDifficulty, d))

