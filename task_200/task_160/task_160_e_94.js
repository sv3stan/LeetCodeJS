// Учитывая корень бинарного дерева, вернуть неупорядоченный обход значений его узлов.
// 94

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//root = [1, null, 2, 3]
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));

var inorderTraversal = function (root) {

    function inorderHelper(node, result) {
        if (node == null) {
            return; // Если узел пустой, выходим из функции
        }

        // Рекурсивно обходим левое поддерево
        inorderHelper(node.left, result);

        // Добавляем значение текущего узла в список
        result.push(node.val);

        // Рекурсивно обходим правое поддерево
        inorderHelper(node.right, result);
    }


    const tree = [];
    inorderHelper(root, tree); // Вызов вспомогательной функции
    return tree;
};


console.log(inorderTraversal(root))