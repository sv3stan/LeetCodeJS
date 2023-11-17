// Дан массив строк nums, содержащий n уникальных двоичных строк, 
// каждая из которых имеет длину n, вернуть двоичную строку длины n, 
// которая не встречается в nums.Если ответов несколько, 
// вы можете вернуть любой из них.
// 1980

nums = ["111", "011", "001"];
nums = ["0000000001", "0000000011", "0000000110", "0000000100", "1111111111", "0000000101", "0000000111", "0000000010", "0000000000", "0000001001"]

var findDifferentBinaryString = function (nums) {

    const hash = new Set(nums);
    const n = nums.length;
    // console.log(hash)
    //const arr = Array.from({ length: nums.length }).fill('0');

    for (let i = 0; i < Math.pow(2, n); i++) {
        const num = i.toString(2).padStart(n, '0');
        if (!hash.has(num)) return num;
        //    console.log(num)
    }


    return -1;

};

console.log(findDifferentBinaryString(nums))