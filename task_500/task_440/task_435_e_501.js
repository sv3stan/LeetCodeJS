// Учитывая корень двоичного дерева поиска(BST) с дубликатами, 
// верните в нем все режимы(т.е.наиболее часто встречающийся элемент).
// Если дерево имеет более одного режима, верните их в любом порядке.
//     Предположим, что BST определяется следующим образом:
// Левое поддерево узла содержит только узлы с ключами, меньшими или равными ключу узла.
// Правое поддерево узла содержит только узлы с ключами, большими или равными ключу узла.
// И левое, и правое поддеревья также должны быть бинарными деревьями поиска.
// 501

const { count } = require('console');
const util = require('util');
util.inspect.defaultOptions.depth = null;
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = new TreeNode(1);
const node1 = new TreeNode(null);
const node2 = new TreeNode(2);
const node3 = new TreeNode(2);
const node4 = new TreeNode(null);

root.left = node1;
root.right = node2;

node2.left = node3;
node2.right = node4;



var findMode = function (root) {

    const hash = new Map();

    function dfs(node) {
        if (node === null) return null;
        if (node.val !== null) hash.set(node.val, (hash.get(node.val) || 0) + 1);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    const count = Math.max(...hash.values());
    const nums = [];
    for (const [key, values] of hash.entries()) if (values === count) nums.push(key);

    return nums;

};
console.log(findMode(root))