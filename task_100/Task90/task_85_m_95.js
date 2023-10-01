// Для заданного целого числа n вернуть все структурно уникальные BST(бинарные деревья поиска), 
// которые имеют ровно n узлов с уникальными значениями от 1 до n.Верните ответ в любом порядке.
// 95
n = 3;


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var generateTrees = function (n) {
    function helper(start, end) {
        if (start > end) {
            return [null];
        }
        const allTrees = [];
        for (let i = start; i <= end; i++) {
            const leftSubtrees = helper(start, i - 1);
            const rightSubtrees = helper(i + 1, end);
            for (const leftTree of leftSubtrees) {
                for (const rightTree of rightSubtrees) {
                    const root = new TreeNode(i);
                    root.left = leftTree;
                    root.right = rightTree;
                    allTrees.push(root);
                }
            }
        }
        return allTrees;
    }
    return helper(1, n);
};
console.log(generateTrees(n));




















    // function generate(start, end) {
    //     const allTrees = [];
    //     if (start > end) {
    //         allTrees.push(null); // Добавляем null для представления пустого поддерева
    //         return allTrees;
    //     }

    //     for (let i = start; i <= end; i++) {
    //         console.log(i)
    //         const leftSubtrees = generate(start, i - 1);

    //         const rightSubtrees = generate(i + 1, end);

    //         for (const left of leftSubtrees) {
    //             console.log('leftSubtrees')
    //             console.log(leftSubtrees)
    //             for (const right of rightSubtrees) {
    //                 console.log('rightSubtrees')
    //                 console.log(rightSubtrees)
    //                 const root = [i, left, right]; // Создаем дерево в виде массива
    //                 allTrees.push(root);
    //             }
    //         }
    //     }

    //     return allTrees;
    // }

    // return generate(1, n);