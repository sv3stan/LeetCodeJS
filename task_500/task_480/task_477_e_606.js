// Учитывая корень двоичного дерева, создайте строку, 
// состоящую из круглых скобок и целых чисел из двоичного дерева 
// с помощью способа обхода по предварительному порядку, и верните ее.
// Опустите все пары пустых круглых скобок, которые не влияют на 
// взаимно однозначное соотношение между строкой и исходным двоичным деревом.
// 606

const util = require('util');
util.inspect.defaultOptions.depth = null;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



const root = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(4);
const node3 = new TreeNode(3);

// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;

var tree2str = function (root) {

    let answer = [];

    function dfs(node, answer) {
        if (node === null)
            return;

        answer.push(node.val);

        if (node.left === null && node.right === null)
            return;

        answer.push('(');
        dfs(node.left, answer);
        answer.push(')');

        if (node.right !== null) {
            answer.push('(');
            dfs(node.right, answer);
            answer.push(')');
        }
    }



    dfs(root, answer);
    return answer.join('');


};

console.log(tree2str(root))