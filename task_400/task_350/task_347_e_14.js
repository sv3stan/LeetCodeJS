// Напишите функцию для поиска самой длинной строки 
// общего префикса среди массива строк.
// Если общего префикса нет, верните пустую строку «».
// 14

strs = ["flsower", "flsow", "flsight"];

strs = ["flower", "fkow"]
//strs = ["ab", "a"]
//strs = ["reflower", "flow", "flight"]

var longestCommonPrefix = function (strs) {

    if (!strs || strs.length === 0)
        return "";

    function compareChars(len) {
        let str1 = strs[0].substring(0, len);
        for (let i = 1; i < strs.length; i++)
            if (!strs[i].startsWith(str1))
                return false;
        return true;
    }


    // let minLen = Number.MAX_VALUE;
    // for (let str of strs)
    //     minLen = Math.min(minLen, str.length);

    let left = 1;
    let right = Math.min(...strs.map(str => str.length));

    while (left <= right) {
        let middle = (right + left) >> 1;
        if (compareChars(middle))
            left = middle + 1;
        else
            right = middle - 1;
    }

    return strs[0].substring(0, (right + left) >> 1);


};

console.log(longestCommonPrefix(strs))













// if (strs.length === 0) return "";

// let left = 1;
// let right = Math.min(...strs.map(str => str.length));

// function compareChars(index) {
//     console.log(index);
//     console.log(strs[0][index]);
//     let str1 = strs[0].substring(0, index);
//     for (let i = 1; i < strs.length; i++)
//         if (!strs[i].startsWith(str1))
//             return false;
//     return true;
// }


// while (left <= right) {
//     const middle = (right + left) >> 1;
//     console.log(middle + ' - middle')
//     if (compareChars(middle - 1)) {
//         left = middle + 1;
//     } else {
//         right = middle - 1;
//     }
// }

// console.log(right)

// return strs[0].substring(0, (right + left) >> 1);