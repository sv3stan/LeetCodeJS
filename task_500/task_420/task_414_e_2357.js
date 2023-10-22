// Вам дан неотрицательный целочисленный массив чисел.
// За одну операцию необходимо:
// Выберите целое положительное число x такое, чтобы x 
// было меньше или равно наименьшему ненулевому элементу в nums.
// Вычтите x из каждого положительного элемента в числах.
// Возвращает минимальное количество операций, 
// чтобы каждый элемент в nums был равен 0.
// 2357

nums = [1, 5, 0, 4, 5]
//nums = [0]

var minimumOperations = function (nums) {
    let answer = 0;
    while (nums.some(num => num !== 0)) {
        let min = Infinity;
        for (const item of nums) (item !== 0 && item < min) ? min = item : min;
        for (let i = 0; i < nums.length; i++) if (nums[i] !== 0) nums[i] -= min;
        answer++;
    }
    return answer;
};


console.log(minimumOperations(nums))
