/**
Вам дается положительное целое число N, представляющее количество узлов в неориентированном графике. Узлы помечены от 1 до N. Вам также дают 2D -ребра массива, где края [i] = [ai, bi] указывают, что существует двунаправленное преимущество между узлами AI и Bi. Обратите внимание, что заданный график может быть отключен. Разделите узлы графика на M-группы (1-индексированные), так что: Каждый узел на графике принадлежит ровно одной группе. Для каждой пары узлов на графике, которые соединены краем [AI, BI], если AI принадлежит группе с индексом X, а BI принадлежит группе с индексом y, то | y - x | = 1. Верните максимальное количество групп (то есть максимум m), в которые вы можете разделить узлы. Возврат -1 Если невозможно сгруппировать узлы с данными условиями.
 */

function magnificentSets(n: number, edges: number[][]): number {
    const adjacencyList: Set<number>[] = Array.from(
        { length: n + 1 },
        () => new Set<number>(),
    );

    for (const [nodeA, nodeB] of edges) {
        adjacencyList[nodeA].add(nodeB);
        adjacencyList[nodeB].add(nodeA);
    }

    const componentDepths: Map<number, number> = new Map();

    for (let startNode = 1; startNode <= n; startNode++) {
        let queue: number[] = [startNode];
        const depthLevels: number[] = Array(n + 1).fill(0);
        depthLevels[startNode] = 1;
        let maxDepth: number = 1;
        let minNodeInComponent: number = n;

        while (queue.length > 0) {
            let nextQueue: number[] = [];

            for (let currentNode of queue) {
                minNodeInComponent = Math.min(minNodeInComponent, currentNode);
                for (const neighbor of adjacencyList[currentNode]) {
                    if (!depthLevels[neighbor]) {
                        depthLevels[neighbor] = depthLevels[currentNode] + 1;
                        maxDepth = Math.max(maxDepth, depthLevels[neighbor]);
                        nextQueue.push(neighbor);
                    }

                    if (
                        Math.abs(
                            depthLevels[currentNode] - depthLevels[neighbor],
                        ) !== 1
                    ) {
                        return -1;
                    }
                }
            }
            queue = nextQueue;
        }

        componentDepths.set(
            minNodeInComponent,
            Math.max(maxDepth, componentDepths.get(minNodeInComponent) || 0),
        );
    }

    let totalMaxDepth: number = 0;
    componentDepths.forEach(depth => {
        totalMaxDepth += depth;
    });

    return totalMaxDepth;
}
