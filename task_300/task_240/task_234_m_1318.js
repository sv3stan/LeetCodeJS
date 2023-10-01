// Даны 3 положительных числа a, b и c.Возвращает минимальное количество переворотов,
// необходимых для выполнения некоторых бит a и b(a OR b == c). (побитовая операция ИЛИ).
// Операция переворота состоит из изменения любого отдельного бита с 1 на 0 или изменения
// бита с 0 на 1 в их двоичном представлении.
// 1318

const { count } = require('console');

(a = 4), (b = 2), (c = 7);
a = 2, b = 6, c = 5;
//a = 1, b = 2, c = 3
a = 7, b = 7, c = 7;
//a = 5, b = 3, c = 6;
var minFlips = function (a, b, c) {
    const firstResult = (a | b) ^ c;
    const secondResult = a & b & firstResult;
    return firstResult.toString(2).split('1').length - 1 + secondResult.toString(2).split('1').length - 1;

};

console.log(minFlips(a, b, c));




// const { count } = require('console');

// (a = 4), (b = 2), (c = 7);
// //a = 2, b = 6, c = 5;
// //a = 1, b = 2, c = 3
// a = 7, b = 7, c = 7;
// var minFlips = function (a, b, c) {
//     let aBin = '';
//     let bBin = '';
//     let cBin = [];
//     let abOrBin = [];
//     let transfer = 0;

//     for (let i = 0; i < 32; i++) {
//         aBin += (a >> i) & 1;
//         bBin += (b >> i) & 1;

//         //console.log(aBin[i] + ' - aBin[i] - ' + bBin[i] + ' - bBin[i]');
//         if (aBin[i] === '1' && bBin[i] === '1') {
//             if (transfer === 1) {
//                 (abOrBin[i] = 1)
//             } else {
//                 (abOrBin[i] = 0)
//                 transfer = 1;
//             }
//         } else {
//             if (aBin[i] === '1' && bBin[i] === '0' || aBin[i] === '0' && bBin[i] === '1') {
//                 if ((transfer === 1)) {
//                     (abOrBin[i] = 0);

//                 } else {
//                     (abOrBin[i] = 1);
//                     transfer = 0;
//                 }

//             } else {
//                 if ((transfer === 1)) {
//                     (abOrBin[i] = 1)
//                 } else {
//                     (abOrBin[i] = 0)
//                 }
//                 transfer = 0

//             }
//         }



//         cBin.push((c >> i) & 1);
//     }

//     let countFlip = 0;
//     for (let i = 0; i < 32; i++) {
//         if (abOrBin[i] !== cBin[i]) countFlip++;
//     }

//     console.log(aBin);
//     console.log(bBin);
//     console.log(cBin);
//     console.log(abOrBin);
//     return countFlip;
// };
