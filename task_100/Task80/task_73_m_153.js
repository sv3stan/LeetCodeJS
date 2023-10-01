// Предположим, что массив длины n, отсортированный в порядке возрастания, вращается от 1 до n раз.
// Например, массив nums = [0, 1, 2, 4, 5, 6, 7] может стать следующим:
// [4, 5, 6, 7, 0, 1, 2], если он был повернут 4 раза.
// [0, 1, 2, 4, 5, 6, 7], если он был повернут 7 раз.
// Обратите внимание, что поворот массива[a[0], a[1], a[2], ..., a[n - 1]]1 раз приводит к массиву[a[n - 1], a[0], а[1], а[2], ..., а[n - 2]].
// Учитывая число уникальных элементов отсортированного повернутого массива, вернуть минимальный элемент этого массива.
// Вы должны написать алгоритм, который работает за время O(log n).

//153

//nums = [4, 5, 6, 7, 0, 1, 2];
//nums = [9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 1, 2, 3, 4, 5, 6, 7, 8];
nums = [9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 0, 1, 3, 4, 5, 6, 7, 8];

//
function findMin(nums) {
    // let middle;
    // let left = 0;
    // let right = nums.length - 1;
    // while (left < right) {
    //     middle = Math.trunc((left + right) / 2);
    //     console.log(left + ' - left - ' + middle + ' - middle - ' + right + ' - right - ');
    //     console.log(nums[left] + ' - nums[left] - ' + nums[middle] + ' - nums[middle] - ' + nums[right] + ' - nums[right] - ');
    //     if (nums[left] < nums[right]) {
    //         if (nums[left] < nums[middle]) {
    //             right = middle - 1;
    //         } else {
    //             left = middle + 1;
    //         }
    //     } else {
    //         if (nums[middle] < nums[right]) {
    //             right = middle - 1;
    //         } else {
    //             left = middle + 1;
    //         }
    //     }

    if (nums.length === 1) {
        return nums[0];
    }

    let minIndex;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        minIndex = Math.trunc((left + right) / 2);

        if (nums[minIndex] < nums[right]) {
            right = minIndex;
        } else {
            left = minIndex + 1;
        }
    }

    return nums[left];


    // }
    // // middle = Math.trunc((left + right) / 2);
    // //console.log(left + ' - left - ' + middle + ' - middle - ' + right + ' - right - ');
    // return nums[middle];


};




console.log(findMin(nums));











// function findMin(nums) {
//     let middle;
//     let left = 0;
//     let right = nums.length - 1;
//     while (left !== right) {

//         middle = Math.trunc((left + right) / 2);
//         console.log(left + ' - left - ' + middle + ' - middle - ' + right + ' - right - ');
//         console.log(nums[left] + ' - nums[left] - ' + nums[middle] + ' - nums[middle] - ' + nums[right] + ' - nums[right] - ');
//         if (nums[left] <= nums[middle]) {

//             left = middle + 1;

//         } else {
//             //if (nums[middle] < target && target <= nums[right]) {
//             right = middle - 1;
//             //}
//         }
//     }
//     return nums[middle];


// };









        // if (nums[left] <= nums[middle]) {
        //     if (nums[left] <= nums[middle]) {
        //         right = middle;
        //     } else {
        //         left = middle;
        //     }
        // } else {
        //     if (nums[middle] <= nums[right]) {
        //         left = middle;
        //     } else {
        //         right = middle;
        //     }
        // }
