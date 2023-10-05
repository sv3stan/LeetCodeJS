// Реализуйте класс BSTIterator, 
// который представляет итератор для упорядоченного 
// обхода двоичного дерева поиска(BST):
// BSTIterator(корень TreeNode) Инициализирует объект класса BSTIterator.
// Корень BST задается как часть конструктора.
// Указатель должен быть инициализирован несуществующим числом, 
// меньшим, чем любой элемент в BST.
// boolean hasNext() Возвращает true, если при обходе справа от 
// указателя существует число, в противном случае возвращает false.
// int next() Перемещает указатель вправо, затем возвращает число в указателе.
// Обратите внимание: при инициализации указателя на несуществующее наименьшее 
// число первый вызов next() вернет наименьший элемент в BST.
// Вы можете предположить, что вызовы next() всегда будут действительны.
// То есть при вызове next() в ходе обхода по порядку будет как минимум следующее число.
// 173

const { count } = require('console');
const util = require('util');
util.inspect.defaultOptions.depth = null;
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const root = new TreeNode(7);
const node1 = new TreeNode(3);
const node2 = new TreeNode(15);
const node3 = new TreeNode(null);
const node4 = new TreeNode(null);
const node5 = new TreeNode(9);
const node6 = new TreeNode(20);



root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node5;
node2.right = node6;

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.stack = [];
    this.current = root;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    while (this.current) {
        this.stack.push(this.current);
        this.current = this.current.left;
    }
    this.current = this.stack.pop();
    var result = this.current.val;
    this.current = this.current.right;
    return result;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.current || this.stack.length > 0;
};



// var obj = new BSTIterator(root)
// var param_1 = obj.next()
// var param_2 = obj.hasNext()

const bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
//bSTIterator.next();    // return 3

console.log(bSTIterator.next())



























// /**
//  * @param {TreeNode} root
//  */
// var BSTIterator = function (root) {
//     this.root = root;
//     this.pointer = this.getNext();
// };
//       var stack = [];
//   return {hasNext, next};
// /**
//  * @return {number}
//  */
// BSTIterator.prototype.next = function () {
//     const result = this.pointer.val;
//     this.pointer = this.getNext(this.pointer);
//     return result;
// };

// /**
//  * @return {boolean}
//  */
// BSTIterator.prototype.hasNext = function () {
//     return !!this.pointer;
// };


// /**
//  * @return {TreeNode}
//  */
// BSTIterator.prototype.getNext = function (pointer = null) {
//     let result = undefined;
//     const leftTraversal = (node, pointer = null) => {
//         if (!node || result) return;
//         leftTraversal(node.left, pointer);
//         if (pointer === null && !node.left) result = node;
//         else if (node === pointer) result = null;
//         else if (result === null) result = node;
//         leftTraversal(node.right, pointer);
//     };
//     leftTraversal(this.root, pointer);
//     return result;
// };
