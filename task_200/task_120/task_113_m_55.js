// Вам дан целочисленный массив nums.Изначально вы находитесь в первом индексе массива, 
// и каждый элемент массива представляет максимальную длину прыжка в этой позиции.
// Верните true, если вы можете добраться до последнего индекса, или false в противном случае.
// 55

//let = nums = [2, 3, 1, 1, 4];

nums = [3, 2, 1, 0, 4];
nums = [1]
nums = [2, 0]


function canJump(nums) {

    if (nums.length === 1) return true;

    let end = 0;
    let max = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i]);

        if (i === end) {
            end = max;
            console.log(end + ' - end - ' + nums.length + ' - nums.length')
            if (end >= nums.length - 1) return true;

        }
    }

    return false;
};

console.log(canJump(nums))