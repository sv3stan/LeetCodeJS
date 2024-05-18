/*
Вам дан корень полного двоичного дерева со следующими свойствами:
Листовые узлы имеют значение 0 или 1, где 0 представляет собой False, а 1 представляет True.
Нелистовые узлы имеют значение 2 или 3, где 2 представляет логическое ИЛИ, а 3 представляет логическое И.
Оценка узла следующая:
Если узел является листовым узлом, оценкой является значение узла, т. е. «Истина» или «Ложь».
В противном случае оцените двух дочерних узлов и примените логическую операцию над его значением к оценкам дочерних узлов.
Верните логический результат оценки корневого узла.
Полное двоичное дерево — это двоичное дерево, в котором каждый узел имеет 0 или 2 дочерних узла.
Листовой узел — это узел, который не имеет дочерних элементов.
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// Создаем узлы
const root = new TreeNode(2);
const node1 = new TreeNode(1);
const node2 = new TreeNode(3);
const node3 = new TreeNode(null);
const node4 = new TreeNode(null);
const node5 = new TreeNode(0);
const node6 = new TreeNode(1);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

let evaluateTree = function (root) {
    if (root.left === null && root.right === null) {
        return root.val;
    }

    // Store the evaluations for the left subtree and right subtree.
    const left = evaluateTree(root.left);
    const right = evaluateTree(root.right);
    let evaluateRoot = false;
    if (root.val === 2) {
        evaluateRoot = left || right;
    } else {
        evaluateRoot = left && right;
    }

    return evaluateRoot;
};

console.log(evaluateTree(root));
