// Вам дан корень двоичного дерева.
// Путь зигзага для двоичного дерева определяется следующим образом:
// Выберите любой узел бинарного дерева и направление(вправо или влево).
// Если текущее направление правильное, перейдите к правому дочернему элементу текущего узла; 
// в противном случае перейдите к левому дочернему элементу.
// Измените направление справа налево или слева направо.
// Повторяйте второй и третий шаги, пока не сможете двигаться по дереву.
// Длина зигзага определяется как количество посещенных узлов — 1.(Длина одного узла равна 0).
// Возвращает самый длинный путь зигзага, содержащийся в этом дереве.
// 1372


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(1);
const node1 = new TreeNode(null);
const node2 = new TreeNode(1);
const node3 = new TreeNode(1);
const node4 = new TreeNode(1);
const node5 = new TreeNode(null);
const node6 = new TreeNode(null);
const node7 = new TreeNode(1);
const node8 = new TreeNode(1);
const node9 = new TreeNode(null);
const node10 = new TreeNode(1);
const node11 = new TreeNode(null);
const node12 = new TreeNode(null);
const node13 = new TreeNode(null);
const node14 = new TreeNode(1);


// Связываем узлы
root.left = node1;
root.right = node2;
node2.left = node3;
node2.right = node4;
node3.left = node5;
node3.right = node6;
node4.left = node7;
node4.right = node8;
node7.left = node9;
node7.right = node10;
node8.left = node11;
node8.right = node12;
node10.left = node13;
node10.right = node14;

// const root = new TreeNode(1);
// const node1 = new TreeNode(2);
// const node2 = new TreeNode(5);
// const node3 = new TreeNode(3);
// const node4 = new TreeNode(4);
// const node5 = new TreeNode(6);
// const node6 = new TreeNode(null);


// // Связываем узлы
// root.left = node1;
// root.right = node2;
// node1.left = node3;
// node1.right = node4;
// node2.left = node6;
// node2.right = node5;


var longestZigZag = function (root) {


    let maxLength = 0;
    const stack = [];

    // Добавляем корневой узел в стек с начальными значениями
    stack.push({ node: root, isLeft: true, length: 0 });
    stack.push({ node: root, isLeft: false, length: 0 });

    while (stack.length > 0) {
        const { node, isLeft, length } = stack.pop();

        // Обновляем максимальную длину ZigZag пути
        maxLength = Math.max(maxLength, length);

        // Рекурсивные вызовы без рекурсии для движения влево и вправо
        if (isLeft) {
            if (node.left) stack.push({ node: node.left, isLeft: true, length: 1 });
            if (node.right) stack.push({ node: node.right, isLeft: false, length: length + 1 });
        } else {

            if (node.left) stack.push({ node: node.left, isLeft: true, length: length + 1 });
            if (node.right) stack.push({ node: node.right, isLeft: false, length: 1 });
        }
    }

    return maxLength;

};


console.log(longestZigZag(root))









// let maxLength = 0;
// // Функция для DFS с мемоизацией
// function dfs(node, isLeft, length) {
//     if (node === null) return;

//     // Обновляем максимальную длину ZigZag пути
//     maxLength = Math.max(maxLength, length);

//     // Рекурсивный вызов для движения влево с мемоизацией
//     if (isLeft) {
//         dfs(node.left, true, 1);
//         dfs(node.right, false, length + 1);
//     } else { // Рекурсивный вызов для движения вправо с мемоизацией
//         dfs(node.left, true, length + 1);
//         dfs(node.right, false, 1);
//     }
// }

// // Начинаем с корневого узла, начиная с любого направления (лево или право)
// dfs(root, false, 0);
// dfs(root, true, 0);

// return maxLength;

//     int pathLength = 0;
// void dfs(TreeNode * node, bool goLeft, int steps) {
//     if (node == nullptr) {
//         return;
//     }
//     pathLength = max(pathLength, steps);
//     if (goLeft) {
//         dfs(node -> left, false, steps + 1);
//         dfs(node -> right, true, 1);
//     } else {
//         dfs(node -> left, false, 1);
//         dfs(node -> right, true, steps + 1);
//     }
// }

//     int longestZigZag(TreeNode * root) {
//     dfs(root, false, 0);
//     dfs(root, true, 0);
//     return pathLength;
// }



















// let maxLength = 0;

// // Функция для рекурсивного обхода дерева
// function dfs(node, isLeft, length) {
//     if (!node) return;

//     // Обновляем максимальную длину ZigZag пути
//     maxLength = Math.max(maxLength, length);

//     // Если текущее направление - влево, ищем ZigZag путь вправо
//     if (isLeft) {
//         dfs(node.right, false, length + 1);
//         dfs(node.left, true, 1);
//     } else { // Если текущее направление - вправо, ищем ZigZag путь влево
//         dfs(node.left, true, length + 1);
//         dfs(node.right, false, 1);
//     }
// }

// // Начинаем с корневого узла, начиная с любого направления (лево или право)
// dfs(root, true, 0);
// dfs(root, false, 0);

// return maxLength;