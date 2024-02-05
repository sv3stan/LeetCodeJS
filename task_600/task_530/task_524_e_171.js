// Учитывая строку columnsTitle, которая представляет заголовок столбца, 
// отображаемый на листе Excel, верните соответствующий номер столбца.

// 171

columnTitle = 'ZY';

var titleToNumber = function (columnTitle) {
    //const arr = columnTitle.split('');

    let sum = 0;
    const length = columnTitle.length - 1;
    for (let i = length; i >= 0; i--) {
        sum += ((columnTitle.charCodeAt(i) - 64) * (26 ** (length - i)))
    }
    return sum;

    // let result = 0;

    // for (let i = columnTitle.length - 1; i >= 0; i--) {
    //     result += (columnTitle.charCodeAt(i) - 64) * (26 ** (columnTitle.length - i - 1));
    // }

    // return result;



};



console.log(titleToNumber(columnTitle))








// const arr = columnTitle.split('').reverse();
// console.log(arr)
// //let sum = arr[arr.length - 1].charCodeAt(0) - 64;
// let sum = 0;
// //console.log(sum + ' - sum')
// for (let i = arr.length - 1; i >= 0; i--) {
//     //for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     console.log(arr[i].charCodeAt(0) - 64)
//     console.log((26 ** i))
//     sum += ((arr[i].charCodeAt(0) - 64) * (26 ** i))
//     console.log(sum + ' - sum')
// }


// return sum;