// Учитывая корень двоичного дерева, верните количество узлов, 
// в которых значение узла равно среднему значению в его поддереве.
// Среднее значение n элементов представляет собой сумму n элементов, 
// разделенную на n и округленную до ближайшего целого числа.
// Поддерево корня — это дерево, состоящее из корня и всех его потомков.
// 2265

const { answer } = require('console');
const util = require('util');
util.inspect.defaultOptions.depth = null;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(4);
const node1 = new TreeNode(8);
const node2 = new TreeNode(5);
const node3 = new TreeNode(0);
const node4 = new TreeNode(1);
const node5 = new TreeNode(null);
const node6 = new TreeNode(6);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;



var averageOfSubtree = function (root) {

    let answer = 0;

    function dfs(node) {
        if (node === null) {
            return [0, 0];
        }

        const [leftSum, leftCount] = dfs(node.left);
        const [rightSum, rightCount] = dfs(node.right);

        const sum = leftSum + rightSum + node.val;
        const count = leftCount + rightCount + 1;

        const subtreeAverage = Math.floor(sum / count);

        if (subtreeAverage === node.val) {
            answer++;
        }

        return [sum, count];
    }

    dfs(root);

    return answer;
};


console.log(averageOfSubtree(root))