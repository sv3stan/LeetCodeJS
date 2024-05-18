/*
Учитывая корень двоичного дерева и целочисленную цель, удалите все листовые узлы со значением target.
Обратите внимание, что после удаления листового узла с целевым значением, если его родительский узел становится конечным узлом и имеет целевое значение, его также следует удалить (вам нужно продолжать делать это до тех пор, пока вы не сможете).
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(3);
const node3 = new TreeNode(2);
const node4 = new TreeNode(null);
const node5 = new TreeNode(2);
const node6 = new TreeNode(4);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

let target = 2;

let removeLeafNodes = function (root, target) {
    if (!root) return null;

    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);

    if (root.left === null && root.right === null && root.val === target) {
        return null;
    }

    return root;
};

console.log(removeLeafNodes(root, target));
