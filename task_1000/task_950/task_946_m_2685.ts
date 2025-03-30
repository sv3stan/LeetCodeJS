/**
Вам дается целое число n. Существует неправомерный график с n вершинами, пронумерованный от 0 до N - 1. Вам дают 2 -й целочисленные ребра, где края [i] = [ai, bi] обозначает, что существует неправомерное преимущество, соединяющее вершины AI и Bi. Вернуть количество полных подключенных компонентов графика. Подключенный компонент - это подграф графика, в котором существует путь между любыми двумя вершинами, и нет вершины подграфа не имеет преимущества с вершиной за пределами подграфа. Считается, что подключенный компонент завершен, если между каждой парой его вершин существует край.
 */

function countCompleteComponents(n: number, edges: number[][]): number {
    const graph: number[][] = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const visited: boolean[] = Array(n).fill(false);
    function dfs(node: number, component: number[]): void {
        visited[node] = true;
        component.push(node);
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor, component);
            }
        }
    }

    let completeComponentCount = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const component: number[] = [];
            dfs(i, component);
            const k = component.length; // Количество вершин в компоненте
            const edgeCount =
                component.reduce(
                    (count, node) => count + graph[node].length,
                    0,
                ) / 2; // Количество рёбер

            if (edgeCount === (k * (k - 1)) / 2) {
                completeComponentCount++;
            }
        }
    }

    return completeComponentCount;
}
