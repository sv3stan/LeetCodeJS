// Учитывая корень двоичного дерева, верните 
// предварительный обход значений его узлов.

// 144

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const util = require('util');
util.inspect.defaultOptions.depth = null;


const root = new TreeNode(5);
const node1 = new TreeNode(3);
const node2 = new TreeNode(6);
const node3 = new TreeNode(2);
const node4 = new TreeNode(4);
const node5 = new TreeNode(7);
const node6 = new TreeNode(null);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node6;
node2.right = node5;



var preorderTraversal = function (root) {
    const answer = [];
    function dfs(node) {
        if (!node) return [];
        answer.push(node.val);
        dfs(node.left);
        dfs(node.right);
        return answer;
    }

    return dfs(root);
};

console.log(preorderTraversal(root))
