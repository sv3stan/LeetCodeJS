/*
Для двоичного дерева T мы можем определить операцию переворота следующим образом: выбрать любой узел и поменять местами левое и правое дочерние поддеревья.
Бинарное дерево X является флип-эквивалентным бинарному дереву Y тогда и только тогда, когда мы можем сделать X равным Y после некоторого количества операций флип.
Учитывая корни двух двоичных деревьев root1 и root2, верните true, если два дерева эквивалентны, или false в противном случае.
*/

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
    // Если оба дерева пустые, они эквивалентны
    if (!root1 && !root2) return true;

    // Если одно из деревьев пустое или значения корней различны, они не эквивалентны
    if (!root1 || !root2 || root1.val !== root2.val) return false;

    // Рекурсивно проверяем два возможных случая
    const noFlip =
        flipEquiv(root1.left, root2.left) &&
        flipEquiv(root1.right, root2.right);
    const flip =
        flipEquiv(root1.left, root2.right) &&
        flipEquiv(root1.right, root2.left);

    // Если хотя бы один из вариантов возвращает true, деревья эквивалентны
    return noFlip || flip;
}
