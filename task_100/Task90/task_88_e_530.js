// Учитывая корень двоичного дерева поиска(BST), 
// вернуть минимальную абсолютную разницу между значениями любых двух разных узлов в дереве.
// 530


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let root = [4, 2, 6, 1, 3];


function insertIntoBST(root, val) {
    if (!root) {
        return new TreeNode(val);
    }

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
}

function createBSTFromArray(root) {
    let trees = null;
    for (let i = 0; i < root.length; i++) {
        trees = insertIntoBST(trees, root[i]);
    }
    return trees;
}

function getMinimumDifference(trees) {
    let minDiff = Infinity;
    let prevVal = null;

    function inOrderTraversal(node) {
        if (!node) return;
        // console.log(node)
        inOrderTraversal(node.left);
        if (prevVal !== null) {
            const diff = Math.abs(node.val - prevVal);
            minDiff = Math.min(minDiff, diff);
        }
        prevVal = node.val;
        inOrderTraversal(node.right);
    }

    inOrderTraversal(trees);
    return minDiff;
}

// Пример использования
//const arr = [4, 2, 6, 1, 3];
const trees = createBSTFromArray(root);
//console.log(trees)
console.log(getMinimumDifference(trees)); // Выведет: 1