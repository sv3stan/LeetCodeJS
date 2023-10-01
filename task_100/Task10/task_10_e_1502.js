// Последовательность чисел называется арифметической прогрессией,
//  если разница между любыми двумя последовательными элементами 
//  одинакова.

// Дан массив чисел arr, возвращает true, если массив можно
//  переупорядочить так, чтобы получилась арифметическая прогрессия.
//  В противном случае вернуть ложь.
//  1502



//let arr = [3, 5, 1];
let arr = [1, 2, 4];
function canMakeArithmeticProgression(arr) {
    arr.sort((a, b) => b - a);
    const diff = Math.abs(arr[0] - arr[1]);
    for (let i = 0; i < arr.length - 1; i++)
        if (Math.abs(arr[i] - arr[i + 1]) !== diff) {
            return false;
        }

    return true
};

console.log(canMakeArithmeticProgression(arr));


