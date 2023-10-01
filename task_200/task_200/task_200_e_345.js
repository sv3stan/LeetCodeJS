// Учитывая строку s, поменяйте местами только все гласные в строке и верните ее.
// Гласные: 'a', 'e', 'i', 'o', and 'u', и они могут встречаться как в нижнем, так и в верхнем регистре более одного раза.
// 345

s = "bbcdvacceddiffogguhzsh"
s = 'leetcOde'
s = ".,"

var reverseVowels = function (s) {

    let charArray = s.split('');
    const length = charArray.length - 1;
    let left = 0;
    let right = length;
    const hashTable = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    while (left < right) {
        while (!hashTable.has(charArray[left]) && left < length) left++;
        while (!hashTable.has(charArray[right]) && right > 0) right--;
        if (left < right) [charArray[left], charArray[right]] = [charArray[right], charArray[left]]
        left++;
        right--;
    }
    s = charArray.join('');
    return s;

};

console.log(reverseVowels(s))
























// var reverseVowels = function (s) {
//     let charArray = s.split('');
//     const length = charArray.length - 1;
//     let left = 0;
//     let right = length;
//     const hashTable = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

//     while (left < right) {
//         console.log(' ----- ')
//         while (!hashTable.has(charArray[left])) left++;

//         console.log(charArray[left] + ' - charArray[left] -  ' + left);
//         while (!hashTable.has(charArray[right])) right--;
//         console.log(charArray[right] + ' - charArray[right] -  ' + right);
//         if (left < right) [charArray[left], charArray[right]] = [charArray[right], charArray[left]]
//         left++;
//         right--;
//     }
//     s = charArray.join('');
//     return s;

// };