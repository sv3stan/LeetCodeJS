// Учитывая два целочисленных массива preorder и inorder, 
// где preorder — это предварительный обход двоичного дерева, 
// а inorder — это неупорядоченный обход того же дерева, 
// постройте и верните двоичное дерево.
// 105

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]

var buildTree = function (preorder, inorder) {

    if (preorder.length === 0) {
        return null;
    }

    const val = preorder[0];
    const root = new TreeNode(val);

    const index = inorder.indexOf(val);

    const leftIn = inorder.slice(0, index);
    const rightIn = inorder.slice(index + 1);

    const leftPre = preorder.slice(1, 1 + leftIn.length);
    const rightPre = preorder.slice(1 + leftIn.length);

    root.left = buildTree(leftPre, leftIn);
    root.right = buildTree(rightPre, rightIn);

    return root;

};


console.log(buildTree(preorder, inorder))