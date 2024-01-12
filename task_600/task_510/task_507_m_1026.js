// Учитывая корень двоичного дерева, найдите максимальное значение v, 
// для которого существуют разные узлы a и b, где v = | a.val - b.val | 
// и a является предком b.
// Узел a является предком узла b, если либо: любой дочерний узел a равен b, 
// либо любой дочерний узел a является предком узла b.

// 1026



const util = require('util');
util.inspect.defaultOptions.depth = null;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(8);
const node1 = new TreeNode(3);
const node2 = new TreeNode(10);
const node3 = new TreeNode(1);
const node4 = new TreeNode(6);
const node5 = new TreeNode(null);
const node6 = new TreeNode(14);
const node7 = new TreeNode(null);
const node8 = new TreeNode(null);
const node9 = new TreeNode(4);
const node10 = new TreeNode(7);
const node11 = new TreeNode(13);
const node12 = new TreeNode(null);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;
node3.left = node7;
node3.right = node8;

node4.left = node9;
node4.right = node10;

node6.left = node11;
node6.right = node12;


var maxAncestorDiff = function (root) {

    let result = 1;

    function dfs(node, min, max) {
        if (!node) {
            return;
        }


        console.log(node.val + ' -val- ' + min + ' - min - ' + max + ' - max - ' + result + ' - res')

        if (node.left || node.right) {
            result = Math.max(result, Math.abs(node.val - min), Math.abs(node.val - max));
        }


        min = Math.min(min, node.val);
        max = Math.max(max, node.val);


        dfs(node.left, min, max);
        dfs(node.right, min, max);
    }


    dfs(root, root.val, root.val);

    return result;

};


console.log(maxAncestorDiff(root));