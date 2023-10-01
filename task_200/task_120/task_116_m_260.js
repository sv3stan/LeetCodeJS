// Дан целочисленный массив nums, в котором ровно два элемента встречаются только один раз, 
// а все остальные элементы встречаются ровно два раза.Найдите два элемента, 
// которые встречаются только один раз.Вы можете вернуть ответ в любом порядке.
// Вы должны написать алгоритм, который работает с линейной сложностью во время 
// выполнения и использует только постоянное дополнительное пространство.
// 260

nums = [1, 2, 1, 5, 2, 3];
//nums = [1, 2, 3, 4, 1, 2, 3, 5, 6, 6];
nums = [18, 24, 24, 21, 10, 29, 8, 10, 29, 18];
//nums = [1, 0]

function singleNumber(nums) {
    let xorResult = 0;
    // let position = 0;
    let firstElement = 0;
    let secondElement = 0;
    for (let i = 0; i < nums.length; i++) {
        //  console.log(xorResult + ' - xorResult - ' + nums[i] + ' - nums[i]- ')
        xorResult ^= nums[i];
    }
    console.log(xorResult)
    // while ((xorResult & 1) === 0) {
    //     xorResult >>= 1;
    //     // console.log(xorResult)
    //     position++
    // }
    const position = xorResult & -xorResult;

    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & position) !== 0) {
            firstElement ^= nums[i];
        } else {
            secondElement ^= nums[i];
        }
    }

    console.log(firstElement + ' - firstElement')
    console.log(secondElement + ' - secondElement')


    console.log(position)
    return [Math.min(firstElement, secondElement), Math.max(firstElement, secondElement)]
};


console.log(singleNumber(nums))