// Дан целочисленный массив arr из различных целых чисел и целого числа k.
// Игра будет вестись между первыми двумя элементами массива(т.е.arr[0] и 
// arr[1]). В каждом раунде игры мы сравниваем arr[0] с arr[1], большее целое 
// число выигрывает и остается в позиции 0, а меньшее целое число перемещается 
// в конец массива.Игра заканчивается, когда целое число выигрывает k раундов подряд.
// Верните целое число, которое выиграет игру.
// Гарантировано, что в игре будет победитель.
// 1535

arr = [2, 1, 3, 5, 4, 6, 7], k = 2

var getWinner = function (arr, k) {

    let count = 0;

    let winnerPrev = Math.max(arr[0], arr[1]);
    let loss = 0;
    while (count < k) {
        let winner = 0;
        if (arr[0] > arr[1]) {
            loss = arr.splice(1, 1);
            arr = [...arr, ...loss];
            winner = arr[0];
        } else {
            loss = arr.shift(arr);
            arr.push(loss);
            winner = arr[1];
        }

        console.log(arr)
        console.log(winner + ' - winner - ' + winnerPrev + ' - winnerPrev')

        if (winner === winnerPrev) {
            count++;
        } else {
            count = 0;
        }

        console.log(count)

        winnerPrev = winner;
    }

    return winnerPrev;
    // const loss = arr.splice(1, 1);
    // console.log(loss)
    // arr = [...arr, ...loss];
    // console.log(arr)

};


console.log(getWinner(arr, k))