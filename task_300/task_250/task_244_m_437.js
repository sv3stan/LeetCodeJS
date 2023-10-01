// Учитывая корень двоичного дерева и целое число targetSum, верните количество путей, 
// в которых сумма значений вдоль пути равна targetSum.
// Путь не обязательно должен начинаться или заканчиваться в корне или листе, 
// но он должен идти вниз(т.е.идти только от родительских узлов к дочерним узлам).
// 437

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(10);
const node1 = new TreeNode(5);
const node2 = new TreeNode(-3);
const node3 = new TreeNode(3);
const node4 = new TreeNode(2);
const node5 = new TreeNode(11);
const node6 = new TreeNode(3);
const node7 = new TreeNode(-2);
const node8 = new TreeNode(1);

// Связываем узлы
root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

node2.left = null;
node2.right = node5;

node3.left = node6;
node3.right = node7;

node4.right = node8;
targetSum = 8



//root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 

var pathSum = function (root, targetSum) {

    let count = 0;

    function dfs(node, sum) {
        if (!node) return;

        sum += node.val;

        if (sum === targetSum) {
            count++;
        }

        dfs(node.left, sum);
        dfs(node.right, sum);
    }

    function round(node) {
        if (!node) return;

        dfs(node, 0);
        round(node.left);
        round(node.right);
    }

    round(root);

    return count;

};

console.log(pathSum(root, targetSum))