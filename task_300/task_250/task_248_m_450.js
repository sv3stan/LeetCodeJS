// Учитывая ссылку на корневой узел BST и ключ, удалите узел с данным ключом в BST.
// Верните ссылку на корневой узел(возможно, обновленную) BST.
// Условно удаление можно разделить на два этапа:
// Найдите узел, который нужно удалить.
// Если узел найден, удалите его.
// 450


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(5);
const node1 = new TreeNode(3);
const node2 = new TreeNode(6);
const node3 = new TreeNode(2);
const node4 = new TreeNode(4);
const node5 = new TreeNode(7);
const node6 = new TreeNode(null);


// Связываем узлы
root.left = node1;
root.right = node2;

node1.left = node3;
node1.right = node4;

node2.left = node6;
node2.right = node5;


key = 3

//root = [5, 3, 6, 2, 4, null, 7]


var deleteNode = function (root, key) {

    if (null === root) { return null; }
    if (root.val === key) {

        if (null === root.left && null === root.right) { return null; }

        if (null === root.left) { return root.right; }
        if (null === root.right) { return root.left; }

        if (null !== root.left && null !== root.right) {
            let current = root.right;
            while (current.left) { current = current.left; }
            current.left = root.left;
            return root.right;
        }
    }

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }

    return root;
};

console.log(deleteNode(root, key))