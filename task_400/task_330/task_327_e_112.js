// Учитывая корень двоичного дерева и целое число targetSum, 
// верните true, если дерево имеет путь от корня к листу, 
// так что суммирование всех значений по пути равняется targetSum.
// Лист — это узел, не имеющий дочерних элементов.
// 112

const util = require('util');
util.inspect.defaultOptions.depth = null;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = new TreeNode(5);
const node1 = new TreeNode(4);
const node2 = new TreeNode(8);
const node3 = new TreeNode(11);
const node4 = new TreeNode(null);
const node5 = new TreeNode(13);
const node6 = new TreeNode(4);
const node7 = new TreeNode(7);
const node8 = new TreeNode(2);
const node9 = new TreeNode(null);
const node10 = new TreeNode(null);
const node11 = new TreeNode(null);
const node12 = new TreeNode(1);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;
node3.left = node7;
node3.right = node8;
node5.left = node9;
node5.right = node10;
node6.left = node11;
node6.right = node12;

// const root = new TreeNode(1);
// const node1 = new TreeNode(2);
// const node2 = new TreeNode(null);

// root.left = node1;
// root.right = node2;


targetSum = 22;

var hasPathSum = function (root, targetSum) {




    function dfs(node, targetSum) {
        if (node === null) return false;

        if (node.left === null && node.right === null) return targetSum === root.val;

        const leftPath = hasPathSum(node.left, targetSum - node.val);
        const rightPath = hasPathSum(node.right, targetSum - node.val);

        return leftPath || rightPath;
    }

    //dfs(root, targetSum);
    //console.log(root)
    return dfs(root, targetSum);
};

console.log(hasPathSum(root, targetSum))