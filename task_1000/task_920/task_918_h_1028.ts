/**
Мы запускаем предварительный поиск по глубине глубины (DFS) на корне двоичного дерева. На каждом узле в этом обходе мы выводим D тире (где D - глубина этого узла), тогда мы выводим значение этого узла.  Если глубина узла равен D, глубина его непосредственного ребенка составляет D + 1. Глубина корневого узла составляет 0. Если у узла есть только один ребенок, этот ребенок гарантированно будет левым ребенком. Учитывая выходной проход этого обхода, верните дерево и верните его корень.
 */

function recoverFromPreorder(traversal: string): TreeNode | null {
    const stack: TreeNode[] = [];
    let i = 0;

    while (i < traversal.length) {
        let depth = 0;
        while (traversal[i] === '-') {
            depth++;
            i++;
        }

        let value = 0;
        while (i < traversal.length && /\d/.test(traversal[i])) {
            value = value * 10 + parseInt(traversal[i]);
            i++;
        }

        const node = new TreeNode(value);

        while (stack.length > depth) {
            stack.pop();
        }

        if (stack.length > 0) {
            const parent = stack[stack.length - 1];
            if (!parent.left) {
                parent.left = node;
            } else {
                parent.right = node;
            }
        }

        stack.push(node);
    }

    return stack[0] || null;
}
