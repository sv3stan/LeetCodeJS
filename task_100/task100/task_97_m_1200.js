// Дан массив различных целых чисел arr, найти все пары элементов с минимальной абсолютной разностью любых двух элементов.
// Возвращает список пар в порядке возрастания(относительно пар), каждая пара[a, b] следует
// a, b are from arr
// a < b
// b - a равно минимальной абсолютной разности любых двух элементов в arr
// 1200
//let arr = [4, 2, 1, 3];
//let arr = [1, 3, 6, 10, 15]
let arr = [3, 8, -10, 23, 19, -4, -14, 27]

function minimumAbsDifference(arr) {
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;
    const result = [];

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];

        if (diff < minDiff) {
            minDiff = diff;
            result.length = 0; // Очищаем массив результатов
        }

        if (diff === minDiff) {
            result.push([arr[i - 1], arr[i]]);
        }
    }

    return result;

};

console.log(minimumAbsDifference(arr));




    // let map = new Map();
    // let leftPointer = 0;
    // let rightPointer = 1;
    // let minDiff = Infinity;
    // const result = [];
    // arr.sort((a, b) => a - b);
    // while (rightPointer < arr.length) {
    //     const diff = arr[rightPointer] - arr[leftPointer];

    //     if (!map.has(diff)) {
    //         map.set(diff, []);
    //     }
    //     map.get(diff).push(leftPointer);

    //     if (diff < minDiff) {
    //         minDiff = diff;
    //     }

    //     leftPointer++;
    //     rightPointer++;
    // }
    // console.log(map)
    // console.log(minDiff)
    // if (map.has(minDiff)) {
    //     const valuesArray = map.get(minDiff);
    //     for (const index of valuesArray) {
    //         result.push([arr[index], arr[index + 1]])
    //     }
    // }
    // return result;