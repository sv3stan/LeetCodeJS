// Рассмотрим все листья двоичного дерева, слева направо, значения этих листьев образуют 
// последовательность значений листьев.
// Например, в приведенном выше дереве последовательность значений листьев равна(6, 7, 4, 9, 8).
// Два бинарных дерева считаются листоподобными, если их последовательность значений листьев одинакова.
// Возвращает true тогда и только тогда, когда два заданных дерева с головными узлами root1 и root2 
// являются листоподобными.
// 872


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// // Создаем узлы
// const root = new TreeNode(3);
// const node1 = new TreeNode(9);
// const node2 = new TreeNode(20);
// const node3 = new TreeNode(null);
// const node4 = new TreeNode(null);
// const node5 = new TreeNode(15);
// const node6 = new TreeNode(7);
// // Связываем узлы
// root.left = node1;
// root.right = node2;
// node1.left = node3;
// node1.right = node4;
// node2.left = node5;
// node2.right = node6;

const util = require('util');
util.inspect.defaultOptions.depth = null;

// Создаем узлы
const root1 = new TreeNode(3);
const node1 = new TreeNode(5);
const node2 = new TreeNode(1);
const node3 = new TreeNode(6);
const node4 = new TreeNode(2);
const node5 = new TreeNode(9);
const node6 = new TreeNode(8);
const node7 = new TreeNode(null);
const node8 = new TreeNode(null);
const node9 = new TreeNode(7);
const node10 = new TreeNode(4);

// Связываем узлы
root1.left = node1;
root1.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;
node3.left = node7;
node3.right = node8;
node4.left = node9;
node4.right = node10;

const root2 = new TreeNode(3);
const node11 = new TreeNode(5);
const node12 = new TreeNode(1);
const node13 = new TreeNode(6);
const node14 = new TreeNode(7);
const node15 = new TreeNode(4);
const node16 = new TreeNode(2);
const node17 = new TreeNode(null);
const node18 = new TreeNode(null);
const node19 = new TreeNode(null);
const node20 = new TreeNode(null);
const node21 = new TreeNode(null);
const node22 = new TreeNode(null);
const node23 = new TreeNode(9);
const node24 = new TreeNode(8);

// Связываем узлы
root2.left = node11;
root2.right = node12;
node11.left = node13;
node11.right = node14;
node12.left = node15;
node12.right = node16;
node13.left = node17;
node13.right = node18;
node14.left = node19;
node14.right = node20;
node15.left = node21;
node15.right = node22;
node16.left = node23;
node16.right = node24;




var leafSimilar = function (root1, root2) {
    // Функция для обхода дерева и записи значений листьев
    function getValues(node, values) {
        if (!node) return;
        if (!node.left && !node.right) {
            values.push(node.val);
        }
        getValues(node.left, values);
        getValues(node.right, values);
    }

    const leafVal1 = [];
    const leafVal2 = [];

    // Получаем последовательности значений листьев для обоих деревьев
    getValues(root1, leafVal1);
    getValues(root2, leafVal2);

    // Сравниваем последовательности
    if (JSON.stringify(leafVal1) === JSON.stringify(leafVal2)) {
        return true;
    }

    return false;



};


console.log(leafSimilar(root1, root2)) 