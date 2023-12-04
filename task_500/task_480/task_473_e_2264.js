// Вам дана строка num, представляющая большое целое число.
// Целое число является хорошим, если оно удовлетворяет следующим условиям:
// Это подстрока num длиной 3.
// Он состоит только из одной уникальной цифры.
// Возвращает максимальное целое число в виде строки или пустую строку "", 
// если такого целого числа не существует.
// 2264


num = "6777133339"
num = "2300019"
num = "42352338"
var largestGoodInteger = function (num) {

    let maxSum = 0;
    for (let i = 0; i < num.length; i++) {
        let sum = 0;
        if (num[i] === num[i + 1] && num[i] === num[i + 2]) sum = 3 * num[i].charCodeAt(0);
        maxSum = Math.max(maxSum, sum)
    }

    const char = String.fromCharCode(maxSum / 3)
    if (maxSum) {
        return char + char + char;
    } else {
        return "";
    }
};


console.log(largestGoodInteger(num))