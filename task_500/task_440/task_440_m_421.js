// Учитывая целочисленный массив nums, верните максимальный 
// результат операции nums[i] XOR nums[j], где 0 <= i <= j < n.
// 421

nums = [3, 10, 5, 25, 2, 8];
//nums = [2, 4]

//nums = [14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]
nums = [426, 657, 427, 92, 613, 624]

function reverse(num) {
    return parseInt(num.toString(2).split('').map((b) => (b === '1' ? '0' : '1')).join(''), 2);
}

function findMaximumXOR(nums) {
    let max = 0;
    let mask = 0;
    for (let i = 31; i >= 0; i--) {
        mask |= (1 << i);
        const set = new Set();
        for (const num of nums) {
            set.add(num & mask);
        }
        const greedyMax = max | (1 << i);
        for (const prefix of set) {
            if (set.has(greedyMax ^ prefix)) {
                max = greedyMax;
                break;
            }
        }
    }
    return max;
}

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const middle = ((left + right) >> 1);
        if (target <= nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return left;
}



console.log(findMaximumXOR(nums))
















// let max = 0;

// for (let i = 0; i < nums.length - 1; i++) {
//     //  console.log('--------')
//     for (let j = i + 1; j < nums.length; j++) {
//         console.log(nums[i] ^ nums[j])
//         max = Math.max(max, nums[i] ^ nums[j])
//     }

// }

// return max;