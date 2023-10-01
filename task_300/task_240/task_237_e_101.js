// Учитывая корень двоичного дерева, проверьте, является ли оно зеркалом самого себя
// (т.е.симметрично относительно своего центра).
// 101


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


// Создаем узлы
const root = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(4);
const node6 = new TreeNode(3);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;


var isSymmetric = function (root) {
    function symmetric(tree1, tree2) {
        if (tree1 === null && tree2 === null) {
            return true;
        }
        if (tree1 === null || tree2 === null) {
            return false;
        }
        return (
            tree1.val === tree2.val &&
            symmetric(tree1.left, tree2.right) &&
            symmetric(tree1.right, tree2.left)
        );
    }
    return symmetric(root, root)
};

console.log(isSymmetric(root))