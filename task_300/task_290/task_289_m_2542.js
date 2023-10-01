// Вам даны два целочисленных массива nums1 и nums2 с нулевым индексом одинаковой длины n и 
// целое положительное число k.Вы должны выбрать подпоследовательность индексов из nums1 длины k.
// Для выбранных индексов i0, i1, ..., ik - 1 ваш результат определяется как:
// Сумма выбранных элементов из nums1, умноженная на минимум выбранных элементов из nums2.
// Его можно определить просто как: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0], 
//     nums2[i1], ... , nums2[ik - 1] ]).
// Вернуть максимально возможный балл.
// Подпоследовательность индексов массива — это набор, который можно получить из набора 
// { 0, 1, ..., n - 1 } путем удаления некоторых элементов или их отсутствия.
// 2542

nums1 = [1, 3, 3, 2], nums2 = [2, 1, 3, 4], k = 3
//nums1 = [4, 2, 3, 1, 1], nums2 = [7, 5, 10, 9, 6], k = 1
//nums1 = [2, 1, 14, 12], nums2 = [11, 7, 13, 6], k = 3
var maxScore = function (nums1, nums2, k) {
    let length = nums1.length;
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = [nums2[i], nums1[i]];
    }
    arr.sort((a, b) => b[0] - a[0]);


    let sum = 0;
    let answer = 0;
    let priorityQueue = new MinPriorityQueue();

    for (let i = 0; i < k - 1; i++) {
        priorityQueue.enqueue(arr[i][1]);
        sum += arr[i][1];
    }

    for (let i = k - 1; i < length; i++) {
        sum += arr[i][1];
        priorityQueue.enqueue(arr[i][1]);
        answer = Math.max(answer, sum * arr[i][0]);

        if (!priorityQueue.isEmpty()) {
            sum -= priorityQueue.dequeue().element;
        }
    }

    return answer;

};


console.log(maxScore(nums1, nums2, k))





















// let maxPro = 0;
// const sorted = [];

// for (let i = 0; i < nums1.length; i++) {
//     sorted.push([i, nums2[i]]);
// }

// sorted.sort((a, b) => a[1] - b[1]);

// let point = 0;
// while (point + k <= nums1.length) {
//     const minArray = [];
//     let i = point;
//     let sum = 0;
//     while (i < point + k) {
//         sum += nums1[sorted[i][0]];
//         minArray.push(nums2[sorted[i][0]]);
//         i++;
//     }
//     const min = Math.min(...minArray);
//     maxPro = Math.max(maxPro, min * sum);
//     point++;
// }

// return maxPro











// let maxPro = 0;
// const sorted = [];

// for (let i = 0; i < nums1.length; i++) {
//     sorted.push([i, nums2[i]])
// }

// sorted.sort((a, b) => a[1] - b[1]);

// let point = 0;
// while (point + k <= nums1.length) {

//     console.log(sorted[point][0])
//     sum = nums1[sorted[point][0]] + nums1[sorted[point + 1][0]] + nums1[sorted[point + 2][0]];
//     const minArray = [];
//     let i = point;
//     while (i < point + k) {
//         minArray.push(nums2[sorted[i][0]])
//         i++;
//     }
//     console.log(minArray)
//     min = Math.min(...minArray)
//     console.log(sum + ' - sum - ')
//     console.log(min + ' - min - ')
//     point++
//     console.log(point + ' - point - ')

//     maxPro = Math.max(maxPro, min * sum);
//     console.log(maxPro)
// }

// console.log(sorted)




















// let maxPro = 0;
// const sorted = [];

// for (let i = 0; i < nums1.length; i++) {
//     sorted.push([i, nums2[i]])
// }

// sorted.sort((a, b) => a[1] - b[1]);

// let point = 0;
// while (point + k <= nums1.length) {

//     //       console.log(sorted[point][0])
//     //sum = nums1[sorted[point][0]] + nums1[sorted[point + 1][0]] + nums1[sorted[point + 2][0]];
//     const minArray = [];
//     let i = point;
//     let sum = 0;
//     while (i < point + k) {
//         console.log(sorted)
//         console.log(nums1)
//         console.log(nums1[sorted[point + i][0]])
//         sum += nums1[sorted[point + i][0]];
//         minArray.push(nums2[sorted[i][0]])
//         console.log(i + ' - i - ' + point + ' - point')
//         i++;
//     }
//     //       console.log(minArray)
//     min = Math.min(...minArray)
//     //       console.log(sum + ' - sum - ')
//     //       console.log(min + ' - min - ')
//     point++
//     //       console.log(point + ' - point - ')

//     maxPro = Math.max(maxPro, min * sum);
//     //       console.log(maxPro)
// }

// // console.log(sorted)
// return maxPro
