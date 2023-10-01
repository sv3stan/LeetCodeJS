// Имеется инфраструктура n городов с некоторым количеством дорог, соединяющих эти города.
// Каждая дорог[i] = [ai, bi] указывает на то, что между городами ai и bi существует дорога с двусторонним движением.
// Сетевой рейтинг двух разных городов определяется как общее количество дорог, напрямую связанных с каждым городом.
// Если дорога напрямую связана с обоими городами, она учитывается только один раз.
// Максимальный сетевой ранг инфраструктуры равен максимальному сетевому рангу всех пар разных городов.
// Учитывая целое число n и массив дорог, вернуть максимальный сетевой ранг всей инфраструктуры.
// 1615

n = 4;
roads = [[0, 1], [0, 3], [1, 2], [1, 3]];

n = 5;
roads = [[0, 1], [0, 3], [1, 2], [1, 3], [2, 3], [2, 4]];

n = 8;
roads = [[0, 1], [1, 2], [2, 3], [2, 4], [5, 6], [5, 7]];

n = 2;
roads = [[1, 0]]
n = 5
roads = [[4, 6], [5, 2], [3, 5], [7, 5], [7, 6]]

function maximalNetworkRank(n, roads) {
    const rank = Array(n).fill(0);
    const roadMap = {};

    for (const [a, b] of roads) {
        rank[a]++;
        rank[b]++;

        if (!roadMap[a]) roadMap[a] = new Set();
        if (!roadMap[b]) roadMap[b] = new Set();

        roadMap[a].add(b);
        roadMap[b].add(a);
    }

    let maxRank = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let isRank = rank[i] + rank[j];
            if (roadMap[i] && roadMap[i].has(j)) isRank--;

            maxRank = Math.max(isRank, maxRank);
        }
    }

    return maxRank;

};


console.log(maximalNetworkRank(n, roads))




















// function maximalNetworkRank(n, roads) {
//     const lengths = roads.length;
//     const rank = Array.from({ length: n }).fill(0);
//     const matrix = Array.from({ length: n }, () => Array(n).fill(false));

//     let maxRank = 0;

//     for (let i = 0; i < lengths; i++) {

//         const cityA = roads[i][0];
//         const cityB = roads[i][1];
//         matrix[cityA][cityB] = true;
//         rank[cityA] += 1;
//         rank[cityB] += 1;

//     }
//     console.log(rank)
//     console.log(matrix)

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             let isRank = 0;
//             console.log(matrix[i][j] + ' - matrix[i][j]] -' + rank[i] + ' - roads[i] - ' + rank[j] + ' - roads[j]')
//             if (matrix[i][j]) {
//                 isRank = rank[i] + rank[j] - 1;
//             } else {
//                 isRank = rank[i] + rank[j];
//             }

//             maxRank = Math.max(isRank, maxRank);
//             console.log(maxRank)
//         }
//     }


//     // for (let i = 0; i < lengths; i++) {
//     //     let isRank = 0;
//     //     console.log(roads[i][0] + ' - roads[i][0]] -' + roads[i][1] + ' - roads[i][1]')
//     //     if (matrix[roads[i][0]][roads[i][1]]) {
//     //         isRank = rank[roads[i][0]] + rank[roads[i][1]] - 1;
//     //     } else {
//     //         isRank = rank[roads[i][0]] + rank[roads[i][1]];
//     //     }

//     //     maxRank = Math.max(isRank, maxRank);
//     //     console.log(maxRank)
//     // }



//     console.log(rank);
//     return maxRank

// };