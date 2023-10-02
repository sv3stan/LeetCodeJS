// Учитывая заголовок связанного списка, поверните список вправо на k мест.
// 61

const util = require('util');
util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let head = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);
k = 7;
var rotateRight = function (head, k) {
    if (!head || k === 0) {
        return head;
    }

    let current = head;
    let n = 1;
    while (current.next) {
        n++;
        current = current.next;
    }
    k %= n;
    if (k === 0) return head; // Ничего не делаем, если k равно 0
    // Найдем новый "головной" элемент
    let newHead = head;

    for (let i = 1; i < n - k; i++) {
        if (newHead) {
            newHead = newHead.next;
        } else {
            return head; // Выйдем, если список слишком короткий
        }
    }

    current.next = head;
    head = newHead.next;
    newHead.next = null;

    return head;
};

console.log(rotateRight(head, k));

// if (!head || k === 0) {
//     return head;
// }

// // Найдем длину списка
// let length = 1;
// let current = head;
// while (current.next) {
//     length++;
//     current = current.next;
// }

// // Вычислим, сколько раз нужно выполнить вращение
// k = k % length;

// if (k === 0) {
//     return head; // Ничего не делаем, если k равно 0
// }

// // Найдем новый "головной" элемент
// let newHead = head;
// for (let i = 1; i < length - k; i++) {
//     if (newHead) {
//         newHead = newHead.next;
//     } else {
//         return head; // Выйдем, если список слишком короткий
//     }
// }

// // Обновим указатель на конец списка, чтобы сделать его замкнутым
// if (current) {
//     current.next = head;
//     head = newHead.next;
//     newHead.next = null;
// }

// return head;
