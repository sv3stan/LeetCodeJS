// Учитывая корень двоичного дерева, верните его максимальную глубину.
// Максимальная глубина двоичного дерева — это количество узлов на самом 
// длинном пути от корневого узла до самого дальнего листового узла.
// 104


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Создаем узлы
const root = new TreeNode(3);
const node1 = new TreeNode(9);
const node2 = new TreeNode(20);
const node3 = new TreeNode(null);
const node4 = new TreeNode(null);
const node5 = new TreeNode(15);
const node6 = new TreeNode(7);

// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

var maxDepth = function (root) {

    // if (root === null) return 0;

    // const depthLeft = maxDepth(root.left);
    // const depthRight = maxDepth(root.right);

    // return Math.max(depthLeft, depthRight) + 1;


    return (root === null) ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


console.log(maxDepth(root))