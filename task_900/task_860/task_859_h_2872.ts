/**
Существует неориентированное дерево с n узлами, помеченными от 0 до n - 1. Вам задано целое число n и двумерный целочисленный массив ребер длины n - 1, где ребра [i] = [ai, bi] указывают на то, что существует ребро между узлами ai и bi в дереве. Вам также дан целочисленный массив значений с нулевым индексом длиной n, где значения[i] — это значение, связанное с i-м узлом, и целое число k. Допустимое разбиение дерева получается путем удаления любого набора ребер, возможно пустых, из дерева так, что все полученные компоненты имеют значения, кратные k, где значение связного компонента представляет собой сумму значений его узлы. Возвращает максимальное количество компонентов в любом допустимом разбиении.
 */

function maxKDivisibleComponents(
    n: number,
    edges: number[][],
    values: number[],
    k: number,
): number {
    const tree: Map<number, number[]> = new Map();

    for (const [a, b] of edges) {
        if (!tree.has(a)) tree.set(a, []);
        if (!tree.has(b)) tree.set(b, []);
        tree.get(a)!.push(b);
        tree.get(b)!.push(a);
    }

    let result = 0;

    function dfs(node: number, parent: number): number {
        let subtreeSum = values[node];

        for (const neighbor of tree.get(node) || []) {
            if (neighbor === parent) continue;
            const childSum = dfs(neighbor, node);

            if (childSum % k === 0) {
                result++;
            } else {
                subtreeSum += childSum;
            }
        }

        return subtreeSum;
    }

    const totalSum = dfs(0, -1);

    if (totalSum % k === 0) {
        result++;
    }

    return result;
}
