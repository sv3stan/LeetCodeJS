/**
Учитывая корень двоичного дерева, каждый узел в дереве имеет отдельное значение.
После удаления всех узлов со значением to_delete у нас остается лес (несвязное объединение деревьев).
Верните корни деревьев в оставшийся лес. Вы можете вернуть результат в любом порядке.
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(3);
const node3 = new TreeNode(4);
const node4 = new TreeNode(5);
const node5 = new TreeNode(6);
const node6 = new TreeNode(7);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

let to_delete = [3, 5];

let delNodes = function (root, to_delete) {
    const hash = new Set(to_delete);
    const forest = [];

    function processNode(node, isRoot) {
        if (!node) {
            return null;
        }

        let deleted = hash.has(node.val);

        if (isRoot && !deleted) {
            forest.push(node);
        }

        node.left = processNode(node.left, deleted);
        node.right = processNode(node.right, deleted);

        return deleted ? null : node;
    }

    processNode(root, true);

    return forest;
};

console.log(delNodes(root, to_delete));
