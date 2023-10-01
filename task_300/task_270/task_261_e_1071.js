// Для двух строк s и t мы говорим «t делит s» тогда и только тогда, 
// когда s = t + ... + t(т.е.t объединяется само с собой один или несколько раз).
// Учитывая две строки str1 и str2, верните наибольшую строку x, такую, 
// что x делит обе строки: str1 и str2.
// 1071

str1 = "ABCABC", str2 = "ABC"
str1 = "ABABAB", str2 = "ABAB"

var gcdOfStrings = function (str1, str2) {
    // let answer = '';
    // const length = Math.min(str1.length, str2.length);
    // for (let i = 1; i <= length; i++) {
    //     const subStr = str1.slice(0, i);
    //     if (str1.includes(subStr) && str2.includes(subStr)) {
    //         answer = subStr;
    //     }
    //     console.log(subStr)
    // }
    // return answer;
    if (str1 + str2 !== str2 + str1) {
        return '';
    }

    function gcd(str1, str2) {

        return (str2 === 0) ? str1 : gcd(str2, str1 % str2)

    }

    //const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const gcdLength = gcd(str1.length, str2.length);

    return str1.substring(0, gcdLength);

};


console.log(gcdOfStrings(str1, str2))