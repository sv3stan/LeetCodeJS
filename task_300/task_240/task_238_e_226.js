// Учитывая корень двоичного дерева, инвертируйте дерево и верните его корень.
// 226

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// // Создаем узлы
// const root = new TreeNode(3);
// const node1 = new TreeNode(9);
// const node2 = new TreeNode(20);
// const node3 = new TreeNode(null);
// const node4 = new TreeNode(null);
// const node5 = new TreeNode(15);
// const node6 = new TreeNode(7);
// // Связываем узлы
// root.left = node1;
// root.right = node2;
// node1.left = node3;
// node1.right = node4;
// node2.left = node5;
// node2.right = node6;

//root = [4, 2, 7, 1, 3, 6, 9]
// Создаем узлы
const root = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(7);
const node3 = new TreeNode(1);
const node4 = new TreeNode(3);
const node5 = new TreeNode(6);
const node6 = new TreeNode(9);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

var invertTree = function (root) {

    if (root === null) return null;

    function invert(node1, node2,) {
        if (node1 === null || node2 === null) return;

        const temp = node1.val;
        console.log(temp)
        node1.val = node2.val;
        node2.val = temp;

    }

    return invert(root, root)

};

console.log(invertTree(root))