// Учитывая целочисленный массив nums, переместите все 0 в его конец, 
// сохраняя относительный порядок ненулевых элементов.
// Обратите внимание, что вы должны сделать это на месте, не создавая копию массива.
// 283


let nums = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
    // let elements = [];
    // let left = 0;
    // let right = 1;

    // while (left <= nums.length || right <= nums.length) {
    //     console.log(left + ' -- ' + right);
    //     if (nums[left] == 0) {
    //         nums.splice(left, 1);
    //         nums.push(0);
    //         left += 2;
    //     } else {
    //         left += 2;
    //     }
    //     if (nums[right] == 0) {
    //         nums.splice(right, 1)[0];
    //         nums.push(0);
    //         right += 2;
    //     } else {
    //         right += 2;
    //     }

    // }
    // console.log(elements);
    // nums.push(...elements);
    let left = 0;
    let right = 0;
    while (right < nums.length) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
    return nums;
};

console.log(moveZeroes(nums));