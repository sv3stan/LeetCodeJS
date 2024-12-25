/**
Существуют два неориентированных дерева с n и m узлами, пронумерованными от 0 до n-1 и от 0 до m-1 соответственно. Вам даны два двумерных целочисленных массива ребер1 и ребер2 длин n - 1 и m - 1 соответственно, где ребра1[i] = [ai, bi] указывают, что существует ребро между узлами ai и bi в первом дереве и ребра2. [i] = [ui, vi] указывает, что между узлами ui и vi во втором дереве есть ребро. Вы должны соединить один узел первого дерева с другим узлом второго дерева ребром. Возвращает минимально возможный диаметр полученного дерева. Диаметр дерева — это длина самого длинного пути между любыми двумя узлами дерева.
 */

type Edge = [number, number];

function calculateDiameterAndRadius(
    edges: Edge[],
    n: number,
): { diameter: number; radius: number } {
    const adj: number[][] = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const bfs = (start: number): [number, number[]] => {
        const dist = Array(n).fill(-1);
        dist[start] = 0;
        const queue: number[] = [start];
        let farthestNode = start;

        while (queue.length > 0) {
            const node = queue.shift()!;
            for (const neighbor of adj[node]) {
                if (dist[neighbor] === -1) {
                    dist[neighbor] = dist[node] + 1;
                    queue.push(neighbor);
                    if (dist[neighbor] > dist[farthestNode]) {
                        farthestNode = neighbor;
                    }
                }
            }
        }

        return [farthestNode, dist];
    };

    // First BFS to find one endpoint of the diameter
    const [farthestNode] = bfs(0);

    // Second BFS to find the actual diameter
    const [otherEnd, distances] = bfs(farthestNode);
    const diameter = Math.max(...distances);

    // Calculate the radius (half of the diameter, rounded up)
    const radius = Math.ceil(diameter / 2);

    return { diameter, radius };
}

function minimumDiameterAfterMerge(
    edges1: number[][],
    edges2: number[][],
): number {
    const n1 = edges1.length + 1;
    const n2 = edges2.length + 1;

    const { diameter: d1, radius: r1 } = calculateDiameterAndRadius(
        edges1.map(edge => edge as Edge),
        n1,
    );
    const { diameter: d2, radius: r2 } = calculateDiameterAndRadius(
        edges2.map(edge => edge as Edge),
        n2,
    );

    // Calculate the minimum possible diameter
    return Math.max(d1, d2, r1 + r2 + 1);
}
