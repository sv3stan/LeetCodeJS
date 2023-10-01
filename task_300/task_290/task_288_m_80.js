// Учитывая числа целочисленного массива, отсортированные в неубывающем порядке, 
// удалите несколько дубликатов на месте так, чтобы каждый уникальный элемент 
// появлялся не более двух раз.Относительный порядок элементов должен оставаться неизменным.
// Поскольку в некоторых языках изменить длину массива невозможно, вместо этого 
// необходимо поместить результат в первую часть массива nums.Более формально, 
// если после удаления дубликатов осталось k элементов, то первые k элементов nums 
// должны содержать окончательный результат.
// Не имеет значения, что вы оставите после первых k элементов.
// Возвращает k после размещения окончательного результата в первых k слотах чисел.
// Не выделяйте дополнительное пространство для другого массива.Вы должны сделать это, 
// изменив входной массив на месте с дополнительной памятью O(1).
// 80

nums = [0, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 5, 5, 5, 6];

var removeDuplicates = function (nums) {

    let index = 0;
    for (let i = 1; i < nums.length; i++) {
        if ((nums[i - 1] === nums[i])) {
            let count = 0;
            while (nums[i - 1] === nums[i]) {
                count++;
                if (count === 2) index = i;
                i++;
            }
            if (count > 1) {
                nums.splice(index, count - 1);
                i -= count;
            }
        } else {
        }
    }
    return nums.length;
};


console.log(removeDuplicates(nums))
















// let isDouble = false;
// let index = 0
// for (let i = 1; i < nums.length; i++) {
//     console.log(i + ' - i - ' + nums[i - 1] + ' - nums[i - 1] - ' + nums[i] + ' - nums[i] - ')
//     if ((nums[i - 1] === nums[i])) {
//         console.log('equal')
//         let count = 0;

//         while (nums[i - 1] === nums[i]) {
//             isDouble = true;

//             count++
//             if (count === 2) index = i;
//             console.log(count)
//             i++
//         }
//         if (count > 1) {
//             nums.splice(index, count - 1);
//             i -= count;
//         }
//     } else {

//         console.log('not equal')
//     }
// }

// console.log(nums)