/**
Вам дан корень двоичного дерева и целое положительное число k.
Сумма уровней в дереве — это сумма значений узлов, находящихся на одном уровне.
Возвращает k-ю наибольшую сумму уровня в дереве (не обязательно различную). Если в дереве меньше k уровней, верните -1.
Обратите внимание, что два узла находятся на одном уровне, если они находятся на одинаковом расстоянии от корня.
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const root = new TreeNode(5);
const node1 = new TreeNode(8);
const node2 = new TreeNode(9);
const node3 = new TreeNode(2);
const node4 = new TreeNode(1);
const node5 = new TreeNode(4);
const node6 = new TreeNode(6);
const node7 = new TreeNode(3);
const node8 = new TreeNode(7);

// Связываем узлы
root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.left = node7;
node2.right = node8;
node3.left = node5;
node3.right = node6;

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
    if (!root) return -1;

    const sums: number[] = [];
    const queue: { node: TreeNode; level: number }[] = [
        { node: root, level: 0 },
    ];

    // BFS (обход дерева по уровням)
    while (queue.length > 0) {
        const size = queue.length;
        let currentSum = 0;

        for (let i = 0; i < size; i++) {
            const { node } = queue.shift()!; // Извлекаем узел

            // Добавляем значение узла к текущей сумме уровня
            currentSum += node.val;

            // Добавляем детей в очередь
            if (node.left) queue.push({ node: node.left, level: 0 });
            if (node.right) queue.push({ node: node.right, level: 0 });
        }

        // Добавляем сумму для текущего уровня
        sums.push(currentSum);
    }

    // Сортируем суммы по убыванию
    sums.sort((a, b) => b - a);

    // Возвращаем k-ю наибольшую сумму уровня (если существует)
    return k <= sums.length ? sums[k - 1] : -1;
}

console.log(kthLargestLevelSum(root));
