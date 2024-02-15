// Вам дан массив целых положительных чисел nums длины n.
//     Многоугольник – это замкнутая плоская фигура, имеющая не менее трех сторон.
// Самая длинная сторона многоугольника меньше суммы других его сторон.
// И наоборот, если у вас есть k(k >= 3) положительных действительных 
// чисел a1, a2, a3, ..., ak, где a1 <= a2 <= a3 <= ... <= ak и a1 + a2 + a3 + . .. + ak - 1 > ak,
//     то всегда существует многоугольник с k сторонами, длины которого равны a1, a2, a3, ..., ak.
// Периметр многоугольника – это сумма длин его сторон.
// Возвращает максимально возможный периметр многоугольника,
//     стороны которого могут быть образованы числами, или - 1, если создать многоугольник невозможно.

// 2971

nums = [1, 12, 1, 2, 5, 50, 3]

// nums = [5, 5, 5]

// nums = [2, 5, 50]

var largestPerimeter = function (nums) {

    nums.sort((a, b) => b - a)
    console.log(nums)
    let sum = nums.reduce((acc, item) => acc += item, 0)

    console.log(sum)

    //sum -= nums[nums.length - 1];
    for (let i = 0; i < nums.length; i++) {

        // sum -= nums[i + 1];
        console.log(sum + ' - sum - ' + nums[i])

        if ((sum - nums[i]) <= nums[i]) {
            sum = sum - nums[i];
            console.log('========')
        } else {
            return sum;
        }
        console.log(sum + ' --- ')
    }

    return sum > 0 ? sum : -1;

};


console.log(largestPerimeter(nums))