// Предположим, LeetCode скоро начнет IPO.Чтобы продать свои акции
// венчурному капиталу по хорошей цене, LeetCode хотела бы поработать
// над некоторыми проектами по увеличению своего капитала перед IPO.
// Поскольку у компании ограниченные ресурсы, она может завершить не
// более k отдельных проектов до IPO.Помогите LeetCode разработать
// лучший способ максимизировать общий капитал после завершения
// не более k различных проектов.
// Вам даны n проектов, где i - й проект имеет чистую profits[i]
//  и для его запуска необходим минимальный capital[i].
// Изначально у вас есть капитал.Когда вы завершите проект, 
// вы получите чистую прибыль, которая будет добавлена ​​к вашему общему капиталу.
// Выберите список не более чем k различных проектов из заданных проектов, 
// чтобы максимизировать свой окончательный капитал, 
// и верните окончательный максимальный капитал.
// Ответ гарантированно умещается в 32 - битное целое число со знаком.
// 502

k = 2, w = 0, profits = [1, 2, 3], capital = [0, 1, 1]

var findMaximizedCapital = function (k, w, profits, capital) {
    /* Sort the projects by capital cost. */
    let projects = [];
    for (let i = 0; i < profits.length; i++)
        projects.push([profits[i], capital[i]]);
    projects.sort((a, b) => a[1] - b[1]);

    /* Run the projects. */
    let priorityQueue = new MaxPriorityQueue(), pp = 0;
    while (k > 0) {
        /* Add all the projects fundable with the current operating capital. */
        while (pp < projects.length && projects[pp][1] <= w) {
            priorityQueue.enqueue(pp, projects[pp][0]);
            pp++;
        }

        if (priorityQueue.size() === 0)
            break;

        /* Choose the most profitable available project. */
        let el = priorityQueue.dequeue();
        w += el.priority;
        k--;
    }

    return w;
};


console.log(findMaximizedCapital(k, w, profits, capital))