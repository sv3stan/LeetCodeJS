// Дано двоичное дерево, в котором значениями узлов являются цифры от 1 до 9.
// Путь в двоичном дереве называется псевдопалиндромным,
// если хотя бы одна перестановка значений узлов в пути является палиндромом.
// Возвращает количество псевдопалиндромных путей, идущих от корневого узла к листовым узлам.

// 1457

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
const util = require('util');
util.inspect.defaultOptions.depth = null;
const root = new TreeNode(2);
const node1 = new TreeNode(3);
const node2 = new TreeNode(1);
const node3 = new TreeNode(3);
const node4 = new TreeNode(1);
const node5 = new TreeNode(null);
const node6 = new TreeNode(1);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

var pseudoPalindromicPaths = function (root) {
    var countPaths = function (node, path) {
        if (!node) {
            return 0;
        }

        path ^= 1 << node.val;

        if (!node.left && !node.right) {
            return (path & (path - 1)) == 0 ? 1 : 0;
        }

        return countPaths(node.left, path) + countPaths(node.right, path);
    };
    return countPaths(root, 0);
};

console.log(pseudoPalindromicPaths(root));
