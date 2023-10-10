// Даны два целочисленных массива inorder и postorder, 
// где inorder — это обход по порядку двоичного дерева, 
// а postorder — это обратный обход того же дерева, 
// постройте и верните двоичное дерево.
// 106


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const util = require('util');
util.inspect.defaultOptions.depth = null;

inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]

var buildTree = function (inorder, postorder) {

    if (inorder.length === 0 || postorder.length === 0) {
        return null;
    }

    const val = postorder.pop();
    const root = new TreeNode(val);
    const index = inorder.indexOf(val);

    const rightIn = inorder.slice(index + 1);
    const leftIn = inorder.slice(0, index);

    root.right = buildTree(rightIn, postorder);
    root.left = buildTree(leftIn, postorder);

    return root;


};

console.log(buildTree(inorder, postorder));