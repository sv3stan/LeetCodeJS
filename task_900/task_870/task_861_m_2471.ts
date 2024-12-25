/**
Вам дан корень двоичного дерева с уникальными значениями. За одну операцию вы можете выбрать любые два узла одного уровня и поменять их значения. Возвращает минимальное количество операций, необходимое для сортировки значений на каждом уровне в строго возрастающем порядке. Уровень узла — это количество ребер на пути между ним и корневым узлом.
 */

function minSwapsToSort(arr: number[]): number {
    const n = arr.length;
    const indexedArray = arr.map(
        (val, index) => [val, index] as [number, number],
    );
    indexedArray.sort((a, b) => a[0] - b[0]);

    const visited = Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i] || indexedArray[i][1] === i) continue;

        let cycleSize = 0;
        let j = i;

        while (!visited[j]) {
            visited[j] = true;
            j = indexedArray[j][1];
            cycleSize++;
        }

        if (cycleSize > 1) swaps += cycleSize - 1;
    }

    return swaps;
}

function minimumOperations(root: TreeNode | null): number {
    if (!root) return 0;

    const levels: number[][] = [];
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            currentLevel.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        levels.push(currentLevel);
    }

    let operations = 0;
    for (const level of levels) {
        operations += minSwapsToSort(level);
    }

    return operations;
}
