// Учитывая корень двоичного дерева, представьте, что вы стоите на его правой стороне,
// и верните значения узлов, которые вы видите, упорядоченные сверху вниз.
// 199



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

var rightSideView = function (root) {


    if (!root) return [];

    const result = [];
    const stack = [[root, 0]];

    while (stack.length) {
        const [node, level] = stack.pop();

        if (result.length === level) {
            result.push(node.val);
        }

        if (node.left) {
            stack.push([node.left, level + 1]);
        }

        if (node.right) {
            stack.push([node.right, level + 1]);
        }
    }

    return result;

};

console.log(rightSideView(root))