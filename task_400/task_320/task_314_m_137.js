// Дан целочисленный массив nums, в котором каждый элемент появляется три раза, 
// кроме одного, который появляется ровно один раз.
// Найдите единственный элемент и верните его.
// Вы должны реализовать решение с линейной сложностью времени выполнения 
// и использовать только постоянное дополнительное пространство.
// 137

nums = [0, 1, 0, 1, 0, 1, 99]


var singleNumber = function (nums) {

    let one = 0;
    let two = 0;
    for (let i = 0; i < nums.length; i++) {
        two |= (one & nums[i]);
        one ^= nums[i];
        const bitMask = ~(one & two);
        two &= bitMask;
        one &= bitMask;
    }
    return one;

};


console.log(singleNumber(nums))