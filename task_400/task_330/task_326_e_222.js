// Учитывая корень полного двоичного дерева, верните количество узлов в дереве.
// Согласно Википедии, каждый уровень, за исключением, возможно, последнего, 
// полностью заполнен полным двоичным деревом, и все узлы на последнем уровне 
// расположены максимально слева.
// Он может иметь от 1 до 2h узлов включительно на последнем уровне h.
// Разработайте алгоритм, который будет выполняться с временной сложностью менее O(n).
// 222

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(3);
const node3 = new TreeNode(4);
const node4 = new TreeNode(5);
const node5 = new TreeNode(6);
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;

var countNodes = function (root) {
    let count = 0;

    function dfs(node) {

        if (node === null) return;

        if (node.val !== null) count++;

        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)
    console.log(count)
};


console.log(countNodes(root))