// Дан целочисленный массив nums, найти подмассив который имеет самый большой продукт, и вернуть продукт.
// Тестовые примеры генерируются таким образом, чтобы ответ соответствовал 32 - битному целому числу.
// 152


nums = [2, 3, -2, 4];
nums = [-2, 0, -1]

function maxProduct(nums) {

    //let parametrs = Array.from({ length: 4 }).fill(nums[0]);
    let parametrs = [];
    parametrs[0] = nums[0]; // 0 - min multiplication
    parametrs[1] = nums[0]; // 1 - max multiplication
    parametrs[2] = nums[0]; // 2 - largest multiplication result
    parametrs[3] = nums[0]; // 4 - result
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) [parametrs[0], parametrs[1]] = [parametrs[1], parametrs[0]]
        parametrs[0] = Math.min(nums[i] * parametrs[0], nums[i]);
        parametrs[1] = Math.max(nums[i] * parametrs[1], nums[i]);
        parametrs[2] = Math.max(parametrs[1], parametrs[2]);
        parametrs[3] = Math.max(parametrs[2], parametrs[3]);
    }
    return parametrs[3];
};


console.log(maxProduct(nums))









// function maxProduct(nums) {
//     let minMult = nums[0];
//     let maxMult = nums[0];
//     let result = nums[0];
//     let maxGeneral = nums[0];

//     for (let i = 1; i < nums.length; i++) {

//         if (nums[i] < 0) {
//             const temp = minMult;
//             minMult = maxMult;
//             maxMult = temp;
//         }

//         maxMult = Math.max(nums[i] * maxMult, nums[i]);
//         minMult = Math.min(nums[i] * minMult, nums[i]);

//         maxGeneral = Math.max(maxMult, maxGeneral);
//         result = Math.max(maxGeneral, result);
//     }
//     return result;
// };









    // let parametrs = Array.from({ length: 4 }).fill(nums[0]);
    // // 0 - min multiplication
    // // 1 - max multiplication
    // // 2 - largest multiplication result
    // // 4 - result
    // for (let i = 1; i < nums.length; i++) {

    //     if (nums[i] < 0) [parametrs[0], parametrs[1]] = [parametrs[1], parametrs[0]]
    //     parametrs[0] = Math.min(nums[i] * parametrs[0], nums[i]);
    //     parametrs[1] = Math.max(nums[i] * parametrs[1], nums[i]);
    //     parametrs[2] = Math.max(parametrs[1], parametrs[2]);
    //     parametrs[3] = Math.max(parametrs[2], parametrs[3]);
    // }
    // return parametrs[3];