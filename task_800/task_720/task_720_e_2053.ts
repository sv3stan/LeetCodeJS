/**
Отдельная строка - это строка, которая встречается в массиве только один раз.
Если задан массив строк arr и целое число k, верните k-ю отдельную строку, присутствующую в arr. Если таких строк меньше, чем k, верните пустую строку "".
Обратите внимание, что строки считаются в том порядке, в котором они появляются в массиве.
 */

let arr = ['d', 'b', 'c', 'b', 'c', 'a'];
let k = 2;
function kthDistinct(arr: string[], k: number): string {
    const hash = new Map<string, number>();
    let index: number = 0;
    for (let i = 0; i < arr.length; i++)
        hash.set(arr[i], (hash.get(arr[i]) || 0) + 1);

    for (const str of arr) {
        if (hash.get(str) === 1) index++;
        if (index === k) return str;
    }

    return '';
}

console.log(kthDistinct(arr, k));
