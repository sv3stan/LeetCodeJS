// Учитывая корень двоичного дерева, 
// верните самое левое значение в последней строке дерева.

// 513



function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const util = require('util');
util.inspect.defaultOptions.depth = null;
const root = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(3);
const node3 = new TreeNode(4);
const node4 = new TreeNode(null);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(null);
const node8 = new TreeNode(null);
const node9 = new TreeNode(7);

// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;
node4.left = node7;
node4.right = node8;
node6.left = node9;



var findBottomLeftValue = function (root) {


    let queue = [];
    let current = root;
    queue.push(current);

    while (queue.length > 0) {
        current = queue.shift();
        if (current.right !== null) {
            queue.push(current.right);
        }
        if (current.left !== null) {
            queue.push(current.left);
        }

        console.log(queue)
    }
    return current.val;


};


console.log(findBottomLeftValue(root))




// let maxDepth = 0;
// let value = 0;

// function dfs(node, depth) {

//     if (!node) return;

//     if (maxDepth < depth) {
//         maxDepth = depth;
//         value = node.val
//     }

//     dfs(node.left, depth + 1);
//     dfs(node.right, depth + 1);
// }

// dfs(root, 0);

// return value;

