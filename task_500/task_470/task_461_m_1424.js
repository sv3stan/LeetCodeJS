// Учитывая двумерный целочисленный массив nums, 
// верните все элементы nums в диагональном порядке, 
// как показано на изображениях ниже.
// 1424

nums = [[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]];

var findDiagonalOrder = function (nums) {


    //const answer = new Int32Array(nums.flat().length);
    const answer = [];

    for (let row = 0; row < nums.length; row++) {
        for (let col = 0; col < nums[row].length; col++) {
            const el = nums[row][col];
            if (!el) continue;
            const item = answer[row + col];
            console.log(item)
            item ? item.unshift(el) : answer[row + col] = [el];
        }
    }
    return answer.flat();

};


console.log(findDiagonalOrder(nums))