/*
Вам дан корень двоичного дерева и целое расстояние. Пара двух разных конечных узлов бинарного дерева называется хорошей, если длина кратчайшего пути между ними меньше или равна расстоянию.
Возвращает количество хороших пар конечных узлов в дереве.
*/
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(3);
const node3 = new TreeNode(4);
const node4 = new TreeNode(5);
const node5 = new TreeNode(6);
const node6 = new TreeNode(7);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

let distance = 3;
let countPairs = function (root, distance) {
    const pairs = [];

    function dfs(node) {
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

        const result = [];
        for (const item of [left, right]) {
            for (const el of item) {
                if (++el[1] <= distance) result.push(el);
            }
        }

        return result;
    }

    dfs(root);

    return pairs.length;
};

console.log(countPairs(root, distance));
