// Дан взвешенный неориентированный связный граф с n вершинами, пронумерованными от 0 до n - 1, и массив ребер, 
// где ребра[i] = [ai, bi, weighti] представляют двунаправленное и взвешенное ребро между узлами ai и bi.
// Минимальное остовное дерево(MST) — это подмножество ребер графа, 
// соединяющее все вершины без циклов и с минимально возможным общим весом ребер.
// Найдите все критические и псевдокритические ребра в минимальном остовном дереве(MST) данного графа.
// Ребро MST, удаление которого из графа приведет к увеличению веса MST, называется критическим ребром.
// С другой стороны, псевдокритическим преимуществом является то, что может появиться в некоторых MST, но не во всех.
// Обратите внимание, что вы можете возвращать индексы ребер в любом порядке.
// 1489
n = 5;
edges = [[0, 1, 1], [1, 2, 1], [2, 3, 2], [0, 3, 2], [0, 4, 3], [3, 4, 3], [1, 4, 6]];
n = 4;
edges = [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 3, 1]]




class UnionFind {
    constructor(n) {
        this.parents = [];
        for (let i = 0; i < n; i++) {
            this.parents.push(i);
        }
        this.count = n;
    }

    find(index) {
        const parent = this.parents[index];
        if (parent === index) return index;

        let root = this.find(parent);
        this.parents[index] = root;
        return root;
    }

    union(index1, index2) {
        let p1 = this.find(index1);
        let p2 = this.find(index2);

        if (p1 !== p2) {
            this.count--;
            this.parents[p1] = p2;
            return true;
        }

        return false;
    }
}

var findCriticalAndPseudoCriticalEdges = function (n, edges) {
    let criticalEdges = [];
    let psuedoCriticalEdges = [];
    let hash = new Map();

    edges.forEach((edge, i) => hash.set(edge, i));

    edges.sort((a, b) => a[2] - b[2]);

    const buildMST = (pick, skip) => {
        let unionFind = new UnionFind(n), cost = 0;

        if (pick !== null) {
            unionFind.union(pick[0], pick[1]);
            cost += pick[2];
        }

        for (let edge of edges) {
            if (edge !== skip && unionFind.union(edge[0], edge[1])) {
                cost += edge[2];
            }
        }

        return unionFind.count === 1 ? cost : Number.MAX_SAFE_INTEGER;
    };

    const minCost = buildMST(null, null);

    for (let edge of edges) {
        const index = hash.get(edge);
        const costWithout = buildMST(null, edge);
        if (costWithout > minCost) {
            criticalEdges.push(index);
        } else {
            const costWith = buildMST(edge, null);
            if (costWith === minCost) psuedoCriticalEdges.push(index);
        }
    }

    return [criticalEdges, psuedoCriticalEdges];
};
















// class UnionFind {
//     constructor(n) {
//         this.parents = [];
//         for (let i = 0; i < n; i++) {
//             this.parents.push(i);
//         }
//         this.count = n;
//     }

//     find(index) {
//         const parent = this.parents[index];
//         if (parent === index) return index;

//         let root = this.find(parent);
//         this.parents[index] = root;
//         return root;
//     }

//     union(index1, index2) {
//         let p1 = this.find(index1);
//         let p2 = this.find(index2);

//         if (p1 !== p2) {
//             this.count--;
//             this.parents[p1] = p2;
//             return true;
//         }

//         return false;
//     }
// }

// function findCriticalAndPseudoCriticalEdges(n, edges) {
//     let criticalEdges = [];
//     let psuedoCriticalEdges = [];
//     const hash = new Map();

//     edges.forEach((edge, i) => hash.set(edge, i));

//     edges.sort((a, b) => a[2] - b[2]);

//     const buildMST = (pick, skip) => {
//         let unionFind = new UnionFind(n), cost = 0;

//         if (pick !== null) {
//             unionFind.union(pick[0], pick[1]);
//             cost += pick[2];
//         }

//         for (let edge of edges) {
//             if (edge !== skip && unionFind.union([0], edge[1])) {
//                 cost += edge[2];
//             }
//         }

//         return unionFind.count === 1 ? cost : Number.MAX_SAFE_INTEGER;
//     };

//     const minCost = buildMST(null, null);

//     for (let edge of edges) {
//         const index = hash.get(edge);
//         const costWithout = buildMST(null, edge);
//         if (costWithout > minCost) {
//             criticalEdges.push(index);
//         } else {
//             const costWith = buildMST(edge, null);
//             if (costWith === minCost) psuedoCriticalEdges.push(index);
//         }
//     }

//     return [criticalEdges, psuedoCriticalEdges];
// };

console.log(findCriticalAndPseudoCriticalEdges(n, edges))