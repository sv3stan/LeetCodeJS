// Учитывая массив целых чисел, вычислить опорный индекс этого массива.
// Сводной индекс — это индекс, в котором сумма всех чисел строго слева от индекса равна сумме всех чисел строго справа от индекса.
// Если индекс находится на левом краю массива, то левая сумма равна 0, потому что слева нет элементов.Это также относится к правому краю массива.
// Возвращает самый левый опорный индекс.Если такого индекса не существует, вернуть - 1.
// 724

nums = [1, 7, 3, 6, 5, 6]
//nums = [2, 1, -1]
var pivotIndex = function (nums) {

    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        //const rightSum = totalSum - nums[i] - leftSum;

        if (leftSum === totalSum - nums[i] - leftSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};


console.log(pivotIndex(nums))