// Вам даны два непустых связанных списка, представляющих два неотрицательных целых числа.
// Цифры хранятся в обратном порядке, и каждый из их узлов содержит одну цифру.
// Сложите два числа и верните сумму в виде связанного списка.
// Вы можете предположить, что эти два числа не содержат ведущих нулей, кроме самого числа 0.
// 2

const util = require('util');
util.inspect.defaultOptions.depth = null;
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//let l1 = new ListNode(2, new ListNode(4, new ListNode(9, null)));
//let l2 = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(8, null))));
let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))))));
let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))));

var addTwoNumbers = function (l1, l2) {

    let current1 = l1;
    let current2 = l2;
    let transfer = 0;
    let head = null;
    let current = null;

    while (current1 !== null || current2 !== null) {


        let number1 = (current1 !== null) ? current1.val : 0;
        let number2 = (current2 !== null) ? current2.val : 0;
        let sum = number1 + number2 + transfer;

        if (sum > 9) {
            transfer = 1;
            sum -= 10;
        } else {
            transfer = 0;
        }

        const newNode = new ListNode(sum);
        if (head === null) {
            head = newNode;
            current = head;
        } else {
            current.next = newNode;
            current = newNode;
        }

        if (current1 !== null) current1 = current1.next;
        if (current2 !== null) current2 = current2.next;
    }


    if (transfer === 1) {
        current.next = new ListNode(1);
    }

    return head
};

console.log(addTwoNumbers(l1, l2))