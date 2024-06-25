/*
Учитывая корень двоичного дерева поиска (BST), преобразуйте его в большое дерево так, чтобы каждый ключ исходного BST был изменен на исходный ключ плюс сумма всех ключей, больших, чем исходный ключ в BST.
Напомним, что двоичное дерево поиска — это дерево, удовлетворяющее следующим ограничениям:
Левое поддерево узла содержит только узлы с ключами меньше ключа узла.
Правое поддерево узла содержит только узлы с ключами, превышающими ключ узла.
И левое, и правое поддеревья также должны быть бинарными деревьями поиска.
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

let bstToGst = function (root) {
    let sum = 0;

    function sumNode(node) {
        if (!node) return;

        sumNode(node.right);
        sum += node.val;
        node.val = sum;
        sumNode(node.left);
    }
    sumNode(root);
    return root;
};

console.log(bstToGst(root));
