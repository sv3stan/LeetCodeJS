// Вам дан целочисленный массив nums и целое число k.
// За одну операцию вы можете выбрать из массива два числа, сумма которых равна k, и удалить их из массива.
// Возвращает максимальное количество операций, которые вы можете выполнить над массивом.
// 1679

nums = [3, 1, 3, 4, 2, 3], k = 6

var maxOperations = function (nums, k) {

    const hashTable = new Map();
    let count = 0;

    for (const num of nums) {
        const difference = k - num;

        if (hashTable.get(difference) > 0) {
            hashTable.set(difference, hashTable.get(difference) - 1);
            count++;
        } else {
            hashTable.set(num, (hashTable.get(num) || 0) + 1);
        }
    }

    return count;
};


console.log(maxOperations(nums, k))






















    // const hashTable = new Map();
    // let left = 0;
    // let count = 0;

    // // for (let i = 0; i < nums.length; i++) {
    // //     if (hashTable.has(nums[i])) {
    // //         hashTable.set(nums[i], hashTable.get(nums[i]) + 1)
    // //     } else {
    // //         hashTable.set(nums[i], 1)
    // //     }
    // // }
    // if (!hashTable.has(nums[0])) {
    //     hashTable.set(nums[0], 1);
    //     console.log(hashTable)
    //     console.log('!!!!!!!!!!!!')

    // }
    // console.log(hashTable)
    // while (left < nums.length - 1) {
    //     console.log(' +++++++++ ')
    //     console.log(left + ' - left')
    //     if (!hashTable.has(nums[left])) {
    //         hashTable.set(nums[left], 1);
    //         console.log(hashTable)
    //         console.log('!!!!!!!!!!!!')

    //     } else {
    //         hashTable.set(nums[left], hashTable.get(nums[left]) + 1)
    //     }
    //     const currentKey = hashTable.get(nums[left]);
    //     const differenceKey = hashTable.get(k - nums[left]);
    //     if (hashTable.has(k - nums[left + 1]) && currentKey > 0 && differenceKey > 0) {
    //         console.log(' ----------- ')
    //         console.log(nums[left] + ' - nums[left]- ' + (k - nums[left]) + ' - nums[k - left] - 1 -')
    //         hashTable.set(nums[left], hashTable.get(k - nums[left]) - 1)
    //         hashTable.set(nums[left], hashTable.get(nums[left]) - 1)

    //         count++;
    //         console.log(count + ' - count - ')
    //     }
    //     console.log(hashTable)
    //     left++;
    // }
    // return count;
