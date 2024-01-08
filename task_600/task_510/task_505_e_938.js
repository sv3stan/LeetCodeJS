// Учитывая корневой узел двоичного дерева поиска и два целых числа, 
// младшее и старшее, верните сумму значений всех узлов со значением 
// в включающем диапазоне[низкое, высокое].

// 938




function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const util = require('util');
util.inspect.defaultOptions.depth = null;
const root = new TreeNode(10);
const node1 = new TreeNode(5);
const node2 = new TreeNode(15);
const node3 = new TreeNode(3);
const node4 = new TreeNode(7);
const node5 = new TreeNode(null);
const node6 = new TreeNode(18);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

low = 7, high = 15

var rangeSumBST = function (root, low, high) {

    let sum = 0;
    function dfs(node) {
        if (node === null) return;
        if (node.val >= low && node.val <= high) {
            sum += node.val
        }
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return sum;

}

console.log(rangeSumBST(root, low, high))