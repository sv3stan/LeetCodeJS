// Учитывая целочисленный массив nums и целое число k, вернуть true, 
// если nums имеет хороший подмассив, или false в противном случае.
// Хороший подмассив — это подмассив, в котором:
// его длина не менее двух, а
// сумма элементов подмассива кратна k.
// Обратите внимание, что:
// Подмассив — это непрерывная часть массива.
// Целое число x кратно k, если существует целое число n такое, что x = n * k. 0 всегда кратно k.
// 523
let nums = [2, 0, 1, 2, 3, 1, 4, 1, 2];
//let nums = [4, 1, 2, 3, 1, 2, 3];
//nums = [23, 2, 4, 6, 7];
nums = [23, 2, 6, 1, 4, 7]

k = 10;

function checkSubarraySum(nums, k) {

    let prefixSum = 0;
    const remainderMap = new Map();
    remainderMap.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        console.log(' ----------- ')
        console.log(remainderMap)
        console.log(prefixSum + ' - sum - ')
        prefixSum += nums[i];
        const currentRemainder = prefixSum % k;
        console.log(currentRemainder + ' - currentRemainder - ')
        if (remainderMap.has(currentRemainder)) {
            const startIndex = remainderMap.get(currentRemainder) + 1;
            if (i - startIndex >= 1) {
                return true;
            }
        } else {
            remainderMap.set(currentRemainder, i);
        }
    }

    return false;
    //const remainderMap = new Array(k).fill(false);
    // remainderMap[0] = true;

    // let sum = 0;
    // for (const num of nums) {
    //     sum += num;
    //     const currentRemainder = (sum % k);

    //     if (remainderMap[currentRemainder]) {
    //         return true;
    //     } else {
    //         remainderMap[currentRemainder] = true;
    //     }
    // }

    //return false;

    // const map = new Map();
    // map.set(0, -1);
    // //map.set(1, 0);
    // let sum = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     console.log(' ----------- ')
    //     console.log(map)
    //     console.log(sum + ' - sum - ')
    //     sum += nums[i];
    //     console.log(sum + ' - sum - ')
    //     const currentRemainder = sum % k;
    //     //const currentRemainder = sum % k;
    //     console.log(currentRemainder + ' - currentRemainder - ')

    //     if (map.has(currentRemainder)) {
    //         const startIndex = map.get(currentRemainder) + 1;
    //         if (i - startIndex >= 1) {
    //             return true;
    //         }
    //     } else {
    //         map.set(currentRemainder, i);
    //     }
    //     console.log(map)
    // }

    // return false;

};

console.log(checkSubarraySum(nums, k))