// Учитывая двоичное дерево

// struct Node {
//   int val;
//     Node * left;
//     Node * right;
//     Node * next;
// }

// Заполните каждый следующий указатель, чтобы он указывал на следующий правый узел.
// Если следующего правого узла нет, следующий указатель должен быть установлен в NULL.
// Первоначально все указатели next установлены в NULL.
// 117



function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

const util = require('util');
util.inspect.defaultOptions.depth = null;
//root = [1, 2, 5, 3, 4, null, 6]
const root = new Node(1);
const node1 = new Node(2);
const node2 = new Node(3);
const node3 = new Node(4);
const node4 = new Node(5);
const node5 = new Node(null);
const node6 = new Node(7);
// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;


/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root;
    const getNext = (next) => {
        if (!next) return null;
        const nextLeft = next?.left;
        const nextRight = next?.right;
        return nextLeft ?? nextRight ?? getNext(next.next);
    };

    if (root.left) root.left.next = root.right ?? getNext(root?.next);
    if (root.right) root.right.next = getNext(root?.next);

    connect(root.right);
    connect(root.left);
    return root;
};

console.log(connect(root))