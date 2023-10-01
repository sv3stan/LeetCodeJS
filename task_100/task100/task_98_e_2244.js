// Вам дан целочисленный массив задач с индексом 0, где tasks[i] представляет уровень сложности задачи.
// В каждом раунде можно выполнить либо 2, либо 3 задания одинакового уровня сложности.
// Возвращает минимальное количество раундов, необходимое для выполнения всех задач, или - 1, если невозможно выполнить все задачи.

//2244

let tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];
//tasks = [2, 3, 3]

function minimumRounds(tasks) {
    const taskQuantity = new Map();
    for (const task of tasks) {
        if (taskQuantity.has(task)) {
            taskQuantity.set(task, taskQuantity.get(task) + 1);
        } else {
            taskQuantity.set(task, 1);
        }
    }

    let roundCount = 0;
    for (const quantity of taskQuantity.values()) {
        if (quantity < 2) return -1
        const remainder = quantity % 3;
        if ((remainder) === 0) {
            roundCount += quantity / 3;
        } else {
            if ((quantity % 3) === 1) {
                roundCount += (quantity - 4) / 3 + 2;
            } else {
                roundCount += (quantity - 2) / 3 + 1;
            }
        }
    }
    return roundCount;
};

console.log(minimumRounds(tasks));