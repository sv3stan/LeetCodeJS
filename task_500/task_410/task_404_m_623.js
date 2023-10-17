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
const cloned = new TreeNode(5);
const node11 = new TreeNode(3);
const node12 = new TreeNode(6);
const node13 = new TreeNode(2);
const node14 = new TreeNode(4);
const node15 = new TreeNode(7);
const node16 = new TreeNode(null);
// Связываем узлы
cloned.left = node11;
cloned.right = node12;
node11.left = node13;
node11.right = node14;
node12.left = node16;
node12.right = node15;


var addOneRow = function (root, val, depth) {



};


console.log(addOneRow(root, val, depth))