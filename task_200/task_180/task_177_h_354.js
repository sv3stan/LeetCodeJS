// Вам дан двумерный массив целых чисел конвертов, где конверты[i] = [wi, hi] представляют ширину и высоту конверта.
// Один конверт может поместиться в другой тогда и только тогда, когда ширина и высота одного конверта больше ширины и высоты другого конверта.
// Вернуть максимально возможное количество конвертов русской кукле(т.е.вложить один в другой).
// Примечание.Конверт нельзя повернуть.
// 354

envelopes = [[5, 4], [6, 4], [6, 5], [2, 3], [5, 5], [8, 7]];
//envelopes = [[1, 1], [1, 1], [1, 1]];

var maxEnvelopes = function (envelopes) {

    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const middle = (left + right) >> 1;
            if (arr[middle] === target) {
                return middle;
            } else if (arr[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return left;
    }
    envelopes.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    const lisHeights = [];

    for (const [_, height] of envelopes) {
        const idx = binarySearch(lisHeights, height);
        if (idx === lisHeights.length) {
            lisHeights.push(height);
        } else {
            lisHeights[idx] = height;
        }
    }

    return lisHeights.length;

};

console.log(maxEnvelopes(envelopes));



















// envelopes.sort((a, b) => a[0] - b[0])
// console.log(envelopes)
// const dp = Array.from({ length: envelopes.length }).fill(1);

// for (let i = 1; i < envelopes.length; i++) {
//     for (let j = 0; j < i; j++) {
//         if ((envelopes[j][0] < envelopes[i][0]) && (envelopes[j][1] < envelopes[i][1])) dp[i] = Math.max(dp[i], dp[j] + 1)
//         console.log(dp)
//     }
// }

// return Math.max(...dp)






// var maxEnvelopes = function (envelopes) {
//     function biSearch(arr, target) {
//         console.log(target + ' - target')
//         let left = 0;
//         let right = envelopes.length - 1;
//         while (left <= right) {
//             let middle = (left + right) >> 1;
//             if (middle == target) {
//                 return middle;
//             } else if (arr[middle] > target) {
//                 left = middle + 1;
//             } else {
//                 right = middle;
//             }
//         }
//         console.log('   ---   ')
//     }
//     envelopes.sort((a, b) => a[0] - b[0])
//     console.log(envelopes)
//     const dp = Array.from({ length: envelopes.length }).fill(1);

//     for (let i = 0; i < envelopes.length; i++) {

//         //biSearch(envelopes,i);
//         //console.log(envelopes[i][0])
//         console.log(biSearch(envelopes, envelopes[i][0]))
//         // for (let j = 0; j < i; j++) {
//         //     if ((envelopes[j][0] < envelopes[i][0]) && (envelopes[j][1] < envelopes[i][1])) dp[i] = Math.max(dp[i], dp[j] + 1)
//         //     //       console.log(dp)
//         // }
//     }

//     return Math.max(...dp)

// };