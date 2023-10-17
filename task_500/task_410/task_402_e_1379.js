// Даны два исходных и клонированных двоичных дерева и 
// дана ссылка на целевой узел в исходном дереве.
// Клонированное дерево является копией исходного дерева.
// Верните ссылку на тот же узел в клонированном дереве.
// Обратите внимание, что вам не разрешено изменять ни одно 
// из двух деревьев или целевой узел, и ответ должен 
// быть ссылкой на узел в клонированном дереве.
// 1379

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const util = require('util');
util.inspect.defaultOptions.depth = null;
const cloned = new TreeNode(5);
const node11 = new TreeNode(3);
const node12 = new TreeNode(6);
const node13 = new TreeNode(2);
const node14 = new TreeNode(4);
const node15 = new TreeNode(7);
const node16 = new TreeNode(null);
// Связываем узлы
cloned.left = node11;
cloned.right = node12;
node11.left = node13;
node11.right = node14;
node12.left = node16;
node12.right = node15;

const original = new TreeNode(5);
const node1 = new TreeNode(3);
const node2 = new TreeNode(6);
const node3 = new TreeNode(2);
const node4 = new TreeNode(4);
const node5 = new TreeNode(7);
const node6 = new TreeNode(null);
// Связываем узлы
original.left = node1;
original.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node6;
node2.right = node5;

tree = [7, 4, 3, null, null, 6, 19], target = 3

var getTargetCopy = function (original, cloned, target) {

    let answer = null;

    function dfs(unique, duplicate) {

        if (!unique) return null;


        if (unique === target) {
            answer = duplicate;
            return;
        }
        dfs(unique.left, duplicate.left);
        dfs(unique.right, duplicate.right);


    }

    dfs(original, cloned);

    return answer;

};

console.log(getTargetCopy(original, cloned, target))