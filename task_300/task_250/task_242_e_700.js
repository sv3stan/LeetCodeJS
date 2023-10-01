// Вам дан корень двоичного дерева поиска(BST) и целое число.
// Найдите узел в BST, значение которого равно val, и верните поддерево, 
// корнем которого является этот узел.Если такой узел не существует, верните ноль.
// 700


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

val = 2;

const root = new TreeNode(4);
const node1 = new TreeNode(2);
const node2 = new TreeNode(7);
const node3 = new TreeNode(1);
const node4 = new TreeNode(3);

// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;

var searchBST = function (root, val) {

    function search(node) {
        if (!node) return null;
        console.log(node.val)
        if (node.val === val) return node;


        if (val < node.val) return search(node.left)
        if (val > node.val) return search(node.right)


    }

    return search(root);
};

console.log(searchBST(root, val))