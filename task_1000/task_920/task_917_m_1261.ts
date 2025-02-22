/**
Учитывая бинарное дерево со следующими правилами: root.val == 0 Для любого TreeNode: Если TreeNode.val имеет значение x и treeNode.left! = Null, то TreeNode.left.val == 2 * x + 1 Если TreeNode.val имеет значение x и treeNode.right! = Null, то TreeNode.right.val == 2 * x + 2 Теперь двоичное дерево загрязнено, что означает, что все TreeNode.val были изменены на -1. Реализовать класс Findelements: Findelements (TreeNode* корень) инициализирует объект с загрязненным двоичным деревом и восстанавливает его. Bool Find (int target) возвращает True, если целевое значение существует в восстановленном двоичном дереве.
 */

class FindElements {
    private values: Set<number>;

    constructor(root: TreeNode | null) {
        this.values = new Set<number>();
        if (root) {
            this.recoverTree(root, 0);
        }
    }

    private recoverTree(node: TreeNode | null, value: number): void {
        if (!node) {
            return;
        }

        node.val = value;

        this.values.add(value);

        if (node.left) {
            this.recoverTree(node.left, 2 * value + 1);
        }

        if (node.right) {
            this.recoverTree(node.right, 2 * value + 2);
        }
    }

    find(target: number): boolean {
        return this.values.has(target);
    }
}
