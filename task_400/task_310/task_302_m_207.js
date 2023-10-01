// Всего вам необходимо пройти numCourses курсов, помеченных от 0 до numCourses - 1.
// Вам предоставляется массив предварительных требований,
//где prerequisites[i] = [ai, bi] указывает,
// что вы должны сначала пройти курс bi, если хотите пройти конечно ai.
// Например, пара [0, 1] указывает, что для прохождения курса 0 необходимо сначала пройти курс 1.
// Верните true, если вы можете закончить все курсы. В противном случае верните false.
// 207


numCourses = 2, prerequisites = [[1, 0]]
numCourses = 5, prerequisites = [[1, 4], [2, 4], [3, 1], [3, 2]]

var canFinish = function (numCourses, prerequisites) {

    const arr = new Array(numCourses).fill(0).map(() => []);
    for (const prerequisite of prerequisites) {
        arr[prerequisite[1]].push(prerequisite[0]);
    }


    function dfs(node, arr, visited, stack) {
        // Если вершина уже находится в стеке, у нас есть цикл.
        if (stack[node]) {
            return true;
        }
        if (visited[node]) {
            return false;
        }
        // Помечаем текущую вершину как посещенную и часть текущего стека рекурсии.
        visited[node] = true;
        stack[node] = true;
        for (const item of arr[node]) {
            if (dfs(item, arr, visited, stack)) {
                return true;
            }
        }
        // Убираем вершину из стека.
        stack[node] = false;
        return false;
    }




    const visited = new Array(numCourses).fill(false);
    const stack = new Array(numCourses).fill(false);
    for (let i = 0; i < numCourses; i++) {
        if (dfs(i, arr, visited, stack)) {
            return false;
        }
    }
    return true;



};


console.log(canFinish(numCourses, prerequisites))