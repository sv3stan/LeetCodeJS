// Вам дана строка num, представляющая большое целое число.
// Возвращает нечетное целое число с наибольшим значением(в виде строки), 
// которое является непустой подстрокой числа num, или пустую строку "", 
// если нечетное целое число не существует.
// Подстрока — это непрерывная последовательность символов внутри строки.

// 1903

num = "35427"
// num = "52"
// num = "4206"
// num = "239537672423884969653287101"
num = "6888604002824462002248842440664644662404482408404226224886402442066042422664084280264862046682064826"
var largestOddNumber = function (num) {

    const length = num.length
    for (let i = 0; i < length; i++) {
        // console.log(i)
        // console.log(num)
        let lastDigit = parseInt(num.charAt(num.length - 1), 10);


        if (lastDigit % 2) return num;
        num = num.slice(0, -1);
        // console.log(num)

    }

    return "";

};


console.log(largestOddNumber(num))









// for (let i = 0; i < num.length; i++) {
//     const nums = BigInt(num) / BigInt(10 ** i);
//     console.log(nums)
//     if (nums % 2n) return nums.toString();
// }

// return "";