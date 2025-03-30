/**
Вам дают 2D целочисленную сетку размера M x N и целое число x. В одной операции вы можете добавить x в или вычесть x из любого элемента в сетке. Университетская сетка-это сетка, где все его элементы равны. Вернуть минимальное количество операций, чтобы сделать сетку универ. Если это невозможно, вернуть -1.
 */

function minOperations(grid: number[][], x: number): number {
    const flatGrid = grid.flat();
    flatGrid.sort((a, b) => a - b);
    for (let i = 1; i < flatGrid.length; i++) {
        if ((flatGrid[i] - flatGrid[0]) % x !== 0) {
            return -1;
        }
    }
    const median = flatGrid[Math.floor(flatGrid.length / 2)];
    let operations = 0;
    for (const num of flatGrid) {
        operations += Math.abs(num - median) / x;
    }
    return operations;
}
