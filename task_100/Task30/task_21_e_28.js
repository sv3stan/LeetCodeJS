// Учитывая две строки игла и стог сена,
// вернуть индекс первого вхождения иглы
// в стог сена или - 1, если игла не
// является частью стога сена.
//28

let haystack = 'sadbutsad';
//let haystack = 'a';
//let haystack = "abcacsefgsaomnskpsadolmk";
let needle = 'sad';
//let needle = "a";
//let haystack = "mississippi";
//let needle = "sipp";
//let haystack = "leetcode";
//let needle = "leeto";

function strStr(haystack, needle) {

    return haystack.indexOf(needle);

}

console.log(strStr(haystack, needle));


// let i = 0;
// let occurrence = new Set();
// let firstOccurrence = -1;
// console.log(haystack);
// console.log(needle);
// while (i < haystack.length) {
//     console.log(
//         i +
//         ' -- i -- ' +
//         needle.length +
//         ' -- needle.length -- ' +
//         haystack[i + needle.length - 1] +
//         ' -- ' +
//         needle[needle.length - 1]
//     );
//     if (haystack[i] == needle[0]) {
//         occurrence = haystack.substr(i, needle.length);
//         console.log(occurrence);
//         //let k = 1;
//         if (occurrence == needle) {
//             return (firstOccurrence = i);
//         }
//     }
//     i++;
// }
// return firstOccurrence;

// let i = 0;
// let firstOccurrence = -1;
// console.log(haystack);
// console.log(needle);
// while (i < haystack.length) {
//     console.log(i + ' -- i -- ' + needle.length + ' -- needle.length -- ' + haystack[i + needle.length - 1] + ' -- ' + needle[needle.length - 1]);
//     if ((haystack[i] == needle[0]) && (haystack[i + needle.length - 1] == needle[needle.length - 1])) {
//         let k = 1;
//         while (k < needle.length) {
//             console.log(k + '-- [k] -- ' + i + ' -- [i]');
//             console.log(needle[k] + '-- needle[k] -- ' + haystack[i + k] + ' -- haystack[i + k]');
//             if (needle[k] == haystack[i + k]) {

//                 if (k == needle.length) {
//                     console.log(k + '-- k ');
//                     console.log('return');

//                     return firstOccurrence = i;
//                 }
//                 k++;
//                 console.log(k + '-- k ');
//             } else {
//                 //i = i + needle.length - 1;
//                 firstOccurrence = -1;
//                 console.log('break');
//                 break;
//             }

//             console.log(firstOccurrence);
//         }

//     }

//     i++;

// }
// return firstOccurrence;
