/*
Вам дан корень двоичного дерева с n узлами. Каждому узлу однозначно присваивается значение от 1 до n. Вам также дается целое число startValue, представляющее значение начального узла s, и другое целое число destValue, представляющее значение узла назначения t.
Найдите кратчайший путь, начинающийся с узла s и заканчивающийся узлом t. Сгенерируйте пошаговые инструкции такого пути в виде строки, состоящей только из заглавных букв «L», «R» и «U». Каждая буква указывает на определенное направление:
«L» означает переход от узла к его левому дочернему узлу.
«R» означает переход от узла к его правому дочернему узлу.
«U» означает переход от узла к его родительскому узлу.
Возвращает пошаговые направления кратчайшего пути от узла s к узлу t.
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

const root = new TreeNode(5);
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(null);
const node5 = new TreeNode(6);
const node6 = new TreeNode(4);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

let startValue = 3;
let destValue = 6;

let getDirections = function (root, startValue, destValue) {
    function findPath(root, value, path) {
        if (!root) return false;
        if (root.val === value) return true;
        path.push('L');
        if (findPath(root.left, value, path)) return true;
        path.pop();
        path.push('R');
        if (findPath(root.right, value, path)) return true;
        path.pop();
        return false;
    }

    function findLCA(root, start, dest) {
        if (!root) return null;
        if (root.val === start || root.val === dest) return root;
        let left = findLCA(root.left, start, dest);
        let right = findLCA(root.right, start, dest);
        if (left && right) return root;
        return left ? left : right;
    }

    let pathStart = [];
    let pathDest = [];
    findPath(root, startValue, pathStart);
    findPath(root, destValue, pathDest);

    let i = 0;
    while (
        i < pathStart.length &&
        i < pathDest.length &&
        pathStart[i] === pathDest[i]
    ) {
        i++;
    }

    let stepsUp = 'U'.repeat(pathStart.length - i);
    let stepsDown = pathDest.slice(i).join('');
    return stepsUp + stepsDown;
};

console.log(getDirections(root, startValue, destValue));
