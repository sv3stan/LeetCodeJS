/**
Дан заголовок связанного списка, в котором каждый узел содержит целочисленное значение.
Между каждой парой соседних узлов вставьте новый узел со значением, равным их наибольшему общему делителю.
Вернуть связанный список после вставки.
Наибольший общий делитель двух чисел — это наибольшее положительное целое число, которое делит оба числа нацело.
 */

const util = require('util');
util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let m = 3;
let n = 5;
let head = new ListNode(
    18,
    new ListNode(6, new ListNode(10, new ListNode(3, null))),
);
let insertGreatestCommonDivisors = function (head) {
    let current = head;

    while (current && current.next) {
        let num1 = current.val;
        let num2 = current.next.val;

        let max = gcd(num1, num2);

        let gcdNode = new ListNode(max);

        gcdNode.next = current.next;
        current.next = gcdNode;

        current = gcdNode.next;
    }

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    return head;
};

console.log(insertGreatestCommonDivisors(head));
