// Существует ориентированный взвешенный граф, состоящий из n узлов, 
// пронумерованных от 0 до n - 1. Ребра графа изначально представлены 
// заданными ребрами массива, где ребра[i] = [fromi, toi, EdgeCosti] 
// означают, что существует край от fromi до toi со стоимостью EdgeCosti.
// Реализуйте класс Graph:
// Graph(int n, int[][] ребра) инициализирует объект с n узлами и заданными ребрами.
// addEdge(int[] Edge) добавляет ребро в список ребер, 
// где Edge = [from, to, EdgeCost].
// Гарантируется, что перед добавлением этого узла между двумя узлами нет ребра.
// int shortestPath(int node1, int node2) возвращает минимальную стоимость 
// пути от node1 до node2.Если пути не существует, верните - 1. 
// Стоимость пути — это сумма стоимостей ребер пути.
// 2642

var Graph = function (n, edges) {
    this.n = n;
    this.range = Array.from({ length: n }, () => Array(n).fill(Number.MAX_SAFE_INTEGER));

    for (let i = 0; i < n; i++) this.range[i][i] = 0;

    for (const edge of edges) this.range[edge[0]][edge[1]] = edge[2];


    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                this.range[i][j] = Math.min(
                    this.range[i][j],
                    this.range[i][k] + this.range[k][j]
                );
            }
        }
    }
};

Graph.prototype.addEdge = function (edge) {
    if (this.range[edge[0]][edge[1]] <= edge[2]) return;
    this.range[edge[0]][edge[1]] = edge[2];

    for (let i = 0; i < this.n; i++) {
        for (let j = 0; j < this.n; j++) {
            this.range[i][j] = Math.min(
                this.range[i][j],
                this.range[i][edge[0]] + edge[2] + this.range[edge[1]][j]
            );
        }
    }
};
Graph.prototype.shortestPath = function (node1, node2) {
    if (this.range[node1][node2] === Number.MAX_SAFE_INTEGER) return -1;
    return this.range[node1][node2];
};