// Учитывая целочисленный массив nums, верните количество троек, 
// выбранных из массива, из которых можно составить треугольники, 
// если мы возьмем их за длины сторон треугольника.
// 611


nums = [2, 2, 3, 4];
//nums = [4, 2, 3, 4];

var triangleNumber = function (nums) {
    const sorted = nums.sort((a, b) => a - b)
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] > nums[k]) count++;
            }
        }
    }
    return count;

};


console.log(triangleNumber(nums))