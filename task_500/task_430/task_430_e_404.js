// Учитывая корень двоичного дерева, верните сумму всех левых листьев.
// Лист — это узел, не имеющий дочерних элементов.Левый лист — это лист, 
// который является левым дочерним элементом другого узла.
// 404


const { count } = require('console');
const util = require('util');
util.inspect.defaultOptions.depth = null;
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// const root = new TreeNode(5);
// const node1 = new TreeNode(3);
// const node2 = new TreeNode(6);
// const node3 = new TreeNode(2);
// const node4 = new TreeNode(4);
// const node5 = new TreeNode(null);
// const node6 = new TreeNode(7);

// root.left = node1;
// root.right = node2;
// node1.left = node3;
// node1.right = node4;
// node2.left = node5;
// node2.right = node6;


const root = new TreeNode(3);
const node1 = new TreeNode(9);
const node2 = new TreeNode(20);
const node3 = new TreeNode(null);
const node4 = new TreeNode(null);
const node5 = new TreeNode(15);
const node6 = new TreeNode(7);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

var sumOfLeftLeaves = function (root) {

    console.log(root)
    let sum = 0;
    function dfs(node, isLeft = false) {
        if (!node) return null;

        dfs(node.left, true);
        if (node.left === null && node.right === null && isLeft) {
            sum += node.val;
            // console.log(sum);
        }
        dfs(node.right);

    }
    dfs(root);
    return sum;
};


console.log(sumOfLeftLeaves(root))