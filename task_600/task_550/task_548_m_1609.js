// Бинарное дерево называется Четно - Нечетное, если оно удовлетворяет следующим условиям:
// Корень двоичного дерева имеет индекс уровня 0, его дочерние элементы — индекс уровня 1, 
// их дочерние элементы — индекс уровня 2 и т.д.
// Для каждого уровня с четным индексом все узлы на уровне имеют нечетные целочисленные 
// значения в строго возрастающем порядке(слева направо).
// Для каждого уровня с нечетным индексом все узлы на уровне имеют четные целые значения 
// в строгом порядке убывания(слева направо).
// Учитывая корень двоичного дерева, верните true, если двоичное дерево четно - нечетное, 
// в противном случае верните false.

// 1609

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const util = require('util');
util.inspect.defaultOptions.depth = null;
const root = new TreeNode(1);
const node1 = new TreeNode(10);
const node2 = new TreeNode(4);
const node3 = new TreeNode(3);
const node4 = new TreeNode(null);
const node5 = new TreeNode(7);
const node6 = new TreeNode(9);
const node7 = new TreeNode(12);
const node8 = new TreeNode(8);
const node9 = new TreeNode(6);
const node10 = new TreeNode(null);
const node11 = new TreeNode(null);
const node12 = new TreeNode(2);

// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;
node3.left = node7;
node3.right = node8;
node5.left = node9;
node5.right = node10;
node6.left = node11;
node6.right = node12;

var isEvenOddTree = function (root) {

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift(); // Извлекаем первый элемент из очереди

        result.push(current.val);

        console.log(current.val)

        if (current.left) {
            queue.push(current.left); // Добавляем левого потомка в очередь
        }

        if (current.right) {
            queue.push(current.right); // Добавляем правого потомка в очередь
        }

    }

    return result;

};

console.log(isEvenOddTree(root))





// //let depth = 0;
// const values = [];

// function dfs(node, depth) {

//     if (!node) return true;
//     if (node.val === null) return true;
//     console.log(depth + ' - depth')
//     console.log(node.val)

//     if ((depth % 2 === 0 && node.val % 2 !== 0) ||
//         (depth % 2 !== 0 && node.val % 2 === 0)) {
//         return false;
//     }

//     if ((node.val % 2 !== 0 && node.val <= values[depth]) ||
//         (node.val % 2 === 0 && node.val >= values[depth])) {
//         return false;
//     }

//     values[depth] = node.val;


//     return dfs(node.left, depth + 1) && dfs(node.right, depth + 1);

// }


// return dfs(root, 0)









// const queue = [root];
// let level = 0; // Уровень корня (уровень 0)

// while (queue.length > 0) {
//     const size = queue.length;
//     let prevVal = level % 2 === 0 ? -1 : Number.MAX_SAFE_INTEGER;
//     console.log(queue)
//     for (let i = 0; i < size; i++) {
//         const node = queue.shift();

//         // Проверка условий задачи для каждого узла
//         if ((level % 2 === 0 && (node.val % 2 === 0 || node.val <= prevVal))
//             || (level % 2 !== 0 && (node.val % 2 !== 0 || node.val >= prevVal))) {
//             return false;
//         }

//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);

//         prevVal = node.val;
//     }

//     level++;
// }
// console.log(queue)
// return true;