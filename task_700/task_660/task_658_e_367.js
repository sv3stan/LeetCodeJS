/**
Учитывая положительное целое число num, верните true, если num является точным квадратом, или false в противном случае.
Идеальный квадрат — это целое число, которое является квадратом целого числа. Другими словами, это произведение некоторого целого числа само на себя.
Вы не должны использовать какие-либо встроенные библиотечные функции, такие как sqrt.
 */

let num = 900;

let isPerfectSquare = function (num) {
    let left = 0;
    let right = num;

    while (left <= right) {
        let middle = Math.floor((right + left) / 2);
        const sqrd = middle * middle;
        if (sqrd === num) {
            return true;
        } else if (sqrd < num) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return false;
};

console.log(isPerfectSquare(num));
