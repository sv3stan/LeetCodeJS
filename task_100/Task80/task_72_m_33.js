// Существует целочисленный массив nums, отсортированный в порядке возрастания(с различными значениями).
// Перед тем, как быть переданным вашей функции, nums, возможно, вращается с неизвестным опорным индексом k(1 <= k < nums.length), 
// так что результирующий массив равен[nums[k], nums[k + 1],... , nums[n - 1], nums[0], nums[1], ..., nums[k - 1]](с индексом 0).
// Например, [0, 1, 2, 4, 5, 6, 7] может быть повернут с поворотным индексом 3 и станет[4, 5, 6, 7, 0, 1, 2].
// Учитывая массив nums после возможного поворота и целочисленную цель, вернуть индекс цели, если он находится в nums, или - 1, если он не в nums.
// Вы должны написать алгоритм со сложностью выполнения O(log n).

//33

//nums = [4, 5, 7, 0, 1, 2];
//nums = [1];
//      0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
nums = [9, 10, 11, 12, 13, 14, 15, 17, 18,  0,  1,  2,  3,  4,  5,  6, 7, 8,];
target =  11;

function search(nums, target) {
    if (nums.length === 0) {
        return -1;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = (left + right) >> 1;

        if (nums[middle] === target) {
            return middle;
        }

        if ((nums[left] <= nums[middle] && nums[left] <= target && target < nums[middle]) ||
            (!(nums[left] <= nums[middle]) && !(nums[middle] < target && target <= nums[right]))) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1;

};

console.log(search(nums, target));






//     let left = 0;
//     let right = nums.length - 1;
//     while (left <= right) {
//         let middle = Math.trunc((left + right) / 2);
//         if (nums[middle] === target) {
//             return middle;
//         }
//         if (nums[left] <= nums[middle]) {
//              if (nums[left] <= target && target < nums[middle]) {
//                  right = middle - 1;
//             } else {
//                 left = middle + 1;
//             }
//         } else {
//              if (nums[middle] < target && target <= nums[right]) {
//                  left = middle + 1;
//             } else {
//                 right = middle - 1;
//             }
//         }
//     }
//    return -1;




















    // let min = 0;
    // let max = nums.length - 1;
    // let middle;
    // middle = Math.trunc((max - min) / 2);
    // console.log(middle + ' - middle');
    // if (nums[middle] === target) { return [middle, nums[middle]]; }
    // while (nums[middle] !== target) {
        
    //     console.log(' ================ ');
    //     console.log(min + ' - min - ' + max + ' - max - ' + middle + ' - middle');
    //     console.log(target + ' - target - ' + nums[middle] + '- nums[middle]) ');
    //     if ((nums[min] <= target) && (target <= nums[middle])) {
    //         console.log(' - 1111 - ');
    //         max = middle - 1;
    //         middle = middle - Math.trunc((max - min) / 2) - 1;
    //      } else {
    //     if (target <= nums[max]) {   
    //  //            if ((nums[middle] <= target) ) {
    //         console.log(' -22222222 - ');
    //         min = middle + 1;
    //         middle = middle + Math.trunc((max - min) / 2) + 1;
    //  //    }
    //     }
    // }
    //     console.log(min + ' - min - ' + max + ' - max - ' + middle + ' - middle');
    //     console.log(nums[min] + ' - nums[min] - ' + nums[max] + ' - nums[max]');
    //     console.log(target + ' - target - ' + nums[middle] + '- nums[middle]) ');   
    //     if (nums[middle] === target) { return [middle, nums[middle]]; }
    // }

    // console.log('middle, nums[middle]');
    // console.log(middle, nums[middle]);
    // return -1;





// if (nums[middle] === target) { return nums[middle]; } else {

//     console.log(target + ' - target - ' + nums[middle] + '- nums[middle]) ');
//     if (target < nums[middle]) {
//         //min = 0;
//         max = middle - 1;
//         console.log(min + ' - min'); console.log(max + ' - max');
//         middle = middle - Math.trunc((max - min) / 2) - 1;
//         console.log(middle + ' - middle');
//     } else {
//         min = middle + 1; max = middle + middle;
//         console.log(min + ' - min - ----------'); console.log(max + ' - max');
//         middle = middle + Math.trunc((max - min) / 2) + 1;
//         console.log(middle + ' - middle');
//     }
// }













//while (nums[middle] !== target) {

    //     if (nums[middle] === target) { return [middle, nums[middle]]; }
    //     console.log(' ================ ');
    //     console.log(min + ' - min - ' + max + ' - max - ' + middle + ' - middle');
    //     console.log(target + ' - target - ' + nums[middle] + '- nums[middle]) ');
    //     if ((nums[min] <= target) && (target <= nums[middle])) {
    //         console.log(' - 1111 - ');
    //         //min = 0; 
    //         max = middle - 1;

    //         middle = middle - Math.trunc((max - min) / 2) - 1;
    //         if (nums[middle] === target) { return [middle, nums[middle]]; }

    //     }
    //     console.log(min + ' - min - ' + max + ' - max - ' + middle + ' - middle');
    //     console.log(nums[min] + ' - nums[min] - ' + nums[max] + ' - nums[max]');
    //     console.log(target + ' - target - ' + nums[middle] + '- nums[middle]) ');

    //     if ((nums[middle] <= target) && (target <= nums[max])) {
    //         console.log(' -22222222 - ');
    //         min = middle + 1;
    //         //max = middle + middle;

    //         middle = middle + Math.trunc((max - min) / 2) + 1;
    //         if (nums[middle] === target) { return [middle, nums[middle]]; }

    //     }
    //     console.log(min + ' - min - ' + max + ' - max - ' + middle + ' - middle');
    //     console.log(target + ' - target - ' + nums[middle] + '- nums[middle]) ');

    //     if ((nums[middle] >= target) && (target <= nums[max])) {
    //         console.log(' -33333333 - ');
    //         min = middle + 1;
    //         //max = middle + middle;

    //         middle = middle + Math.trunc((max - min) / 2) + 1;
    //         if (nums[middle] === target) { return [middle, nums[middle]]; }

    //     }




    //     console.log(min + ' - min - ' + max + ' - max - ' + middle + ' - middle');
    //     console.log(target + ' - target - ' + nums[middle] + '- nums[middle]) ');



    // }












       // while (nums[middle] !== target) {

    //     if (nums[middle] === target) { return [middle, nums[middle]]; }
    //     console.log(' ================ ');
    //     console.log(min + ' - min - ' + max + ' - max - ' + middle + ' - middle');
    //     console.log(target + ' - target - ' + nums[middle] + '- nums[middle]) ');
    //     if ((nums[min] <= target) && (target <= nums[middle])) {
    //         console.log(' - 1111 - ');
    //         //min = 0; 
    //         max = middle - 1;

    //         middle = middle - Math.trunc((max - min) / 2) - 1;
    //         if (nums[middle] === target) { return [middle, nums[middle]]; }

    //     } else {
    //     console.log(min + ' - min - ' + max + ' - max - ' + middle + ' - middle');
    //     console.log(nums[min] + ' - nums[min] - ' + nums[max] + ' - nums[max]');
    //     console.log(target + ' - target - ' + nums[middle] + '- nums[middle]) ');


    //     if (target <= nums[max]) {   


    //              if ((nums[middle] <= target) ) {
    //         console.log(' -22222222 - ');
    //         min = middle + 1;
    //         //max = middle + middle;

    //         middle = middle + Math.trunc((max - min) / 2) + 1;
    //         if (nums[middle] === target) { return [middle, nums[middle]]; }

    //     }
    //     else {
    //         console.log(' -33333333 - ');
    //         min = middle + 1;
    //         //max = middle + middle;

    //         middle = middle + Math.trunc((max - min) / 2) + 1;
    //         if (nums[middle] === target) { return [middle, nums[middle]]; }

    //     }

    //     }
    // }
    //     console.log(min + ' - min - ' + max + ' - max - ' + middle + ' - middle');
    //     console.log(target + ' - target - ' + nums[middle] + '- nums[middle]) ');

    // }