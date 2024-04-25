// Вам дан корень двоичного дерева, где каждый узел имеет значение
// в диапазоне[0, 25], представляющее буквы от «a» до «z».
// Возвращает лексикографически наименьшую строку,
// которая начинается с листа этого дерева и заканчивается корнем.
// Напомним, что любой более короткий префикс строки лексикографически меньше.
// Например, «ab» лексикографически меньше, чем «aba».
// Лист узла — это узел, не имеющий дочерних элементов.

// 988

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
const util = require('util');
util.inspect.defaultOptions.depth = null;
const root = new TreeNode(25);
const node1 = new TreeNode(1);
const node2 = new TreeNode(3);
const node3 = new TreeNode(1);
const node4 = new TreeNode(3);
const node5 = new TreeNode(0);
const node6 = new TreeNode(2);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node6;
node2.right = node5;

var smallestFromLeaf = function (root) {
    let res = '';

    function dfs(root, tempStr) {
        if (!root) {
            return;
        }

        tempStr =
            String.fromCharCode(root.val + 'a'.charCodeAt(0)) + tempStr;

        if (!root.left && !root.right) {

            if (res == '' || res > tempStr) {
                res = tempStr;
            }
        }

        if (root.left) {
            dfs(root.left, tempStr);
        }

        if (root.right) {
            dfs(root.right, tempStr);
        }
    }

    dfs(root, '');
    return res;
};

console.log(smallestFromLeaf(root));
