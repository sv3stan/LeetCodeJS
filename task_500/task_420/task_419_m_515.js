// Учитывая корень двоичного дерева, 
// верните массив наибольшего значения в каждой строке дерева(с индексом 0).
// 515


const { count } = require('console');
const util = require('util');
util.inspect.defaultOptions.depth = null;
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = new TreeNode(1);
const node1 = new TreeNode(3);
const node2 = new TreeNode(2);
const node3 = new TreeNode(5);
const node4 = new TreeNode(3);
const node5 = new TreeNode(null);
const node6 = new TreeNode(9);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;


var largestValues = function (root) {
    const answer = [];

    //console.log(root.val)

    function dfs(node, level) {
        if (!node) {
            return;
        }
        //  console.log(level)
        if (answer.length <= level) {
            answer.push(node.val);
        } else {
            answer[level] = Math.max(answer[level], node.val);
        }

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 0);

    return answer;
};

console.log(largestValues(root))