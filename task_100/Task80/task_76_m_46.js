// Учитывая массив nums различных целых чисел, вернуть все возможные перестановки.
// Вы можете вернуть ответ в любом порядке.

// 46

nums = [1, 1, 3];


var permute = function (nums) {
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums];

    const arr = [[nums[0]]];

    for (let i = 1; i < nums.length; i++) {
        const tempArray = [];
        for (const subArr of arr) {
            for (let j = subArr.length; j >= 0; j--) {
                const newArray = [...subArr];
                newArray.splice(j, 0, nums[i]);
                tempArray.push(newArray);
            }
        }
        arr.length = 0; // Очистить исходный массив
        arr.push(...tempArray);
    }

    return arr;
};


console.log(permute(nums));








//var permute = function (nums) {
//     if (nums.length === 0) return [];
//     if (nums.length === 1) return [nums];

//     const arr = [[nums[0]]];

//     for (let i = 1; i < nums.length; i++) {
//         const tempArray = [];
//         for (const subArr of arr) {
//             for (let j = subArr.length; j >= 0; j--) {
//                 const newArray = [...subArr];
//                 newArray.splice(j, 0, nums[i]);
//                 tempArray.push(newArray);
//             }
//         }
//         arr.length = 0; // Очистить исходный массив
//         arr.push(...tempArray);
//     }

//     return arr;
// };
