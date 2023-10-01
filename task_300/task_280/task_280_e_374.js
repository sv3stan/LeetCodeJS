// Мы играем в игру «Угадай». Игра заключается в следующем:
// Я выбираю число от 1 до n.Вы должны угадать, какой номер я выбрал.
// Каждый раз, когда вы угадаете неправильно, я скажу вам, 
// больше или меньше выбранное мной число, чем ваше предположение.
// Вы вызываете предопределенный API int догадку(int num), 
// который возвращает три возможных результата:
// -1: Ваша догадка больше, чем выбранное мной число(т.е.число > выбрать).
// 1: Ваша догадка меньше выбранного мной числа(т.е.число < выбрать).
// 0: ваша догадка равна выбранному мною числу(т.е.число == выбрать).
// Верните номер, который я выбрал.
// 374


/** 
 * Forward declaration of middle API.
 * @param {number} num   your middle
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 
 */

var guess = function (num) {

    if (num > pick) return -1
    if (num < pick) return 1
    if (num = pick) return 0

}

/**
 * @param {number} n
 * @return {number}
 */

n = 10, pick = 6
//n = 3, pick = 1
n = 2126753390, pick = 1702766719

var guessNumber = function (n) {
    // let left = 1;
    // let right = n;

    // while (left <= right) {
    //     const middle = Math.floor((left + right) >> 1);
    //     const res = middle(middle);

    //     if (res === 0) {
    //         // Если результат равен 0, значит, мы угадали число.
    //         return middle;
    //     } else if (res === -1) {
    //         // Если результат равен -1, число меньше нашего предположения.
    //         right = middle - 1;
    //     } else {
    //         // В противном случае (результат равен 1), число больше нашего предположения.
    //         left = middle + 1;
    //     }
    // }

    // // Если цикл завершается без нахождения числа, что-то пошло не так.
    // return -1;


    let left = 1;
    let right = n;

    while (true) {
        // Генерируем случайное число в текущем диапазоне.
        const middle = Math.floor(Math.random() * (right - left + 1)) + left;
        const answer = guess(middle);

        if (answer === 0) {
            // Если результат равен 0, значит, мы угадали число.
            return middle;
        } else if (answer === -1) {
            // Если результат равен -1, число меньше нашего предположения.
            right = middle - 1;
        } else {
            // В противном случае (результат равен 1), число больше нашего предположения.
            left = middle + 1;
        }
    }


};

console.log(guessNumber(n))










// let x = n / 2;
// while (middle(x) !== 0) {

//     if (middle(x) === 1) {

//         x += x % 2;

//     } else {

//         x -= x % 2;
//     }
//     console.log(x)
// }

// return x;