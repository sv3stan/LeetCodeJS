// Учитывая корень двоичного дерева, сведите дерево в «связный список»:
// «Связанный список» должен использовать тот же класс TreeNode, 
// где правый дочерний указатель указывает на следующий узел в списке, 
// а левый дочерний указатель всегда имеет значение null.
// «Связанный список» должен располагаться в том же порядке, 
// что и предварительный обход двоичного дерева.
// 114


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

//root = [1, 2, 5, 3, 4, null, 6]

const root = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(5);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(6);
const node6 = new TreeNode(null);


// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node6;
node2.right = node5;

var flatten = function (root) {

    let previousNode = null;
    function permutation(node) {
        if (node === null) return
        permutation(node.right)
        permutation(node.left)
        node.left = null
        node.right = previousNode
        previousNode = node
    }
    return permutation(root)

};

console.log(flatten(root))












//const stack = [];
// // const trie = new TreeNode();

// function dfs(node) {
//     if (!node) return null;
//     //if (node.val !== null) stack.push(node.val)

//     const left = dfs(node.left)
//     const right = dfs(node.right)

//     console.log(node.val)

//     //console.log(left + ' - left - ')

//     //console.log(right + ' - right - ')
//     //console.log(node.val)
//     // return node.val
// }

// dfs(root);
// // console.log(stack)

// // const answer = new TreeNode(stack.shift());
// // let current = answer;

// // while (stack.length) {
// //     //   console.log(stack)
// //     current.right = new TreeNode(stack.shift());
// //     current.left = new TreeNode(null);
// //     //   console.log(current)
// //     current = current.right

// // }
// // //console.log(stack)
// // return answer;
// // console.log(answer)