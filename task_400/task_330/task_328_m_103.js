// Учитывая корень двоичного дерева, 
// верните обход зигзагообразного порядка значений его узлов. 
// (т.е.слева направо, 
// затем справа налево для следующего уровня и поочередно).
// 103



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

var zigzagLevelOrder = function (root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];
    let direction = true;

    while (queue.length > 0) {
        const level = queue.length;
        console.log(level)
        const val = [];

        for (let i = 0; i < level; i++) {
            // console.log(queue)

            const node = queue.shift();
            if (node.val) {
                if (direction) {
                    val.push(node.val);
                } else {
                    val.unshift(node.val);
                }
            }


            console.log(node.val)

            if (node.left) {
                queue.push(node.left);
            }


            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(val);
        direction = !direction;
        console.log(direction)
    }

    return result;

};

console.log(zigzagLevelOrder(root))













// if (!root) {
//     return [];
// }

// const result = [];
// const queue = [root];
// let direction = true;

// while (queue.length > 0) {
//     const level = queue.length;
//     const val = [];

//     for (let i = 0; i < level; i++) {
//         const node = direction ? queue.shift() : queue.pop();
//         if (node.val) val.push(node.val);

//         if (node.left) {
//             queue.push(node.left);
//         }
//         if (node.right) {
//             queue.push(node.right);
//         }
//     }

//     result.push(val);
//     direction = !direction;
// }

// return result;