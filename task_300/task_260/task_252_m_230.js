// Учитывая корень двоичного дерева поиска и целое число k, 
// верните k - е наименьшее значение(с индексом 1) из всех значений узлов в дереве.
// 230


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(0);
const node1 = new TreeNode(3);
const node2 = new TreeNode(6);
const node3 = new TreeNode(2);
const node4 = new TreeNode(4);
const node5 = new TreeNode(7);
const node6 = new TreeNode(null);
const node7 = new TreeNode(null);
const node8 = new TreeNode(1);


// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node6;
node2.right = node5;
node3.left = node8;
node3.right = node7;

k = 3;

var kthSmallest = function (root, k) {
    const arr = [];
    function searchMin(node) {
        if (!node) return null;
        const left = searchMin(node.left)
        const right = searchMin(node.right)
        console.log(left)
        console.log(right)
        if (node.val !== null) arr.push(node.val)
        return node.val
    }


    searchMin(root);
    arr.sort((a, b) => a - b)
    console.log(arr)

    return arr[k - 1];

    //console.log(root)
};


console.log(kthSmallest(root, k))