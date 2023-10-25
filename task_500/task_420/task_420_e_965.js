// Бинарное дерево является однозначным, 
// если все узлы дерева имеют одинаковое значение.
// Учитывая корень двоичного дерева, верните true, 
// если данное дерево является однозначным, 
// или false в противном случае.
// 965


const { count } = require('console');
const util = require('util');
util.inspect.defaultOptions.depth = null;
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = new TreeNode(1);
const node1 = new TreeNode(1);
const node2 = new TreeNode(1);
const node3 = new TreeNode(1);
const node4 = new TreeNode(1);
const node5 = new TreeNode(null);
const node6 = new TreeNode(1);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;



var isUnivalTree = function (root) {


    function dfs(node) {
        if (!node) return true;
        if (node.val !== root.val) return false;
        const leftResult = dfs(node.left);
        const rightResult = dfs(node.right);
        return leftResult && rightResult;
    }
    return dfs(root);

};


console.log(isUnivalTree(root))