// Учитывая корень двоичного дерева, уровень его корня равен 1, 
// уровень его дочерних элементов — 2 и так далее.
// Возвращает наименьший уровень x, такой, 
// что сумма всех значений узлов на уровне x является максимальной.
// 1161

//root = [1, 7, 0, 7, -8, null, null]

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(1);
const node1 = new TreeNode(7);
const node2 = new TreeNode(6);
const node3 = new TreeNode(7);
const node4 = new TreeNode(-8);
const node5 = new TreeNode(2);
const node6 = new TreeNode(4);


// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node6;
node2.right = node5;


var maxLevelSum = function (root) {


    if (!root) return 0; // Проверка на пустое дерево

    let maxSum = -Infinity;
    let maxLevel = 0;
    let currentLevel = 0;
    let queue = [root];

    while (queue.length > 0) {
        currentLevel++;
        let levelSum = 0;
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            levelSum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = currentLevel - 1; // Используем индексацию с 0
        }
    }

    return maxLevel;


};

console.log(maxLevelSum(root))


















//function traverse(node, level) {
//     if (!node) return;

//     if (!result[level]) {
//         result[level] = [];
//     }

//     result[level].push(node.val);

//     traverse(node.left, level + 1);
//     traverse(node.right, level + 1);

// }

// const result = [];
// traverse(root, 0);

// let maxSum = -Infinity;
// let index = -1;

// for (let i = 1; i < result.length; i++) {
//     const currentLevelSum = result[i].reduce((acc, item) => acc + item, 0);

//     if (currentLevelSum > maxSum)  {
//         maxSum = currentLevelSum;
//         index = i;
//     }
// }
// return index;