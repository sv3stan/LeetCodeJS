// Учитывая целочисленный массив nums длины n, где все целые 
// числа nums находятся в диапазоне[1, n] и каждое целое число 
// встречается один или два раза, верните массив всех целых чисел, 
// которые встречаются дважды.
// Вы должны написать алгоритм, который работает за время O(n) и 
// использует только постоянное дополнительное пространство.
// 442

nums = [4, 3, 2, 7, 8, 2, 3, 1]
nums = [1, 1, 2]
nums = [1]

var findDuplicates = function (nums) {

    const hash = new Map();
    const answer = [];

    for (const num of nums) {

        hash.set(num, (hash.get(num) || 0) + 1);

        if (hash.get(num) === 2) answer.push(num);
    }


    console.log(hash)
    return answer;

};


console.log(findDuplicates(nums))