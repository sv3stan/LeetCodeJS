// Учитывая корень двоичного дерева, узел X в дереве называется хорошим, 
// если на пути от корня до X нет узлов со значением, большим, чем X.
// Возвращает количество хороших узлов в бинарном дереве.
// 1448


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

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



//root = [3, 1, 4, 3, null, 1, 5]


var goodNodes = function (root) {
    let count = 0;
    function goodNode(node, max) {
        if (node == null)
            return;
        if (node.val >= max) {
            max = node.val;
            count++;
        }
        goodNode(node.left, max);
        goodNode(node.right, max);
    }
    goodNode(root, root.val);
    return count;
};
console.log(goodNodes(root))