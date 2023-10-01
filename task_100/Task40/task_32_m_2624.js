// Напишите код, улучшающий все массивы, чтобы вы могли вызвать метод snail(rowsCount, colsCount), 
// который преобразует одномерный массив в двумерный массив, организованный по шаблону, 
// известному как порядок обхода улитки.Недопустимые входные значения должны выводить пустой массив.
// Если rowsCount * colsCount !== nums.length, ввод считается недопустимым

//2624

//const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15, 31, 35, 42, 45];
const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
//const nums = [19, 10, 3, 7];
//const nums = [19, 10];
//let rowsCount = 5;
//let colsCount = 4;
let res = [];
Array.prototype.snail = function (rowsCount, colsCount) {

    let point = 0;
    let row = 0;
    let col = 0;
    let isUp = false;
    if (this.length !== rowsCount * colsCount) return [];
    while (point <= this.length - 1) {

        if (row <= rowsCount) {
            if (col == 0) res.push([]);
            res[row][col] = this[point];
            isUp ? row-- : row++;
        }
        if (row == -1 || row == rowsCount) {
            col++;
            isUp = !isUp;
            if (row == -1) {
                row++;
            }
            if (row == rowsCount) {
                row--;
            }
        }
        point++;
    }
    return res;
}


arr.snail(5, 4);
console.log(res);
// /**
//  * const arr = [1,2,3,4];
//  * arr.snail(1,4); // [[1,2,3,4]]
//  */

// let arr = [];
// arr.push([]);
// arr.push([]);
// arr.push([]);
// arr[0][0] = 0;
// arr[1][0] = 1;
// arr[2][0] = 2;
// arr[0][1] = 3;
// arr[1][1] = 4;

// console.log(arr);
