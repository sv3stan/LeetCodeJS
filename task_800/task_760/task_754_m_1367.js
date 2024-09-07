/*
Дан корень двоичного дерева и связанный список с головой в качестве первого узла. 
Верните True, если все элементы в связанном списке, начиная с головы, соответствуют некоторому нисходящему пути, соединенному в двоичном дереве, в противном случае верните False.
В этом контексте нисходящий путь означает путь, который начинается в некотором узле и идет вниз.
*/

let isSubPath = function (head, root) {
    // Функция для рекурсивного поиска пути
    function dfs(treeNode, node) {
        if (!node) return true; // Если список пройден, значит, путь найден
        if (!treeNode) return false; // Если дерево закончилось раньше, чем список, путь не найден
        if (treeNode.val !== node.val) return false; // Если значения не совпадают

        // Рекурсивный спуск по левому или правому поддереву
        return dfs(treeNode.left, node.next) || dfs(treeNode.right, node.next);
    }

    // Основная функция, которая рекурсивно обходит дерево
    function check(treeNode) {
        if (!treeNode) return false;
        // Проверяем путь, начиная с текущего узла дерева, или продолжаем поиск в поддеревьях
        return (
            dfs(treeNode, head) || check(treeNode.left) || check(treeNode.right)
        );
    }

    // Начинаем обход дерева с корневого узла
    return check(root);
};

console.log(isSubPath(head, root));
