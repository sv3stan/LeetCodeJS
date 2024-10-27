/*
Вам дан корень двоичного дерева с n узлами. Каждому узлу присваивается уникальное значение от 1 до n. Вам также дан массив запросов размером m.
Вам нужно выполнить m независимых запросов к дереву, где в i-м запросе вы делаете следующее:
Удалите из дерева поддерево с корнем в узле со значением query[i]. Гарантируется, что query[i] не будет равен значению корня.
Вернуть массив ответа размера m, где ответ[i] — высота дерева после выполнения i-го запроса.
Примечание:
Запросы независимы, поэтому после каждого запроса дерево возвращается в исходное состояние.
Высота дерева — это количество ребер на самом длинном простом пути от корня до некоторого узла дерева.
*/

function treeQueries(root: TreeNode | null, queries: number[]): number[] {
    // Массив для хранения высот всех узлов-листьев
    const leafHeights: number[] = new Array(50000).fill(0);

    // Массивы для хранения информации о глубине и границах поддеревьев для каждого узла
    const depth: number[] = new Array(100001).fill(0); // глубина каждого узла
    const leftBoundary: number[] = new Array(100001).fill(0); // начальная граница поддерева
    const rightBoundary: number[] = new Array(100001).fill(0); // конечная граница поддерева

    let leafCount: number = 0; // Счетчик количества листьев в дереве

    // Рекурсивная функция для обхода дерева и сбора данных
    function helper(node: TreeNode, height: number): void {
        // Запоминаем глубину текущего узла
        depth[node.val] = height;

        // Если узел является листом (нет дочерних узлов)
        if (!node.left && !node.right) {
            leafHeights[leafCount] = height; // Сохраняем высоту листа
            leftBoundary[node.val] = rightBoundary[node.val] = leafCount; // Обновляем границы для листа
            leafCount++;
            return;
        }

        // Устанавливаем начальную границу для текущего узла
        leftBoundary[node.val] = leafCount;

        // Обходим левое и правое поддеревья, увеличивая высоту на 1
        if (node.left) helper(node.left, height + 1);
        if (node.right) helper(node.right, height + 1);

        // Устанавливаем конечную границу для текущего узла
        rightBoundary[node.val] = leafCount - 1;
    }

    // Если корень пустой, сразу возвращаем пустой массив
    if (!root) return [];

    // Запускаем рекурсивный обход от корня
    helper(root, 0);

    // Количество листьев в дереве
    const totalLeaves = leafCount;

    // Массивы для хранения максимальных высот слева и справа от узла
    const maxLeftHeight: number[] = new Array(totalLeaves).fill(0);
    const maxRightHeight: number[] = new Array(totalLeaves).fill(0);

    // Вычисляем максимальные высоты для поддеревьев слева и справа
    for (let i = 1; i < totalLeaves; i++) {
        // maxLeftHeight[i] хранит максимальную высоту среди всех листьев слева до i
        maxLeftHeight[i] = Math.max(maxLeftHeight[i - 1], leafHeights[i - 1]);

        // maxRightHeight[i] хранит максимальную высоту среди всех листьев справа от i
        maxRightHeight[totalLeaves - i - 1] = Math.max(
            maxRightHeight[totalLeaves - i],
            leafHeights[totalLeaves - i],
        );
    }

    // Массив для хранения результата высот после обработки запросов
    const result: number[] = [];
    const numQueries = queries.length;

    // Обрабатываем каждый запрос
    for (let i = 0; i < numQueries; i++) {
        // Максимальные высоты от поддеревьев слева и справа от удаляемого поддерева
        const maxHeightLeft = maxLeftHeight[leftBoundary[queries[i]]];
        const maxHeightRight = maxRightHeight[rightBoundary[queries[i]]];

        // Высота дерева после удаления поддерева, начинающегося с queries[i]
        result.push(
            Math.max(
                Math.max(maxHeightLeft, maxHeightRight),
                depth[queries[i]] - 1,
            ),
        );
    }

    return result;
}
