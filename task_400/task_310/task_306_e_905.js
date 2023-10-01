// Учитывая целочисленный массив nums, переместите все четные целые 
// числа в начало массива, за которыми следуют все нечетные целые числа.
// Верните любой массив, удовлетворяющий этому условию.
// 905


nums = [3, 1, 2, 5, 7, 6, 8, 9, 11, 12];
//nums = [0];
//nums = [0, 2, 4];

var sortArrayByParity = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    //if (right === 0) return nums;

    while (left < right) {
        // Ищем первое нечетное число с начала массива
        while (nums[left] % 2 === 0 && left < right) {
            left++;
        }

        // Ищем первое четное число с конца массива
        while (nums[right] % 2 === 1 && left < right) {
            right--;
        }

        // Если left < right, меняем местами числа на этих позициях
        if (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    return nums
};


console.log(sortArrayByParity(nums))




// //let i = 0;
// //let right = nums.length - 1;
// const answer = [];



// for (let i = 0; i < nums.length; i++) {


//     if (!(nums[i] & 1 === 1)) {
//         console.log(nums[i])
//         answer.push(nums[i])
//         nums.splice(i, 1)
//         i--
//     }

//     //i++;
//     // right--;
//     console.log(nums)
//     console.log(answer)
// }

// answer.push(...nums);
// console.log(answer)
// return answer;