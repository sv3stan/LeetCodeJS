// Всего вам необходимо пройти numCourses курсов, помеченных от 0 до numCourses - 1. 
// Вам предоставляется массив предварительных требований, где prequires[i] = [ai, bi] 
// указывает, что вы должны сначала пройти курс bi, если хотите пройти конечно ай.
// Например, пара[0, 1] указывает, что для прохождения курса 0 необходимо сначала пройти курс 1.
// Верните порядок курсов, которые вам необходимо пройти, чтобы закончить все курсы.
// Если правильных ответов много, верните любой из них.Если пройти все курсы невозможно, 
// верните пустой массив.
// 210


numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
numCourses = 2, prerequisites = []

var findOrder = function (numCourses, prerequisites) {
    graph = new Map();
    visit = new Array(numCourses).fill(0);
    stack = new Array();

    for (let [x, y] of prerequisites) {
        if (graph.has(x)) {
            let values = graph.get(x);
            values.push(y);
            graph.set(x, values)
        } else {
            graph.set(x, [y])
        }
    }

    for (let i = 0; i < numCourses; i++) {
        if (visit[i] == 0 && dfs(i)) return [];
    }

    return stack;
}


function dfs(index) {

    visit[index] = 1;
    //let edges = graph.get(index);

    if (graph.get(index)) {
        for (let e of graph.get(index)) {
            if (visit[e] == 1) return true;
            if (visit[e] == 0 && dfs(e)) return true
        }
    }

    visit[index] = 2;
    stack.push(index)
    return false

};


console.log(findOrder(numCourses, prerequisites))