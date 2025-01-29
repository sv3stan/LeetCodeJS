/**
Всего есть курсы Numcourses, которые вы должны пройти, обозначенные от 0 до Numcourses - 1. Вам дают массивные предпосылки, где предпосылки [i] = [ai, bi] указывают на то, что вы должны сначала пройти курс, если вы хотите взять Курс би. Например, пара [0, 1] указывает, что вам нужно пройти курс 0, прежде чем вы сможете пройти курс 1. Предварительные условия также могут быть косвенными. Если курс A является обязательным условием, конечно, B, а курс B является предпосылкой, конечно, C, то, конечно, является обязательным условием c. Вам также дают массивные запросы, где запросы [j] = [uj, vj]. Для JTH запрашивается, вы должны ответить, является ли курс UJ обязательным условием, конечно, VJ или нет. Верните логический массив, где ответ [J] является ответом на JTH запрос.
 */

function checkIfPrerequisite(
    numCourses: number,
    prerequisites: number[][],
    queries: number[][],
): boolean[] {
    const reachable = Array.from({ length: numCourses }, () =>
        Array(numCourses).fill(false),
    );

    for (const [a, b] of prerequisites) {
        reachable[a][b] = true;
    }

    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                reachable[i][j] ||= reachable[i][k] && reachable[k][j];
            }
        }
    }

    return queries.map(([u, v]) => reachable[u][v]);
}
