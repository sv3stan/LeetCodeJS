// Дан массив nums с n объектами, окрашенными в красный, белый или синий цвет, 
// отсортируйте их на месте так, чтобы объекты одного цвета были смежными, 
// а цвета располагались в порядке красный, белый и синий.
// Мы будем использовать целые числа 0, 1 и 2 для обозначения красного, белого и синего цветов соответственно.
// Вы должны решить эту проблему, не используя библиотечную функцию сортировки.
//Дополнение: не могли бы вы придумать однопроходный алгоритм, использующий только постоянное дополнительное пространство ?
//75


//let nums = [2, 0, 2, 2, 0, 1, 0, 1, 2, 0, 1, 1, 1, 0, 2, 0, 2];
let nums = [2, 0, 2, 1, 1, 0];
function sortColors(nums) {

    //let temp = nums.splice(0, 1);
    let i = 0;

    let zero = 0;
    let middle = Math.trunc(nums.length / 2);
    let j = middle;
    console.log(middle);
    while (i < middle || j < nums.length - zero) {
        console.log('===================');
        console.log(i + ' - i - ' + j + ' - j');

        if (nums[i] === 0) { nums.unshift(nums.splice(i, 1)[0]); i++; }
        if (nums[i] === 1) i++;
        if (nums[i] === 2) { nums.push(nums.splice(i, 1)[0]); zero++ }
        console.log(nums);

        if (nums[j] === 0) { nums.unshift(nums.splice(j, 1)[0]); j++; }
        if (nums[j] === 1) j++;
        if (nums[j] === 2) { nums.push(nums.splice(j, 1)[0]); zero++; }
        console.log(nums);


    }
    return nums;

};


console.log(sortColors(nums))

// с хвоста не получилось сделать


// var sortColors = function (nums) {
//     let i = 0;
//     let count = 0;
//     while (i < nums.length - count) {
//         if (nums[i] === 0) { nums.unshift(nums.splice(i, 1)[0]); i++; }
//         if (nums[i] === 1) i++;
//         if (nums[i] === 2) { nums.push(nums.splice(i, 1)[0]); count++ }
//     }
//     return nums;
// };