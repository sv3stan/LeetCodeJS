// Путь в бинарном дереве — это последовательность узлов, в которой каждая пара соседних узлов 
// в последовательности имеет соединяющее их ребро.Узел может появляться в последовательности 
// не более одного раза.Обратите внимание, что путь не обязательно должен проходить через корень.
// Сумма путей пути — это сумма значений узлов в пути.
// Учитывая корень двоичного дерева, верните максимальную сумму путей любого непустого пути.
// 124


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//root = [-10, 9, 20, null, null, 15, 7]
// root = [3, 2, 3, null, 3, null, 1]
const root = new TreeNode(-10);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);


var maxPathSum = function (root) {
    let maxSum = Number.NEGATIVE_INFINITY;
    function maxPath(node) {
        if (node === null) {
            return 0;
        }
        const leftMax = Math.max(maxPath(node.left), 0);
        const rightMax = Math.max(maxPath(node.right), 0);
        const pathSum = node.val + leftMax + rightMax;
        maxSum = Math.max(maxSum, pathSum);
        return node.val + Math.max(leftMax, rightMax);
    }
    maxPath(root);
    return maxSum;
};

console.log(maxPathSum(root))
