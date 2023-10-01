// У вас есть два типа плиток: домино 2 x 1 и тримино.Вы можете вращать эти фигуры.
// Учитывая целое число n, верните количество способов замостить доску размером 2 x n.
// Поскольку ответ может быть очень большим, верните его по модулю 109 + 7.
// 790


n = 4; // при 5 - 24 должно быть

var numTilings = function (n) {
    const MOD = 1000 * 1000 * 1000 + 7;
    const quantityDomino = Array.from({ length: n + 1 }).fill(0);
    const quantityTromino = Array.from({ length: n + 1 }).fill(0);
    quantityDomino[0] = 1;
    quantityTromino[0] = 0;
    quantityDomino[1] = 1;
    quantityTromino[1] = 1;
    for (let i = 2; i <= n; i++) {
        quantityDomino[i] = (quantityDomino[i - 2] + quantityDomino[i - 1] + quantityTromino[i - 2] * 2) % MOD;
        quantityTromino[i] = (quantityTromino[i - 1] + quantityDomino[i - 1]) % MOD;
    }
    console.log(quantityDomino)
    console.log(quantityTromino)
    return quantityDomino[n]
};


console.log(numTilings(n))