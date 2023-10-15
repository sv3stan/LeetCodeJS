// Вам дано целое число n и целое число start.
// Определите массив nums, где nums[i] = start + 2 * i
// (с индексом 0) и n == nums.length.
// Возвращает побитовое исключающее ИЛИ всех элементов чисел.
// 1486


n = 4, start = 3
n = 5, start = 0


var xorOperation = function (n, start) {

    //  const arr = [];
    let xorSum = 0;
    for (let i = 0; i < n; i++) {

        //  arr.push(start + i * 2)
        xorSum ^= start + i * 2;
        // console.log(sum)
    }
    return xorSum;

};


console.log(xorOperation(n, start))

