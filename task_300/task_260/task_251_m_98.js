// Учитывая корень двоичного дерева, определите, является ли оно допустимым двоичным деревом поиска(BST).
// Действительный BST определяется следующим образом:
// Левый поддерево узла содержит только узлы с ключами меньшими, чем ключ узла.
// Правое поддерево узла содержит только узлы с ключами, превышающими ключ узла.
// И левое, и правое поддеревья также должны быть бинарными деревьями поиска.
// 98


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



var isValidBST = function (root) {

    function dfs(node, min, max) {
        if (!node) return true;

        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }

        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    }

    return dfs(root, null, null);

};

console.log(isValidBST(root))