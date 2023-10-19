// Вам дано целое число n, которое указывает на то, что существует n курсов,
// помеченных от 1 до n.Вам также предоставляется двухмерный целочисленный
// массив отношений, где отношения[j] = [prevCoursej, nextCoursej] обозначают,
// что курс prevCoursej должен быть завершен до курса nextCoursej(предварительные отношения).
// Кроме того, вам дан целочисленный массив time с индексом 0, где time[i] обозначает,
// сколько месяцев потребуется для завершения(i + 1) - го курса.
// Вы должны найти минимальное количество месяцев, необходимое для завершения всех курсов,
// следуя этим правилам:
// Вы можете начать проходить курс в любое время, если выполнены предварительные условия.
// Одновременно можно проходить любое количество курсов.
// Возвращает минимальное количество месяцев, необходимое для завершения всех курсов.
// Примечание.Тестовые примеры генерируются таким образом, чтобы можно было пройти любой
// курс(т.е.граф представляет собой ориентированный ациклический граф).
// 2050

n = 3, relations = [[1, 3], [2, 3]], time = [3, 2, 5]
n = 5, relations = [[1, 5], [2, 5], [3, 5], [3, 4], [4, 5]], time = [1, 2, 3, 4, 5]

// const n = 4;
// const relations = [[2, 1], [3, 2], [4, 3]];
// const time = [2, 2, 1, 1];


var minimumTime = function (n, relations, time) {
    // const graph = new Array(n).fill(null).map(() => []);
    // const inDegrees = new Array(n).fill(0);

    // // Создаем граф и считаем входящие степени для каждого курса
    // for (const [prev, next] of relations) {
    //     graph[prev - 1].push(next - 1);
    //     inDegrees[next - 1]++;
    // }
    // console.log(graph)
    // const queue = [];

    // // Находим стартовые курсы, у которых входящие степени равны 0
    // for (let i = 0; i < n; i++) {
    //     if (inDegrees[i] === 0) {
    //         queue.push(i);
    //     }
    // }
    // console.log()
    // let months = 0;

    // while (queue.length > 0) {
    //     const coursesThisMonth = queue.length;

    //     for (let i = 0; i < coursesThisMonth; i++) {
    //         const currentCourse = queue.shift();

    //         for (const nextCourse of graph[currentCourse]) {
    //             // Уменьшаем входящую степень для следующего курса
    //             inDegrees[nextCourse]--;

    //             // Если у следующего курса больше нет входящих степеней, добавляем его в очередь
    //             if (inDegrees[nextCourse] === 0) {
    //                 queue.push(nextCourse);
    //             }

    //             // Обновляем время, необходимое для завершения следующего курса
    //             time[nextCourse] = Math.max(time[nextCourse], time[currentCourse] + time[nextCourse]);
    //         }
    //     }

    //     months++;
    // }
    // console.log(time)
    // // Найдем максимальное время, необходимое для завершения любого курса
    // return Math.max(...time);

    const maxDuration = Array.from({ length: n + 1 }).fill(-1);

    const inDegree = {};

    for (let [prev, next] of relations) (inDegree[next]) ? inDegree[next].push(prev) : inDegree[next] = [prev];

    function calculateAbsMax(node) {
        if (maxDuration[node] > -1) return maxDuration[node];
        let temp = 0;
        if (inDegree[node] == undefined) temp = time[node - 1];
        else {
            for (let elm of inDegree[node]) temp = Math.max(temp, calculateAbsMax(elm));

            temp += time[node - 1];
        }
        maxDuration[node] = temp;
        return temp;
    }

    let answer = 0;
    for (let i = 1; i <= n; i++) answer = Math.max(answer, calculateAbsMax(i));

    return answer;

};


console.log(minimumTime(n, relations, time))