/*
Дан заголовок, который является ссылочным узлом односвязного списка. Значение каждого узла в связанном списке равно 0 или 1. Связанный список содержит двоичное представление числа.
Возвращает десятичное значение числа в связанном списке.
Самый значимый бит находится в начале связанного списка. 
 */

let getDecimalValue = function (head) {
    let current = head;
    let s = '';
    while (current) {
        s += current.val;
        current = current.next;
    }
    return parseInt(s, 2);
};

console.log(getDecimalValue(head));
