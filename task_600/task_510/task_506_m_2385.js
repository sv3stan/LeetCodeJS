// Вам дан корень двоичного дерева с уникальными значениями и целочисленное начало.
// На минуте 0 заражение начинается с узла со значением start.
// Каждую минуту узел заражается, если:
// В настоящее время узел не заражен.
// Узел соседствует с зараженным узлом.
// Возвращает количество минут, необходимое для заражения всего дерева.

// 2385

const util = require('util');
util.inspect.defaultOptions.depth = null;

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const root = new TreeNode(1);
const node1 = new TreeNode(5);
const node2 = new TreeNode(3);
const node3 = new TreeNode(null);
const node4 = new TreeNode(4);
const node5 = new TreeNode(10);
const node6 = new TreeNode(6);
const node7 = new TreeNode(9);
const node8 = new TreeNode(2);


// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;
node4.left = node7;
node4.right = node8;


start = 3;


var amountOfTime = function (root, start) {

    let answer = 0;

    const infectedSet = new Set();
    infectedSet.add(start);


    function dfs(root, start) {
        let depth = 0;
        if (root === null) {
            return depth;
        }

        let leftDepth = dfs(root.left, start);
        let rightDepth = dfs(root.right, start);

        if (root.val === start) {
            answer = Math.max(leftDepth, rightDepth);
            depth = -1;
        } else if (leftDepth >= 0 && rightDepth >= 0) {
            depth = Math.max(leftDepth, rightDepth) + 1;
        } else {
            let distance = Math.abs(leftDepth) + Math.abs(rightDepth);
            answer = Math.max(answer, distance);
            depth = Math.min(leftDepth, rightDepth) - 1;
        }

        return depth;
    }


    dfs(root, start);
    return answer;

};


console.log(amountOfTime(root, start))

