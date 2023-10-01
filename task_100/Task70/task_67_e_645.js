// У вас есть набор целых чисел s, изначально содержащий все числа от 1 до n.
// К сожалению, из - за какой - то ошибки одно из чисел в s продублировалось другим числом в наборе, 
// что приводит к повторению одного числа и потере другого числа.
// Вам дан целочисленный массив nums, представляющий состояние данных этого набора после ошибки.
// Найдите число, которое встречается дважды, и число, которое отсутствует, и верните их в виде массива.
//645

//let nums = [3, 5, 7, 2, 4, 6, 8, 9, 2];

//let nums = [1, 2, 4, 3, 5, 4];
//let nums = [2, 2, 3, 4, 5];

//let nums = [1, 1];
//let nums = [3, 2, 2];
//let nums = [1, 3, 3];
//let nums = [2, 2];
//let nums = [1, 2, 2, 4];
//let nums = [8, 7, 3, 5, 3, 6, 1, 4]
//let nums = [3, 2, 3, 4, 6, 5]


function findErrorNums(nums) {

    let hash = new Set();
    let repeatingNumber;
    let left = 0;
    let right = nums.length - 1;

    while (!repeatingNumber) {
        if (hash.has(nums[left])) { repeatingNumber = nums[left]; }
        else {
            hash.add(nums[left]); left++;
        }
        if (hash.has(nums[right])) { repeatingNumber = nums[right]; }
        else {
            hash.add(nums[right]); right--;
        }
    }
    nums.splice(nums.indexOf(repeatingNumber), 1)
    const sumNums = nums.reduce((sum, current) => sum + current, 0);
    const missingNumber = ((nums.length + 1) * ((nums.length + 1) + 1)) / 2 - sumNums;

    return [repeatingNumber, missingNumber];
};





console.log(findErrorNums(nums));


// function findErrorNums(nums) {

//     let left = - 1;
//     let right = nums.length;
//     let result = 1;
//     while (result === 1) {
//         // left++;

//         // result = nums[left] - left;
//         // if (result === 0) return [nums[left], nums[left] + 1];
//         // if (result === 2) return [nums[left] - 1, nums[left]];




//         right--;
//         console.log(' ================== ');
//         result = nums[right] - right;
//         console.log(result + ' - result');
//         console.log(right + ' - right');
//         console.log(nums[right] + ' - nums[right]');
//         if (result === 0) return [nums[right], nums[right] + 1];
//         if (result === 2) return [nums[right], nums[right] - 1];



//     }
//     return [];

//     // if (result !== 0) return left;

// };










// function findErrorNums(nums) {
//     let left = - 1;
//     let right = nums.length;
//     let result = 1;
//     if (nums[0] === 2 && nums[1] === 2) return [2, 1]
//     while (result === 1) {
//         left++;
//         result = nums[left] - left;
//         console.log(result + ' - result');
//         console.log(left + ' - left');
//         console.log(nums[left] + ' - nums[left]');
//         if (result === 0) return [nums[left], nums[left] + 1];
//         if (result === 2) return [nums[left] - 1, nums[left]];
//         right--;
//         result = nums[right] - right;
//         if (result === 0) return [nums[right], nums[right] + 1];
//         if (result === 2) return [nums[right], nums[right] - 1];
//     }
//     return [];


// };













//function findErrorNums(nums) {
//     let repeatingNumber;
//     let missingNumber;
//     for (let num of nums) {
//         repeatingNumber ^= num;
//     }
//     const index = nums.indexOf(repeatingNumber);
//     nums.splice(index, 1);
//     console.log(nums);
//     const sumNums = nums.reduce((sum, current) => sum + current, 0);
//     //for (let i = 1; i < nums.length + 1; i++) {

//     missingNumber = ((nums.length + 1) * ((nums.length + 1) + 1)) / 2 - sumNums;

//     //missingNumber ^= i;
//     //}
//     return [repeatingNumber, missingNumber];


// };













//function findErrorNums(nums) {
//     let right = nums.length;
//     let result = 1;
//     nums.sort((a, b) => a - b);
//     console.log(nums + ' - nums');
//     let left = nums[0] - 1;
//     // if (nums[0] === 2 && nums[1] === 2) return [2, 1]
//     while (result === 1) {
//         right--;
//         result = nums[right] - right;
//         if (result === 0) return [nums[right], nums[right] + 1];
//         if (result === 2) return [nums[right], nums[right] - 1];


//         left++;
//         result = nums[left] - left;
//         console.log(result + ' - result');
//         console.log(left + ' - left');
//         console.log(nums[left] + ' - nums[left]');
//         if (result === 0) return [nums[left], nums[left] + 1];
//         if (result === 2) return [nums[left], nums[left] - 1];

//     }
//     return [];
// };