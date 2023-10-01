// Вам дан целочисленный массив чисел с нулевым индексом.
// За одну операцию вы можете заменить любой элемент массива любыми двумя элементами, 
// которые в сумме образуют его.
// Например, рассмотрим nums = [5, 6, 7].
// За одну операцию мы можем заменить nums[1] на 2 и 4 и преобразовать nums в[5, 2, 4, 7].
// Возвращает минимальное количество операций для создания массива, 
// отсортированного в неубывающем порядке.
// 2366

nums = [3, 9, 3];
//nums = [1, 2, 3, 4, 5]
//nums = [2, 1, 4, 6, 7, 3, 4]

var minimumReplacement = function (nums) {
    const length = nums.length;
    let prev = nums[length - 1];
    let answerCount = 0;


    for (let i = length - 2; i >= 0; --i) {
        const current = nums[i];
        if (current > prev) {
            let count = Math.floor(current / prev);
            if (current % prev !== 0) {
                count++;
            }
            prev = Math.floor(current / count);
            answerCount += count - 1;
        } else {
            prev = current;
        }
    }
    return answerCount;

};
console.log(minimumReplacement(nums))





















   // const length = nums.length - 2;
    // const countanswerCountwer = [];
    // let countanswerCountwer = 0;
    // for (let i = length; i >= 0; i--) {
    //     console.log(' ---------- ')
    //     console.log(i + ' - i')


    //     if (nums[i + 1] < nums[i]) {

    //         const numElements = Math.ceil((nums[i] + nums[i + 1] - 1) / (nums[i + 1]));
    //         console.log(numElements + ' -  numElements -')
    //         countanswerCountwer += numElements - 1;
    //         console.log(countanswerCountwer + ' -  countanswerCountwer -')
    //         //console.log();
    //         nums.splice(i, 0, Math.floor(nums[i] / numElements));
    //         //nums[i] = nums[i] / numElements;

    //     }

    //     console.log(nums)
    // }
    // return countanswerCountwer