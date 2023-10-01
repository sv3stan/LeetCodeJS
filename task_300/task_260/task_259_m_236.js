// Учитывая двоичное дерево, найдите наименьшего общего предка(LCA) двух заданных узлов в дереве.
// Согласно определению LCA в Википедии: «Наименьший общий предок определяется между двумя узлами p и q 
// как самый нижний узел в T, который имеет как p, так и q в качестве потомков
// (где мы позволяем узлу быть потомком самого себя). »
// 236



function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(3);
const node1 = new TreeNode(5);
const node2 = new TreeNode(1);
const node3 = new TreeNode(6);
const node4 = new TreeNode(2);
const node5 = new TreeNode(0);
const node6 = new TreeNode(8);
const node7 = new TreeNode(null);
const node8 = new TreeNode(null);
const node9 = new TreeNode(7);
const node10 = new TreeNode(4);


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

p = 5, q = 1;

var lowestCommonAncestor = function (root, p, q) {


    if (!root) {
        return null;
    }
    // Базовый случай: если дерево пустое или текущий узел совпадает с p или q,
    // то текущий узел является LCA.
    if (!root || root === p || root === q) {
        return root;
    }

    // Рекурсивно ищем LCA в левом и правом поддеревьях
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    console.log(left)
    console.log(right)
    // Если LCA найдено в обоих поддеревьях, то текущий узел является LCA
    if (left && right) {
        return root;
    }

    // Если LCA найдено только в левом или правом поддереве, то это LCA
    // для текущего узла.
    return left || right;



};


console.log(lowestCommonAncestor(root, p, q));






// const arrayQ = [];
// const arrayP = [];
// let pFind = false;
// let qFind = false;
// function dfs(node) {
//     if (node === null) return;
//     if (pFind === false) {
//         if (p === node.val) {
//             return pFind = true;
//         } else {
//             arrayP.push(node.val);
//         }
//     }
//     if (qFind === false) {
//         if (q === node.val) {
//             return qFind = true;
//         } else {
//             arrayQ.push(node.val);
//         }
//     }



//     const left = dfs(node.left);
//     const right = dfs(node.right);

//     return left || right

// }
// dfs(root, pFind, qFind)
// console.log(arrayP)
// console.log(arrayQ)