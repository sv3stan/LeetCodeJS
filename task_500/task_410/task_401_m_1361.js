// У вас есть n узлов двоичного дерева с номерами от 0 до n - 1, 
// где узел i имеет двух дочерних элементов leftChild[i] и rightChild[i], 
// возвращает true тогда и только тогда, когда все заданные узлы 
// образуют ровно одно допустимое двоичное дерево.
// Если у узла i нет левого дочернего элемента, то leftChild[i] будет 
// равен - 1, аналогично для правого дочернего элемента.
// Обратите внимание, что узлы не имеют значений и в этой 
// задаче мы используем только номера узлов.
// 1361

n = 4, leftChild = [1, -1, 3, -1], rightChild = [2, -1, -1, -1]

var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
    const child = new Set([...leftChild, ...rightChild]);
    let root = null;
    for (let i = 0; i < n; i++) {
        if (!child.has(i)) {
            root = i;
            break;
        }
    }

    // The binary tree have a root (root has no parent)
    if (root === null) {
        return false;
    }

    const visit = new Set([root]);
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        for (const child of [leftChild[node], rightChild[node]]) {
            if (child == -1) continue;

            // Every node have 1 parent + There are no cycle
            if (visit.has(child)) {
                return false;
            }

            stack.push(child);
            visit.add(child);
        }
    }

    // Every node must be connected
    return visit.size == n;
};


console.log(validateBinaryTreeNodes(n, leftChild, rightChild))