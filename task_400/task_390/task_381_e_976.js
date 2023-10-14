// Учитывая целочисленный массив nums, верните наибольший периметр 
// треугольника с ненулевой площадью, образованный из трех из этих длин.
// Если невозможно сформировать треугольник ненулевой площади, верните 0.
// 976

nums = [2, 1, 2];
//nums = [9, 8, 7, 6, 5, 4, 3];
//nums = [1, 2, 1, 10]
var largestPerimeter = function (nums) {

    // // const sorted = nums.sort((a, b) => b - a)

    // let max = 0;
    // for (let i = 0; i < nums.length - 2; i++) {
    //     for (let j = i + 1; j < nums.length - 1; j++) {
    //         for (let k = nums.length - 1; k > j; k--) {
    //             console.log(nums[i] + ' - i - ' + nums[j] + ' - j - ' + nums[k] + ' - k - ')
    //             if (nums[i] + nums[j] + nums[k] > max && nums[i] + nums[j] > nums[k]) {
    //                 console.log('++++++++++++')
    //                 max = nums[k] + nums[j] + nums[i];
    //                 break;
    //             }

    //         }
    //     }
    // }


    // return max;
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }

    return 0;


};



console.log(largestPerimeter(nums))