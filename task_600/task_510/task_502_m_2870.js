// Вам дан массив чисел с нулевым индексом, 
// состоящий из положительных целых чисел.
// Существует два типа операций, которые можно применять 
// к массиву любое количество раз:
// Выберите два элемента с одинаковыми значениями и удалите их из массива.
// Выберите три элемента с одинаковыми значениями и удалите их из массива.
// Возвращает минимальное количество операций, необходимое для того, 
// чтобы массив стал пустым, или - 1, если это невозможно.

// 2870

nums = [2, 3, 3, 2, 2, 4, 2, 3, 4];

var minOperations = function (nums) {

    const hash = new Map();

    for (let i = 0; i < nums.length; i++) {


        hash.set(nums[i], (hash.get(nums[i]) ?? 0) + 1);


    }

    let answer = 0;
    for (let value of hash.values()) {
        //let t = value;
        if (value === 1) return -1;
        answer += Math.floor(value / 3);
        if (value % 3 !== 0) answer++;
    }

    return answer;


    // console.log(hash)


};

console.log(minOperations(nums))