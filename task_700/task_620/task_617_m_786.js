/*
Вам дан отсортированный массив целых чисел arr, содержащий 1 и простые числа, где все целые числа arr уникальны. Вам также дано целое число k.
Для каждого i и j, где 0 <= i < j < arr.length, мы рассматриваем дробь arr[i] / arr[j].
Возвращает k-ю наименьшую рассматриваемую дробь. Верните свой ответ в виде массива целых чисел размера 2, где ответ[0] == arr[i] и ответ[1] == arr[j].
*/

let arr = [1, 2, 3, 5];
let k = 3;

let kthSmallestPrimeFraction = function (arr, k) {
    let left = 0;
    let right = 1;
    let answer = [];

    while (left <= right) {
        let mid = left + (right - left) / 2;
        let j = 1;
        let count = 0;
        let num = 0;
        let den = 0;
        let max = 0;

        for (let i = 0; i < arr.length; ++i) {
            while (j < arr.length && arr[i] >= arr[j] * mid) {
                ++j;
            }

            count += arr.length - j;

            if (j < arr.length && max < (arr[i] * 1.0) / arr[j]) {
                max = (arr[i] * 1.0) / arr[j];
                num = i;
                den = j;
            }
        }

        if (count === k) {
            answer = [arr[num], arr[den]];
            break;
        }

        if (count > k) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return answer;
};

console.log(kthSmallestPrimeFraction(arr, k));
