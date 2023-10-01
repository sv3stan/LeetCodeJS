// Учитывая корень двоичного дерева, верните длину диаметра дерева.
// Диаметр двоичного дерева — это длина самого длинного пути между любыми двумя 
// узлами дерева.Этот путь может проходить через корень, а может и не проходить.
// Длина пути между двумя узлами представлена ​​количеством ребер между ними.
// 543



function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;


const root = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(3);
const node3 = new TreeNode(4);
const node4 = new TreeNode(5);

// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;



var diameterOfBinaryTree = function (root) {
    let answer = 0;
    function getHeightTree(node) {
        if (node == null) return 0;

        const leftHeight = getHeightTree(node.left);
        const rightHeight = getHeightTree(node.right);

        //const longestPath = leftHeight + rightHeight;
        answer = Math.max(answer, leftHeight + rightHeight)
        //const result = Math.max(leftHeight, rightHeight) + 1;
        return Math.max(leftHeight, rightHeight) + 1;
    }
    //console.log(root)
    getHeightTree(root);
    return answer;
};

console.log(diameterOfBinaryTree(root))