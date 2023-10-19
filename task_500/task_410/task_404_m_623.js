// Учитывая корень двоичного дерева и два целых числа val и глубину, 
// добавьте строку узлов со значением val на заданной глубине глубины.
// Обратите внимание, что корневой узел находится на глубине 1.
// Правило добавления:
// Учитывая целочисленную глубину, для каждого ненулевого узла дерева cur
// на глубине глубина - 1 создайте два узла дерева со значением val в 
// качестве корня левого поддерева cur и корня правого поддерева.
// исходное левое поддерево cur должно быть левым поддеревом 
// нового корня левого поддерева. исходное правое поддерево cur должно 
// быть правым поддеревом нового корня правого поддерева.
// Если глубина == 1, это означает, что глубины глубины - 1 вообще нет, 
// тогда создайте узел дерева со значением val в качестве нового корня 
// всего исходного дерева, а исходное дерево - это левое поддерево нового корня.
// 623


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const util = require('util');
util.inspect.defaultOptions.depth = null;
const root = new TreeNode(4);
const node1 = new TreeNode(2);
const node2 = new TreeNode(6);
const node3 = new TreeNode(3);
const node4 = new TreeNode(1);
const node5 = new TreeNode(5);
const node6 = new TreeNode(null);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

val = 1, depth = 2;

var addOneRow = function (root, val, depth) {


    function dfs(node, currentDepth) {
        if (!node) return null;

        if (currentDepth === depth - 1) {
            // Создаем новые узлы и связываем их с текущими подходящими узлами
            const newNodeLeft = new TreeNode(val);
            const newNodeRight = new TreeNode(val);
            newNodeLeft.left = node.left;
            newNodeRight.right = node.right;
            node.left = newNodeLeft;
            node.right = newNodeRight;
        } else {
            // Рекурсивно вызываем dfs для левого и правого поддеревьев
            dfs(node.left, currentDepth + 1);
            dfs(node.right, currentDepth + 1);
        }
    }

    if (depth === 1) {
        // Если depth равна 1, создаем новый корневой узел
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }

    dfs(root, 1); // Начинаем с корневого узла и глубины 1

    return root;

};


console.log(addOneRow(root, val, depth))