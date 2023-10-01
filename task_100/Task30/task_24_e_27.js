// Учитывая целочисленный массив nums и целочисленное val, 
// удалите все вхождения val в nums на месте.Порядок элементов 
// может быть изменен.Затем верните количество элементов в nums, 
// которые не равны val.
// Рассмотрим количество элементов в nums, которые не равны val be k, 
// чтобы вас приняли, вам нужно сделать следующее:
// Измените массив nums так, чтобы первые k элементов nums содержали элементы, 
// не равные val.Остальные элементы nums не важны, как и размер nums.
// Вернуться к.
//27

//let nums = [3, 2, 2, 3];
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

function removeElement(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        //console.log(nums);
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        } else {
            left++;
        }
    }
    console.log(nums);
    return left;
};

console.log(removeElement(nums, val));












// while (right < nums.length) {
//     if (nums[right] !== val) {
//         [nums[left], nums[right]] = [nums[right], nums[left]];
//         left++;
//     }
//     right++;
// }
// right = nums.length - 1;
// while (nums[right] == val) {
//     nums.pop();
//     right--
// }
// console.log(nums);
// return nums.length;