/*
Вам дан корень двоичного дерева с n узлами, где каждый узел дерева имеет монеты node.val. Всего во всем дереве находится n монет.
За один ход мы можем выбрать два соседних узла и переместить одну монету из одного узла в другой. Перемещение может осуществляться от родителя к дочернему элементу или от дочернего элемента к родительскому.
Возвращает минимальное количество ходов, необходимое для того, чтобы в каждом узле была ровно одна монета.
*/

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(3);
const node1 = new TreeNode(0);
const node2 = new TreeNode(0);

// Связываем узлы
root.left = node1;
root.right = node2;

let distributeCoins = function (root) {
    let moves = 0;
    function dfs(node) {
        if (!node) return 0;
        let left = dfs(node.left);
        let right = dfs(node.right);
        moves += Math.abs(left) + Math.abs(right);
        return node.val - 1 + left + right;
    }
    dfs(root);
    return moves;
};

console.log(distributeCoins(root));
