// Дан целочисленный массив arr из различных целых чисел и целого числа k.
// Игра будет вестись между первыми двумя элементами массива(т.е.arr[0] и 
// arr[1]). В каждом раунде игры мы сравниваем arr[0] с arr[1], большее целое 
// число выигрывает и остается в позиции 0, а меньшее целое число перемещается 
// в конец массива.Игра заканчивается, когда целое число выигрывает k раундов подряд.
// Верните целое число, которое выиграет игру.
// Гарантировано, что в игре будет победитель.
// 1535

arr = [2, 1, 3, 5, 4, 6, 7], k = 2

//arr = [1, 11, 22, 33, 44, 55, 66, 77, 88, 99], k = 1000000000

var getWinner = function (arr, k) {
    if (k === 1) return Math.max(arr[0], arr[1]);
    if (k >= arr.length) return Math.max(...arr);

    let winner = arr[0];
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        if (winner > arr[i]) {
            count++;
        } else {
            winner = arr[i];
            count = 1;
        }

        if (count === k) return winner;
    }

    return winner;

    // let count = 1;
    // let winner = 0;
    // let loss = 0;

    // while (count < k) {

    //     if (arr[0] > arr[1]) {
    //         if (winner === arr[0]) {
    //             count++
    //         } else {
    //             winner = arr[0];
    //             count = 1;
    //         }
    //         loss = arr.splice(1, 1);
    //         arr = [...arr, ...loss];
    //     } else {
    //         if (winner === arr[1]) {
    //             count++
    //         } else {
    //             winner = arr[1];
    //             count = 1;
    //         }
    //         loss = arr.shift();
    //         arr.push(loss);
    //     }
    // }

    // return winner;

};


console.log(getWinner(arr, k))