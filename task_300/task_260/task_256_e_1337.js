// Вам дана двоичная матрица размером m x n, состоящая из 1(представляющих солдат) и 
// 0(представляющих гражданских лиц).Солдаты располагаются напротив мирных жителей.
// То есть все 1 появятся слева от всех 0 в каждой строке.
// Строка i слабее строки j, если верно одно из следующих условий:
// Количество солдат в ряду i меньше количества солдат в ряду j.
// В обоих рядах одинаковое количество солдат и i < j.
// Возвращает индексы k самых слабых строк в матрице, упорядоченных от самой слабой к самой сильной.
// 1337

mat =
    [[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]];
k = 3

var kWeakestRows = function (mat, k) {
    // const arr = [];
    // for (let i = 0; i < mat.length; i++) {
    //     let start = 0;
    //     let end = mat[i].length;
    //     while (start < end) {
    //         const middle = (start + end) >> 1;
    //         if (mat[i][middle] === 1) {
    //             start = middle + 1;
    //         } else {
    //             end = middle;
    //         }
    //     }
    //     arr.push([start, i])
    //     // console.log(arr)
    // }


    // arr.sort((a, b) => a[0] - b[0])
    // return arr.slice(0, k).map(pair => pair[1]);

    const result = mat.map((row, index) => [row.reduce((acc, val) => acc + val, 0), index]);

    result.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });

    return result.slice(0, k).map(pair => pair[1]);
};


console.log(kWeakestRows(mat, k))