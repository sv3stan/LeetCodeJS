// Учитывая целочисленный массив nums и целое число k, верните true, 
// если в массиве есть два различных индекса i и j, 
// такие что nums[i] == nums[j] и abs(i - j) <= k.
// 219


nums = [1, 2, 3, 1, 2, 4, 5, 3, 2], k = 3
//nums = [1, 2, 3, 1, 2, 3], k = 2

var containsNearbyDuplicate = function (nums, k) {


    const hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        //const num = nums[i];
        if (nums[i] in hashTable && i - hashTable[nums[i]] <= k) {
            return true;
        }
        hashTable[nums[i]] = i;
        console.log(hashTable)
    }

    return false;

};


console.log(containsNearbyDuplicate(nums, k))





// for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true;
//     }
// }

// return false;
