// Учитывая целочисленный массив nums, элементы которого отсортированы в порядке возрастания, 
// преобразуйте его в сбалансированный по высоте  двоичное дерево поиска.
// 108


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const util = require('util');
util.inspect.defaultOptions.depth = null;

nums = [-10, -3, 0, 5, 9]


var sortedArrayToBST = function (nums) {

    if (nums.length === 0) {
        return null; // Пустой массив, возвращаем null
    }

    // Находим средний элемент
    const middle = nums.length >> 1;
    const root = new TreeNode(nums[middle]);

    // Рекурсивно строим левое и правое поддеревья
    root.left = sortedArrayToBST(nums.slice(0, middle));
    root.right = sortedArrayToBST(nums.slice(middle + 1));

    return root;

};


console.log(sortedArrayToBST(nums))