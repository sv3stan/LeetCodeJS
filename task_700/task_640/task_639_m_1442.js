/*
Дан массив целых чисел arr.
Мы хотим выбрать три индекса i, j и k, где (0 <= i < j <= k < arr.length).
Определим a и b следующим образом:
a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
Обратите внимание, что ^ обозначает операцию побитового исключения.
Возвращает количество троек (i, j и k), где a == b.
*/

let arr = [2, 3, 1, 6, 7];

let countTriplets = function (arr) {
    const prefixXOR = [...arr];
    prefixXOR.unshift(0);
    const length = prefixXOR.length;

    for (let i = 1; i < length; ++i) {
        prefixXOR[i] ^= prefixXOR[i - 1];
    }

    let count = 0;

    for (let begin = 0; begin < length; ++begin) {
        for (let end = begin + 1; end <= length; ++end) {
            if (prefixXOR[begin] == prefixXOR[end]) {
                count += end - begin - 1;
            }
        }
    }

    return count;
};

console.log(countTriplets(arr));
