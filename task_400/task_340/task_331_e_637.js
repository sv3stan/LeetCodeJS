// Учитывая корень двоичного дерева, верните среднее значение 
// узлов на каждом уровне в виде массива.Принимаются ответы 
// в пределах 10 - 5 от фактического ответа.
// 637

const { count } = require('console');
const util = require('util');
util.inspect.defaultOptions.depth = null;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = new TreeNode(3);
const node1 = new TreeNode(9);
const node2 = new TreeNode(20);
const node3 = new TreeNode(null);
const node4 = new TreeNode(null);
const node5 = new TreeNode(15);
const node6 = new TreeNode(7);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

var averageOfLevels = function (root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const level = queue.length;
        console.log(level)
        const val = [];

        for (let i = 0; i < level; i++) {
            // console.log(queue)

            const node = queue.shift();
            if (node.val !== null) {
                val.push(node.val);
            }


            console.log(node.val)

            if (node.left) {
                queue.push(node.left);
            }


            if (node.right) {
                queue.push(node.right);
            }
        }

        //const avverage = val.reduce((acc, item) => acc += item, 0) / 2;
        (val.length !== 1)
            ? result.push((val.reduce((acc, item) => acc += item, 0) / 2).toFixed(5))
            : result.push((val / 1).toFixed(5));

    }

    return result;

};


console.log(averageOfLevels(root))
