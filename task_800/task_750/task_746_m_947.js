/**
На двумерной плоскости мы размещаем n камней в некоторых целочисленных точках координат. В каждой координатной точке может быть не более одного камня.
Камень можно удалить, если он находится в той же строке или в том же столбце, что и другой камень, который не был удален.
Учитывая массив камней длины n, где камни[i] = [xi, yi] представляют местоположение i-го камня, верните максимально возможное количество камней, которые можно удалить.
 */

let stones = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
    [2, 2],
];

let removeStones = function (stones) {
    const hash = new Set();
    let cnt = 0;

    function dfs(stone) {
        const key = stone.join(',');
        if (hash.has(key)) return;
        hash.add(key);

        for (let nextStone of stones) {
            if (nextStone[0] === stone[0] || nextStone[1] === stone[1]) {
                dfs(nextStone);
            }
        }
    }

    for (let stone of stones) {
        const key = stone.join(',');
        if (!hash.has(key)) {
            cnt++;
            dfs(stone);
        }
    }

    return stones.length - cnt;
};

console.log(removeStones(stones));
