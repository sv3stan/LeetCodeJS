// Учитывая корень двоичного дерева поиска и целое число k, 
// верните true, если в BST существуют два элемента, 
// сумма которых равна k, или false в противном случае.
// 653

const { count } = require('console');
const util = require('util');
util.inspect.defaultOptions.depth = null;
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = new TreeNode(5);
const node1 = new TreeNode(3);
const node2 = new TreeNode(6);
const node3 = new TreeNode(2);
const node4 = new TreeNode(4);
const node5 = new TreeNode(null);
const node6 = new TreeNode(7);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

k = 19;

var findTarget = function (root, k) {
    const hash = new Set();
    const nums = [];
    function dfs(node) {
        if (!node) return;
        if (node.val !== null) nums.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    for (let i = 0; i < nums.length; i++) {
        const diff = k - nums[i]
        if (hash.has(diff)) return true;
        hash.add(nums[i]);
    }
    return false;
};


console.log(findTarget(root, k))