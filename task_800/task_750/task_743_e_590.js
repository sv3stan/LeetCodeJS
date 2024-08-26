/**
Учитывая корень n-арного дерева, верните обратный обход значений его узлов.
Сериализация входных данных Nary-Tree представлена в порядке их обхода по уровням. Каждая группа дочерних элементов отделяется нулевым значением (см. примеры).
 */

function Node(val, children) {
    this.val = val;
    this.children = children;
}
const util = require('util');
util.inspect.defaultOptions.depth = null;
const root = new Node(5);
const node1 = new Node(3);
const node2 = new Node(6);
const node3 = new Node(2);
const node4 = new Node(4);
const node5 = new Node(7);
const node6 = new Node(null);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node6;
node2.right = node5;

let postorder = function (root) {
    const answer = [];
    function dfs(node) {
        if (!node) return;
        for (const key in node.children) {
            dfs(node.children[key]);
        }
        answer.push(node.val);
    }

    dfs(root);
    return answer;
};

console.log(postorder(root));

// const answer = [];
// if (root === null) return [];
// function helper(node, answer) {
//     if (node === null) return;
//     for (const key in node.children) {
//         helper(node.children[key], answer);
//     }
//     answer.push(node.val);
// }
// helper(root, answer);
// return answer;
