/*
В этой проблеме дерево - это неистовый график, который подключен и не имеет циклов. Вам дают график, который начинался как дерево с N -узлами, помеченными от 1 до N, с добавленным дополнительным краем. Дополнительный край имеет две разные вершины, выбранные от 1 до N, и не был краем, который уже существовал. График представлен как массивовые края длины n, где края [i] = [ai, bi] указывают на то, что между узлами AI и BI есть крайний край. Верните край, который можно удалить так, чтобы результирующий график представлял собой дерево n узлов. Если есть несколько ответов, верните ответ, который происходит последним на входе.
*/

class DSU {
    parent: number[];
    rank: number[];

    constructor(size: number) {
        this.parent = Array.from({ length: size + 1 }, (_, i) => i);
        this.rank = Array(size + 1).fill(1);
    }

    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x: number, y: number): boolean {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX === rootY) return false;

        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }

        return true;
    }
}

function findRedundantConnection(edges: number[][]): number[] {
    let dsu = new DSU(edges.length);

    for (let [u, v] of edges) {
        if (!dsu.union(u, v)) {
            return [u, v];
        }
    }

    return [];
}
