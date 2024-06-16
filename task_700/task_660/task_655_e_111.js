/*
Учитывая двоичное дерево, найдите его минимальную глубину.
Минимальная глубина — это количество узлов на кратчайшем пути от корневого узла до ближайшего листового узла.
Примечание. Лист — это узел, не имеющий дочерних элементов.
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(3);
const node1 = new TreeNode(9);
const node2 = new TreeNode(20);
const node3 = new TreeNode(null);
const node4 = new TreeNode(null);
const node5 = new TreeNode(15);
const node6 = new TreeNode(7);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

let minDepth = function (root) {
    if (!root) return 0;

    if (!root.left && !root.right) {
        return 1;
    }

    if (!root.left) {
        return minDepth(root.right) + 1;
    }
    if (!root.right) {
        return minDepth(root.left) + 1;
    }

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

console.log(minDepth(root));
