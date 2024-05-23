'use strict';
/*
Сумма XOR массива определяется как побитовое XOR всех его элементов или 0, если массив пуст.
Например, сумма XOR массива [2,5,6] равна 2 XOR 5 XOR 6 = 1.
Учитывая массив чисел, верните сумму всех итогов XOR для каждого подмножества чисел.
Примечание. Подмножества с одинаковыми элементами следует учитывать несколько раз.
Массив a является подмножеством массива b, если a можно получить из b, удалив некоторые (возможно, нулевые) элементы b.
*/

let nums = [3, 4, 5, 6, 7, 8];
nums = [5, 1, 6];

let subsetXORSum = function (nums) {
    // let sum = 0;
    // function helper(current, start) {
    //     for (let i = start; i < nums.length; i++) {
    //         current.push(nums[i]);
    //         helper(current, i + 1);
    //         current.pop();
    //     }
    //     sum += current.reduce((acc, item) => acc ^ item, 0);
    // }
    // helper([], 0);
    // return sum;

    let sum = 0;

    function helper(current, start) {
        for (let i = start; i < nums.length; i++) {
            current ^= nums[i];
            helper(current, i + 1);
            current ^= nums[i];
        }
        sum += current;
    }

    helper(0, 0);
    return sum;
};

console.log(subsetXORSum(nums));
