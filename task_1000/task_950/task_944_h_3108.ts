/**
Существует неопределенный взвешенный график с n вершин, помеченные от 0 до N - 1. Вам дают целое число N и края массива, где края [i] = [UI, VI, WI] указывают на то, что между пользовательским интерфейсом и VI есть преимущество с весом WI. Прогулка на графике - это последовательность вершин и краев. Прогулка начинается и заканчивается вершиной, и каждый край соединяет вершину, которая идет перед ней, и вершину, которая идет после нее. Важно отметить, что прогулка может посетить один и тот же край или вершина более одного раза. Стоимость прогулки, начиная с узла U и заканчиваемой на узле V, определяется как бить и веса краев, проходящих во время прогулки. Другими словами, если последовательность весов края встречается во время прогулки, W0, W1, W2, ..., WK, то стоимость рассчитывается как W0 & W1 & W2 & ... & WK, где и обозначает бить и оператор. Вам также дают 2D -массив, где запрос [i] = [si, ti]. Для каждого запроса вам необходимо найти минимальную стоимость прогулки, начиная с Vertex Si и заканчивая Vertex Ti. Если нет такой прогулки, ответ составляет -1. Верните ответ массива, где ответ [i] обозначает минимальную стоимость прогулки для запроса i.
 */

class DSU {
    parent: number[];
    depth: number[];
    constructor(n: number) {
        this.parent = new Array(n).fill(-1);
        this.depth = new Array(n).fill(0);
    }
    find(node: number): number {
        if (this.parent[node] === -1) return node;
        return (this.parent[node] = this.find(this.parent[node]));
    }
    union(node1: number, node2: number): void {
        let root1 = this.find(node1);
        let root2 = this.find(node2);
        if (root1 === root2) return;
        if (this.depth[root1] < this.depth[root2])
            [root1, root2] = [root2, root1];
        this.parent[root2] = root1;
        if (this.depth[root1] === this.depth[root2]) this.depth[root1]++;
    }
}

function minimumCost(
    n: number,
    edges: number[][],
    queries: number[][],
): number[] {
    const dsu = new DSU(n);
    const componentCost = new Array<number>(n).fill(~0);
    for (const [u, v] of edges) {
        dsu.union(u, v);
    }
    for (const [u, v, w] of edges) {
        const root = dsu.find(u);
        componentCost[root] &= w;
    }
    return queries.map(([s, t]) =>
        dsu.find(s) === dsu.find(t) ? componentCost[dsu.find(s)] : -1,
    );
}
