/**
Учитывая корень двоичного дерева, верните максимальную ширину данного дерева.
Максимальная ширина дерева — это максимальная ширина среди всех уровней.
Ширина одного уровня определяется как длина между конечными узлами (крайний левый и крайний правый ненулевые узлы), где нулевые узлы между конечными узлами, которые будут присутствовать в полном двоичном дереве, простирающемся до этого уровня, равны также учитывается при расчете длины.
Гарантируется, что ответ будет находиться в диапазоне 32-битного целого числа со знаком.
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(1);

const node1 = new TreeNode(3);
const node2 = new TreeNode(2);

const node3 = new TreeNode(5);
const node4 = new TreeNode(null);
const node5 = new TreeNode(null);
const node6 = new TreeNode(9);
const node7 = new TreeNode(6);
const node8 = new TreeNode(null);
const node9 = new TreeNode(null);
const node10 = new TreeNode(null);

// Связываем узлы

root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

node2.left = node6;
node2.right = node5;

let widthOfBinaryTree = function (root) {
    let rowArray = [[]];
    rowArray[0].push(BigInt(1));
    function callChildren(parent, depth, rowArray, node) {
        if (
            rowArray[depth] == null &&
            (node.left != null || node.right != null)
        ) {
            rowArray[depth] = [];
        }
        if (node.left != null) {
            rowArray[depth].push(BigInt(2) * parent);
            callChildren(BigInt(2) * parent, depth + 1, rowArray, node.left);
        }
        if (node.right != null) {
            rowArray[depth].push(BigInt(2) * parent + BigInt(1));
            callChildren(
                BigInt(2) * parent + BigInt(1),
                depth + 1,
                rowArray,
                node.right,
            );
        }
    }
    callChildren(BigInt(1), 1, rowArray, root);
    let max = BigInt(0);
    for (let row of rowArray) {
        let rowMax = BigInt(1) + row[row.length - 1] - row[0];
        max = max < rowMax ? rowMax : max;
    }
    return max;
};

console.log(widthOfBinaryTree(root));
