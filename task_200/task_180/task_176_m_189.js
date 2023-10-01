// Учитывая целочисленный массив nums, поверните массив вправо на k шагов, где k неотрицательно.
// 189

nums = [1, 2, 3, 4, 5, 6, 7], k = 3
//nums = [-1, -100, 3, 99], k = 2
// nums = [1, 2], k = 5;
nums = [1, 2, 3], k = 5;
//nums = [1, 2, 3, 4, 5, 6], k = 11

var rotate = function (nums, k) {

    //if (JSON.stringify(nums) === JSON.stringify([1, 2, 3])) return [3, 1, 2];
    let n = nums.length;
    k = k % n;
    if (k > n) return;
    if (n == 0 || k == 0 || n == k) return;
    // console.log(k)
    //if (k > nums.length) k = nums.length - 1;
    const item = nums.splice(nums.length - k)
    //let items = [];


    // for (let i = 0; i < k; i++) {
    //     const elements = nums.pop()
    //     items.push(elements);
    // }

    // for (let i = 0; i < k; i++) {
    //     const elements = nums.pop()
    //     items.push(elements);
    // }
    console.log(item)
    console.log(nums)
    //nums.splice(nums.length - k, nums.length)
    //console.log(nums)
    nums.splice(0, 0, ...item);
    // //const rotated = nu
    console.log(nums)
    //console.log(items)

};


console.log(rotate(nums, k))
