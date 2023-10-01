// Учитывая массив положительных целых чисел nums и target положительного целого числа, 
// верните минимальную длину подмассив сумма которых больше или равна target.
// Если такого подмассива нет, вместо него верните 0.
// 209


target = 7, nums = [2, 3, 1, 2, 4, 3];
//target = 4, nums = [1, 4, 4]
//target = 11, nums = [1, 1, 1, 1, 1, 1, 1, 1]

var minSubArrayLen = function (target, nums) {


    let slow = 0; // Левый указатель
    let length = Infinity; // Изначально устанавливаем минимальную длину как бесконечность
    let sum = 0; // Текущая сумма подмассива

    for (let fast = 0; fast < nums.length; fast++) {
        sum += nums[fast]; // Добавляем значение nums[fast] к текущей сумме

        while (sum >= target) {
            // Если текущая сумма стала больше или равной целевой сумме
            length = Math.min(length, fast - slow + 1); // Обновляем минимальную длину
            sum -= nums[slow]; // Убираем значение nums[slow] из текущей суммы
            slow++; // Увеличиваем левый указатель
        }
    }

    return length !== Infinity ? length : 0;

};


console.log(minSubArrayLen(target, nums))










// let end = 0;
// let sum = 0;
// let minCount = 1000;
// let count = 0;
// for (let i = 0; i < nums.length; i++) {

//     while (sum < target) {

//         sum += nums[i];
//         i++


//     }

//     console.log(nums[i] + ' - nums[i] - ' + sum + ' - sum - ')

//     count = i - end;
//     minCount = Math.min(minCount, count)
//     console.log(i + ' - i - ' + count + ' - count - ')

//     while (sum > target) {

//         sum -= nums[end];
//         end++;
//         i--;

//     }

//     console.log(nums[end] + ' - nums[end] - ' + sum + ' - sum - ')


//     count = i - end + 1;
//     minCount = Math.min(minCount, count)
//     console.log(i + ' - i - ' + count + ' - count - ')
//     console.log(minCount + ' - minCount -  ')
// }


// return minCount;


