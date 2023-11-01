// Вам дан целочисленный массив arr. Отсортируйте целые числа 
// в массиве в порядке возрастания по количеству единиц в их 
// двоичном представлении, а если два или более целых числа имеют 
// одинаковое количество единиц, вам придется отсортировать их в 
// порядке возрастания. Верните массив после его сортировки.
// 1356


arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]
var sortByBits = function (arr) {
    const nums = [];
    //const num = [];
    arr.forEach(item => {
        const num = item.toString(2).split('1').length - 1;
        if (!nums[num]) nums[num] = [];


        nums[num].push(item);
    });
    nums.forEach(item => item.sort((a, b) => a - b))
    // console.log(nums)
    //const answer = 

    return nums.reduce((acc, item) => {
        return acc.concat(item)
    });

    console.log(answer)

};


console.log(sortByBits(arr))