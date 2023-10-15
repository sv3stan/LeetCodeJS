// Вам дан целочисленный массив чисел.Вам необходимо создать 2D - массив из чисел, 
// удовлетворяющий следующим условиям:
// 2D - массив должен содержать только элементы массива nums.
// Каждая строка двумерного массива содержит отдельные целые числа.
// Количество строк в 2D - массиве должно быть минимальным.
// Верните полученный массив.Если ответов несколько, верните любой из них.
// Обратите внимание, что двумерный массив может иметь разное количество элементов в каждой строке.
// 2610


nums = [1, 3, 4, 1, 2, 3, 1];

var findMatrix = function (nums) {

    // const hash = new Map();
    // const answer = [];
    // for (let i = 0; i < nums.length; i++) hash.set(nums[i], (hash.get(nums[i]) ?? 0) + 1);
    // for (const [key, value] of hash.entries()) {
    //     for (let i = 0; i < value; i++) {
    //         if (!answer[i]) answer[i] = [];
    //         answer[i].push(key);
    //     }
    // }
    // return answer;


    const hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!hash.has(num)) {
            hash.set(num, [num]);
        } else {
            hash.get(num).push(num);
        }
        console.log(hash)
    }
    return [...hash.values()];



};


console.log(findMatrix(nums))