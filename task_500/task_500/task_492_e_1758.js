// Вам дана строка s, состоящая только из символов «0» и «1». 
// За одну операцию можно изменить любой «0» на «1» или наоборот.
// Строка называется чередующейся, если никакие два соседних 
// символа не равны.Например, строка «010» является чередующейся, а строка «0100» — нет.
// Возвращает минимальное количество операций, необходимых для чередования s.
// 1758

s = "0100"
s = "10"
s = "1111"
var minOperations = function (s) {
    let zeroQuantity = 0;
    let onesQuantity = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] === '1') {
                zeroQuantity++;
            } else {
                onesQuantity++;
            }
        } else {
            if (s[i] === '0') {
                zeroQuantity++;
            } else {
                onesQuantity++
            }
        }
    }
    return Math.min(onesQuantity, zeroQuantity)
};


console.log(minOperations(s))