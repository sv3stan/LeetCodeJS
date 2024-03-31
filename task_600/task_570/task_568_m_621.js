// Вам дан массив задач ЦП, каждая из которых обозначена буквами от A до Z, 
// и время охлаждения n.Каждый цикл или интервал позволяет выполнить одну задачу.
// Задачи можно выполнять в любом порядке, но есть ограничение: 
// одинаковые задачи должны быть разделены хотя бы n интервалами из - за времени остывания.
// ​Возвратите минимальное количество интервалов, необходимое для выполнения всех задач.

// 621

tasks = ["A", "A", "A", "B", "B", "B"], n = 2

var leastInterval = function (tasks, n) {

    // Counter array to store the frequency of each task
    let hash = Array.from({ length: 26 }).fill(0);
    let max = 0;
    let maxCount = 0;

    // Traverse through tasks to calculate task frequencies
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        hash[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        if (max == hash[task.charCodeAt(0) - 'A'.charCodeAt(0)]) {
            maxCount++;
        } else if (max < hash[task.charCodeAt(0) - 'A'.charCodeAt(0)]) {
            max = hash[task.charCodeAt(0) - 'A'.charCodeAt(0)];
            maxCount = 1;
        }
    }
    console.log(hash)
    // Calculate idle slots, available tasks, and idles needed
    let partCount = max - 1;
    let partLength = n - (maxCount - 1);
    let emptySlots = partCount * partLength;
    let availableTasks = tasks.length - max * maxCount;
    let idles = Math.max(0, emptySlots - availableTasks);

    // Return the total time required
    return tasks.length + idles;

};

console.log(leastInterval(tasks, n))
