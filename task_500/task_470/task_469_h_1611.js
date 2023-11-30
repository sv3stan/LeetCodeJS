// Учитывая целое число n, вы должны преобразовать его в 0, 
// используя следующие операции любое количество раз:
// Измените самый правый(0 - й) бит в двоичном представлении n.
// Измените i - й бит в двоичном представлении n, 
// если(i - 1) - й бит установлен в 1, 
// а биты с(i - 2) - го по 0 - й установлены в 0.
// Возвращает минимальное количество операций для преобразования n в 0.
// 1611

n = 8;

var minimumOneBitOperations = function (n) {
    // let ans = n;
    // ans ^= ans >> 16;
    // ans ^= ans >> 8;
    // ans ^= ans >> 4; 
    // ans ^= ans >> 2;
    // ans ^= ans >> 1;
    // return ans;

    if (n === 0) {
        return 0;
    }

    let x = 0;
    let current = 1;
    while (current * 2 <= n) {
        current *= 2;
        x++;
    }

    return (1 << (x + 1)) - 1 - minimumOneBitOperations(n ^ current);
};

console.log(minimumOneBitOperations(n))