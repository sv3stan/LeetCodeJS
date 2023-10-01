// Вор снова нашел себе новое место для своего воровства.В эту область есть только один вход, называемый корнем.
// Помимо корня, каждый дом имеет один и только один родительский дом.После экскурсии умный вор понял, 
// что все дома в этом месте образуют бинарное дерево.Он автоматически свяжется с полицией, 
// если в одну ночь были взломаны два напрямую связанных дома.
// Учитывая корень двоичного дерева, верните максимальную сумму денег, которую вор может украсть, не предупредив полицию.
// 337



function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// root = [3, 2, 3, null, 3, null, 1]
const root = new TreeNode(3);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(1);



var rob = function (root) {
    function Info(maxSumWithRoot, maxSumWithoutRoot) {
        return [maxSumWithoutRoot, maxSumWithRoot];
    }

    function getMaxSum(node) {
        if (node === null) {
            return Info(0, 0);
        }
        const left = getMaxSum(node.left);
        const right = getMaxSum(node.right);
        const maxSumWithRoot = node.val + left[0] + right[0];
        const maxSumWithoutRoot = Math.max(left[1], left[0]) + Math.max(right[1], right[0]);
        return Info(maxSumWithRoot, maxSumWithoutRoot);
    }
    const result = getMaxSum(root);
    return Math.max(result[0], result[1]);
};





console.log(rob(root))




















//struct Info{

//     int maxSum;
//     int maxSumNoRoot;
// }
// Info getMaxSum(TreeNode* node){
//     if (node == nullptr){
//         return Info(0,0);
//     }
// }
// Info left = getMaxListeners(node-> left);
// Info right = getMaxListeners(node -> right);
// int withRoot = node->val + left.maxSumNoRoot +right.maxSumNoRoot;
// int withoutRoot = left.maxSum + right.maxSum;
// return Info(max(withRoot, withoutRoot), withRoot);
// }
