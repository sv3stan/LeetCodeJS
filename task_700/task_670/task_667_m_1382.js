/*
Учитывая корень двоичного дерева поиска, верните сбалансированное двоичное дерево поиска с теми же значениями узлов. Если существует более одного ответа, верните любой из них.
Бинарное дерево поиска сбалансировано, если глубина двух поддеревьев каждого узла никогда не отличается более чем на 1. 
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
const util = require('util');
util.inspect.defaultOptions.depth = null;

const node0 = new TreeNode(0);
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);
const node8 = new TreeNode(8);

node4.left = node1;
node4.right = node6;

node1.left = node0;
node1.right = node2;

node2.right = node3;

node6.left = node5;
node6.right = node7;

node7.right = node8;

// Корень дерева
const root = node4;

let balanceBST = function (root) {
    function dfs(node, result) {
        if (node === null) {
            return;
        }
        dfs(node.left, result);
        result.push(node.val);
        dfs(node.right, result);
    }

    function arrayToBST(nums) {
        if (nums.length === 0) {
            return null;
        }

        function buildBST(left, right) {
            if (left > right) {
                return null;
            }

            const middle = (left + right) >> 1;
            const node = new TreeNode(nums[middle]);
            node.left = buildBST(left, middle - 1);
            node.right = buildBST(middle + 1, right);
            return node;
        }

        return buildBST(0, nums.length - 1);
    }

    const nums = [];
    dfs(root, nums);
    return arrayToBST(nums);
};

console.log(balanceBST(root));
