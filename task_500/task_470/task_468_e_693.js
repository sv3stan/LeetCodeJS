// Учитывая положительное целое число, проверьте, 
// есть ли в нем чередующиеся биты: а именно, 
// будут ли два соседних бита всегда иметь разные значения.
// 693

n = 85;

var hasAlternatingBits = function (n) {
    const bin = n.toString(2);
    for (let i = 1; i < bin.length; i++) {
        if (bin[i - 1] === bin[i]) return false;
    }
    return true;
};

console.log(hasAlternatingBits(n))