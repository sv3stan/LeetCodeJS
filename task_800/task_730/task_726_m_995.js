/**
Сетка n x n состоит из квадратов 1 x 1, где каждый квадрат 1 x 1 состоит из символов '/', '\' или пустого места ' '. Эти символы делят квадрат на смежные области.
Учитывая, что сетка представлена в виде массива строк, верните количество областей.
Обратите внимание, что символы обратной косой черты экранируются, поэтому символ '\' будет представлен как '\\\'.
 */
class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = Array(size).fill(1);
        this.count = size;
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
            this.count--;
        }
    }

    getCount() {
        return this.count;
    }
}
let grid = ['/\\', '\\/'];
let regionsBySlashes = function (grid) {
    const n = grid.length;
    const uf = new UnionFind(4 * n * n);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const root = 4 * (i * n + j);
            const val = grid[i][j];

            if (val === '/') {
                uf.union(root + 0, root + 3);
                uf.union(root + 1, root + 2);
            } else if (val === '\\') {
                uf.union(root + 0, root + 1);
                uf.union(root + 2, root + 3);
            } else {
                uf.union(root + 0, root + 1);
                uf.union(root + 1, root + 2);
                uf.union(root + 2, root + 3);
            }

            if (i > 0) {
                uf.union(root + 0, root - 4 * n + 2);
            }
            if (j > 0) {
                uf.union(root + 3, root - 4 + 1);
            }
        }
    }

    return uf.getCount();
};
console.log(regionsBySlashes(grid));
