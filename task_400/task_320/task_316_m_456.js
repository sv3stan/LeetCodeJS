// Учитывая массив из n целых чисел nums, шаблон 132 представляет собой 
// подпоследовательность трех целых чисел nums[i], nums[j] и nums[k] таких, 
// что i < j < k и nums[i] < nums[k] < nums[j].
// Верните true, если в числах есть шаблон 132, в противном случае верните false.
// 456

nums = [3, 1, 4, 2]
//nums = [-1, 3, 2, 0]
//nums = [1, 2, 3, 4]
nums = [3, 5, 0, 3, 4]



nums = [-2, 1, 2, -2, 1, 2]

nums = [2, 3, 5, 6, 4, 1, 2, 2, 4]
nums = [1, 0, 1, -4, -3]

var find132pattern = function (nums) {

    // //console.log(nums[nums.length-27000])
    // const minArr = new Array(nums.length)
    // minArr[0] = nums[0];
    // console.log(minArr)
    // for (let i = 1; i < nums.length; i++) {
    //     minArr[i] = Math.min(minArr[i - 1], nums[i]);
    // }

    // console.log(minArr)
    // const hashTable = new Set();
    // const newArray = [];
    // for (let num of nums) {
    //     if (!hashTable.has(num)) {
    //         newArray.push(num);
    //         hashTable.add(num);
    //     }
    // }
    if (nums.length < 3) {
        return false;
    }

    const length = nums.length;
    const minArr = Array.from({ length: length });

    minArr[0] = nums[0];

    for (let i = 1; i < length; i++) {
        minArr[i] = Math.min(minArr[i - 1], nums[i]);
    }

    console.log(minArr)
    const stack = [];

    for (let j = length - 1; j >= 0; j--) {


        console.log(stack[stack.length - 1] + ' - stack[stack.length - 1] - ' + minArr[j] + ' - minArr[j] - ' + j)
        while (stack.length > 0 && stack[stack.length - 1] <= minArr[j]) {
            stack.pop();
        }
        console.log(stack[stack.length - 1] + ' - stack[stack.length - 1] - ' + nums[j] + ' - nums[j] - ' + j)
        if (stack.length > 0 && stack[stack.length - 1] < nums[j]) {
            return true;
        }

        stack.push(nums[j]);
        console.log(stack)
    }

    return false;


    // for (let i = 1; i <= nums.length; i++) {
    //     newArray.push(nums[i - 1])
    //     if (nums[i - 1] === nums[i]) {
    //         while (nums[i - 1] === nums[i]) {
    //             i++;
    //         }
    //     }
    // }

    // console.log(newArray)



    // for (let i = 0; i < newArray.length - 2; i++) {

    //     for (let j = i + 1; j < newArray.length - 1; j++) {
    //         if (newArray[i] < newArray[j]) {

    //             for (let k = j + 1; k < newArray.length; k++) {

    //                 console.log(newArray[i] + ' -nums[i] -  ' + newArray[k] + ' - nums[k]  - ' + newArray[j] + ' - nums[j] ')
    //                 if (newArray[i] < newArray[k] && newArray[k] < newArray[j]) return true;

    //             }
    //         }
    //     }
    // }



    // for (let i = 0; i < nums.length - 2; i++) {

    //     for (let j = i + 1; j < nums.length - 1; j++) {
    //         if (nums[i] < nums[j]) {

    //             for (let k = j + 1; k < nums.length; k++) {

    //                 console.log(nums[i] + ' -nums[i] -  ' + nums[k] + ' - nums[k]  - ' + nums[j] + ' - nums[j] ')
    //                 if (nums[i] < nums[k] && nums[k] < nums[j]) return true;

    //             }
    //         }
    //     }
    // }

    //return false;
};



console.log(find132pattern(nums))