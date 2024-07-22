/**
Вам предоставлены описания двухмерного целочисленного массива, где описания[i] = [parenti, childi, isLefti] указывают, что родительский элемент является родительским для дочернего элемента в двоичном дереве уникальных значений. Более того, Если isLefti == 1, то childi является левым дочерним элементом родительского элемента.
Если isLefti == 0, то childi является правым дочерним элементом родительского элемента.
Постройте двоичное дерево, описанное описаниями, и верните его корень.
Тестовые случаи будут созданы таким образом, чтобы двоичное дерево было допустимым.
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

descriptions = [
    [20, 15, 1],
    [20, 17, 0],
    [50, 20, 1],
    [50, 80, 0],
    [80, 19, 1],
];

let createBinaryTree = function (descriptions) {
    const node = new Map();
    const childs = new Set();

    for (const [parent, child, isLeft] of descriptions) {
        if (!node.has(parent)) {
            node.set(parent, new TreeNode(parent));
        }
        if (!node.has(child)) {
            node.set(child, new TreeNode(child));
        }
        childs.add(child);
    }

    let root = null;

    for (const [parent] of descriptions) {
        if (!childs.has(parent)) {
            root = node.get(parent);
            break;
        }
    }

    for (const [parent, child, isLeft] of descriptions) {
        const parentNode = node.get(parent);
        const childNode = node.get(child);
        if (isLeft === 1) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }
    }

    return root;
};

console.log(createBinaryTree(descriptions));
