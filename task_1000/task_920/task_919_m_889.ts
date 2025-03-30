/*
Учитывая два целочисленных массива, предварительный заказ и послеказаний, где предварительный заказ является предварительным проходом, двоичного дерева различных значений, а пост -заказ - это прохождение после заказа одного и того же дерева, реконструировать и вернуть двоичное дерево. Если существует несколько ответов, вы можете вернуть любой из них.
 */

function constructFromPrePost(
    preorder: number[],
    postorder: number[],
): TreeNode | null {
    if (preorder.length === 0) return null;

    const rootValue = preorder[0];
    const root = new TreeNode(rootValue);

    if (preorder.length === 1) return root;

    const leftRootValue = preorder[1];

    const leftRootIndexInPost = postorder.indexOf(leftRootValue);

    const leftSize = leftRootIndexInPost + 1;

    root.left = constructFromPrePost(
        preorder.slice(1, 1 + leftSize),
        postorder.slice(0, leftSize),
    );

    root.right = constructFromPrePost(
        preorder.slice(1 + leftSize),
        postorder.slice(leftSize, postorder.length - 1),
    );

    return root;
}
