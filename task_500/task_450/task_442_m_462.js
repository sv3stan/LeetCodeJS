// Учитывая целочисленный массив nums размера n, верните минимальное количество ходов, 
// необходимое для того, чтобы все элементы массива стали равными.
// За один ход вы можете увеличить или уменьшить элемент массива на 1.
// Тестовые примеры разработаны таким образом, что ответ умещается в 32 - битное целое число.
// 462


nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//nums = [1, 10, 2, 9]

var minMoves2 = function (nums) {

    nums.sort((a, b) => a - b);
    const middle = nums[(nums.length >> 1)];
    return nums.reduce((count, item) => count + Math.abs(item - middle), 0);


    // nums.sort((a, b) => a - b);
    // let minCount = Infinity;

    // for (const num of nums) {
    //     let count = 0;
    //     let j = 0;
    //     //  console.log(nums.length)
    //     while (j < nums.length) {
    //         // console.log(j)
    //         // console.log(count)
    //         //     if (nums[j] !== num) {
    //         //         console.log(nums[j] + ' - ' + num)
    //         if (nums[j] > num || nums[j] < num) count = count + Math.abs(nums[j] - num);
    //         //         console.log(count + ' - count')
    //         //     }
    //         j++;
    //     }
    //     minCount = Math.min(minCount, count)
    // }

    // return minCount

};

console.log(minMoves2(nums))