// Вам дан массив nums, состоящий из неотрицательных целых чисел.
// Определим rev(x) как обратную сторону неотрицательного целого числа x.
// Например, rev(123) = 321, а rev(120) = 21. Пара индексов(i, j) хороша, 
// если она удовлетворяет всем следующим условиям:
// 0 <= i < j < nums.length
// nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
// Возвращает количество хороших пар индексов.
// Поскольку это число может быть слишком большим, верните его по модулю 109 + 7.
// 1814

let nums = [42, 11, 1, 97];
nums = [13, 10, 35, 24, 76];

function countNicePairs(nums) {
    const differenceMap = new Map();
    let nicePairs = 0;
    const n = nums.length;
    for (let index = 0; index < n; index++) {
        const difference = nums[index] - parseInt(nums[index].toString().split('').reverse().join(''));
        if (differenceMap.has(difference)) {
            nicePairs += differenceMap.get(difference);
            differenceMap.set(difference, differenceMap.get(difference) + 1);
        } else {
            differenceMap.set(difference, 1);
        }
    }
    return nicePairs % 1000000007;
};

console.log(countNicePairs(nums));












// function countBadPairs(nums) {
//     let differenceMap = new Map();
//     let nicePairs = 0;
//     let n = nums.length;
//     for (let index = 0; index < n; index++) {
//         console.log('--------');
//         const difference = nums[index] - parseInt(nums[index].toString().split('').reverse().join(''));
//         //let difference = nums[index] - index;
//         //console.log(difference + ' - diff')
//         //console.log(differenceMap[difference])
//         //const sum = (differenceMap[difference] ?? 0)
//         //console.log(sum + ' - sum')
//         if (differenceMap[difference]) {
//             nicePairs += differenceMap[difference];
//             differenceMap[difference] += 1;
//         } else differenceMap[difference] = 1;

//         //nicePairs += sum
//         console.log(nicePairs + ' - nicePairs')
//         console.log(differenceMap)
//         console.log(differenceMap[difference])
//         // differenceMap[difference] = differenceMap[difference] ? differenceMap[difference] + 1 : 1;
//     }
//     //let totalPairs = (n * (n - 1)) >> 1;
//     //badPairs = totalPairs - nicePairs;
//     return nicePairs % 1000000007;
// };
