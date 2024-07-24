/*
Вам дан корень двоичного дерева и целое расстояние. Пара двух разных конечных узлов бинарного дерева называется хорошей, если длина кратчайшего пути между ними меньше или равна расстоянию.
Возвращает количество хороших пар конечных узлов в дереве.
*/

let countPairs = function (root, distance) {
    const pairs = [];

    const dfs = node => {
        if (!node) return [];
        if (!node.left && !node.right) return [[node.val, 1]];

        const left = dfs(node.left);
        const right = dfs(node.right);

        for (const [x, dx] of left) {
            for (const [y, dy] of right) {
                if (dx + dy <= distance) {
                    pairs.push([x, y]);
                }
            }
        }

        const res = [];
        for (const arr of [left, right]) {
            for (const x of arr) {
                if (++x[1] <= distance) res.push(x);
            }
        }

        return res;
    };

    dfs(root);

    return pairs.length;
};
