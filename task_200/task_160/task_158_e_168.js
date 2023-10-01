// Учитывая целочисленный номер столбца, верните соответствующий заголовок столбца, как он отображается на листе Excel.
// 168

columnNumber = 12318;
// columnNumber = 701;
// columnNumber = 5;
// columnNumber = 2147483647
columnNumber = 26;
var convertToTitle = function (columnNumber) {
    let result = '';

    //let result = '';
    while (columnNumber > 0) {
        const remainder = (columnNumber - 1) % 26;
        console.log(remainder)
        result = String.fromCharCode(remainder + 65) + result;
        columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    return result;
    // while (columnNumber > 26) {
    //     result = Math.floor(columnNumber / 26) + result;
    //     console.log(result)
    //     columnNumber = columnNumber / 26;
    //     console.log(columnNumber + ' - columnNumber - ')
    // }
    // while (columnNumber > 0) {
    //     console.log(' --------- ')
    //     const remainder = columnNumber % 26;
    //     console.log(remainder)
    //     columnNumber -= remainder;
    //     console.log(columnNumber + ' - columnNumber - ')
    //     if (remainder !== 0) result = String.fromCharCode(remainder + 64) + result;
    //     console.log(result)
    //     if ((columnNumber) / 26 <= 26 && (columnNumber) / 26 > 0) {
    //         console.log(' +++++++ ')
    //         return String.fromCharCode(((columnNumber) / 26) + 64) + result;
    //     }
    //     columnNumber = columnNumber / 26;
    //     console.log(columnNumber + ' - columnNumber - ')
    //     console.log(result)
    // }
    return result;

};

console.log(convertToTitle(columnNumber))