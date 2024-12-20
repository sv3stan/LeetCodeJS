/**
Учитывая корень идеального двоичного дерева, поменяйте местами значения узлов на каждом нечетном уровне дерева. Например, предположим, что значения узла на уровне 3 равны [2,1,3,4,7,11,29,18], тогда оно должно стать [18,29,11,7,4,3,1,2] . Вернуть корень перевернутого дерева. Бинарное дерево идеально, если все родительские узлы имеют по два дочерних узла и все листья находятся на одном уровне. Уровень узла — это количество ребер на пути между ним и корневым узлом.
 */

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const reverseLevels = (
        left: TreeNode | null,
        right: TreeNode | null,
        level: number,
    ): void => {
        if (!left || !right) return;

        if (level % 2 === 1) {
            [left.val, right.val] = [right.val, left.val];
        }
        reverseLevels(left.left, right.right, level + 1);
        reverseLevels(left.right, right.left, level + 1);
    };

    reverseLevels(root.left, root.right, 1);
    return root;
}
