// Дана матричная сетка n * n, состоящая только из 0 и 1. 
// Мы хотим представить сетку в виде квадратного дерева.
// Возвращает корень сетки, представляющей Quad - Tree.
// 427


function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
};

grid = [[1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0]]


var construct = function (grid) {
    const n = grid.length;
    function subgrid(grid, x, y, size) {
        const sub = [];
        for (let i = x; i < x + size; i++) {
            const row = [];
            for (let j = y; j < y + size; j++) {
                row.push(grid[i][j]);
            }
            sub.push(row);
        }
        return sub;
    }
    // Проверка, если матрица состоит только из 0 или 1
    let isLeaf = true;
    let val = grid[0][0];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== val) {
                isLeaf = false;
                break;
            }
        }
    }

    if (isLeaf) {
        return new Node(val, true, null, null, null, null);
    } else {
        const half = n / 2;
        const topLeft = construct(subgrid(grid, 0, 0, half));
        const topRight = construct(subgrid(grid, 0, half, half));
        const bottomLeft = construct(subgrid(grid, half, 0, half));
        const bottomRight = construct(subgrid(grid, half, half, half));
        return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
    }

};

console.log(construct(grid))