// Вам дан корень двоичного дерева, содержащий только цифры от 0 до 9.
// Каждый путь от корня к листу в дереве представляет число.
// Например, путь от корня к листу 1 -> 2 -> 3 представляет число 123.
// Возвращает общую сумму всех чисел от корня до листа.
// Тестовые случаи генерируются таким образом, 
// чтобы ответ соответствовал 32 - битному целому числу.
// Листовой узел — это узел, не имеющий дочерних элементов.
// 129

const { count } = require('console');
const util = require('util');
util.inspect.defaultOptions.depth = null;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = new TreeNode(4);
const node1 = new TreeNode(9);
const node2 = new TreeNode(0);
const node3 = new TreeNode(5);
const node4 = new TreeNode(1);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;

var sumNumbers = function (root) {
    const result = [];
    let val = ''
    function dfs(node, val) {
        if (node === null) return;
        if (node !== null) val += node.val
        console.log(val)
        if (node.left === null && node.right === null) result.push(parseInt(val));
        dfs(node.left, val);
        dfs(node.right, val);
    }

    dfs(root, val)
    let sum = 0;
    for (const item of result) sum += item;
    //console.log(sum)
    return sum;
    //console.log(result)
};


console.log(sumNumbers(root))