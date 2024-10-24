/**
Учитывая корень двоичного дерева, замените значение каждого узла в дереве суммой значений всех его родственников.
Два узла двоичного дерева являются двоюродными братьями, если они имеют одинаковую глубину и имеют разных родителей.
Вернуть корень измененного дерева.
Обратите внимание, что глубина узла — это количество ребер на пути от корневого узла до него.
 */

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null; // Если дерево пустое, возвращаем null

    const queue: TreeNode[] = []; // Очередь для обхода дерева
    const sums: number[] = []; // Массив для хранения суммы значений узлов на каждом уровне

    // Первый проход по дереву для вычисления суммы значений узлов на каждом уровне
    queue.push(root); // Начинаем обход с корня

    while (queue.length) {
        const levelSize = queue.length; // Количество узлов на текущем уровне
        let levelSum = 0; // Сумма значений узлов на текущем уровне

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift(); // Извлекаем текущий узел из очереди
            levelSum += currentNode!.val; // Добавляем его значение к сумме уровня

            // Добавляем его детей в очередь для обхода следующего уровня
            if (currentNode!.left) queue.push(currentNode!.left);
            if (currentNode!.right) queue.push(currentNode!.right);
        }

        sums.push(levelSum); // Запоминаем сумму значений узлов текущего уровня
    }

    // Второй проход по дереву для обновления значений узлов
    let level = 1; // Начинаем с уровня 1, так как значение корня должно стать 0
    queue.push(root);

    while (queue.length) {
        const levelSize = queue.length; // Количество узлов на текущем уровне

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift(); // Извлекаем текущий узел

            const currentLevelSum = sums[level]; // Сумма значений узлов на текущем уровне

            // Вычисляем сумму значений родных братьев (siblingSum)
            let siblingSum = 0;
            if (currentNode!.left && currentNode!.right) {
                siblingSum = currentNode!.left.val + currentNode!.right.val;
            } else if (currentNode!.left) {
                siblingSum = currentNode!.left.val;
            } else if (currentNode!.right) {
                siblingSum = currentNode!.right.val;
            }

            // Обновляем значения детей текущего узла
            if (currentNode!.left) {
                queue.push(currentNode!.left);
                currentNode!.left.val = currentLevelSum - siblingSum;
            }

            if (currentNode!.right) {
                queue.push(currentNode!.right);
                currentNode!.right.val = currentLevelSum - siblingSum;
            }
        }

        level++; // Переходим на следующий уровень
    }

    root.val = 0; // Значение корня всегда становится 0
    return root; // Возвращаем модифицированное дерево
}
