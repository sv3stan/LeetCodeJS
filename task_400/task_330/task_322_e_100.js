// Учитывая корни двух двоичных деревьев p и q, напишите функцию, 
// проверяющую, совпадают они или нет.
// Два двоичных дерева считаются одинаковыми, если они структурно 
// идентичны и узлы имеют одинаковое значение.
// 100


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const util = require('util');
util.inspect.defaultOptions.depth = null;

const p = new TreeNode(1);
const pNode1 = new TreeNode(2);
const pNode2 = new TreeNode(3);
// Связываем узлы
p.left = pNode1;
p.right = pNode2;

const q = new TreeNode(1);
const qNode1 = new TreeNode(2);
const qNode2 = new TreeNode(3);
// Связываем узлы
q.left = qNode1;
q.right = qNode2;


var isSameTree = function (p, q) {
    const resultP = [];
    const resultQ = [];
    function dfs(node, result) {
        if (node === null) return;
        result.push(node.val);
        //        console.log(resultP)
        dfs(node.left, result);
        dfs(node.right, result);
        //return result;
    }

    // console.log(resultP)
    //console.log(resultQ)
    //dfs(p, resultP)

    dfs(p, resultP);
    dfs(q, resultQ);

    return resultP.toString() === resultQ.toString();

};

console.log(isSameTree(p, q))