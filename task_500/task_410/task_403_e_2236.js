// Вам дан корень двоичного дерева, состоящего ровно из трех узлов: 
// корня, его левого дочернего элемента и правого дочернего элемента.
// Возвращайте true, если значение корня равно сумме значений двух 
// его дочерних элементов, или false в противном случае.
// 2236



function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(10);
const node1 = new TreeNode(4);
const node2 = new TreeNode(6);
// Связываем узлы
root.left = node1;
root.right = node2;

var checkTree = function (root) {

    let rootVal = 0;
    let sumChild = 0;

    function dfs(node) {

        if (!node) return null;

        dfs(node.left);

        if (!node.left && !node.right) {
            sumChild += node.val;
        } else {
            rootVal += node.val;
        }

        // if ((dfs(node.left) === null)) console.log(node.val + ' - val');

        dfs(node.right);


    }

    dfs(root);
    console.log(sumChild)
    console.log(rootVal)

    return sumChild === rootVal;

};


console.log(checkTree(root))