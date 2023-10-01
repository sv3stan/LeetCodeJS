// Учитывая сетку целочисленной матрицы размера n x n с нулевым индексом, 
// верните количество пар(ri, cj) таких, что строка ri и столбец cj равны.
// Пара строк и столбцов считается равной, если они содержат одинаковые 
// элементы в одном и том же порядке(т.е.одинаковый массив).
// 2352

grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]]
//grid = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2],]
grid = [[3, 1, 2, 2], [1, 4, 4, 4], [2, 4, 2, 2], [2, 5, 2, 2]]

var equalPairs = function (grid) {
    const length = grid.length - 1;
    const hashTable = new Map()
    let count = 0;
    for (let i = 0; i <= length; i++) {
        const key = JSON.stringify(grid[i])
        hashTable.set(key, (hashTable.get(key) || 0) + 1);
    }
    for (let i = 0; i <= length; i++) {
        const column = [];
        for (let j = 0; j <= length; j++) {
            column.push(grid[j][i])
        }
        const key = JSON.stringify(column)
        if (hashTable.has(key)) {
            count += hashTable.get(key);
        }
    }
    return count;
};

console.log(equalPairs(grid))
































// var equalPairs = function (grid) {
//     const length = grid.length - 1;
//     const hashTable = new Map()
//     const hashColumn = new Set()
//     let count = 0;
//     for (let i = 0; i <= length; i++) {
//         const key = JSON.stringify(grid[i])
//         hashTable.set(key, hashTable.has(key ?? 0) + 1);
//         console.log(hashTable)
//     }
//     for (let i = 0; i <= length; i++) {
//         const column = [];
//         for (let j = 0; j <= length; j++) {

//             //console.log(grid[j][i])
//             column.push(grid[j][i])
//             //const key = JSON.stringify(grid[i])

//             // console.log(hashColumn)
//         }
//         console.log(column)
//         const key = JSON.stringify(column)
//         if (hashTable.has(key)) {
//             count += hashTable.get(key);
//             //count++;
//             hashTable.set(key, hashTable.get(key) - 1);
//         }
//         //hashColumn.add(column);
//         //console.log(hashColumn)
//         console.log(hashTable)
//         console.log(count)

//     }

// };