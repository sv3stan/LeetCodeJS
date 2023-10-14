// Вам даны два непустых связанных списка, представляющих 
// два неотрицательных целых числа.Самая значащая цифра идет первой, 
// и каждый из их узлов содержит одну цифру.
// Сложите два числа и верните сумму в виде связанного списка.
// Вы можете предположить, что эти два числа не содержат ведущих нулей, 
// кроме самого числа 0.
// 445

const { match } = require('assert');
const util = require('util');
util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// let l1 = new ListNode(7, new ListNode(2, new ListNode(4, new ListNode(3, null))));
// let l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

let l1 = new ListNode(null);
let l2 = new ListNode(null);


var addTwoNumbers = function (l1, l2) {


    const stack1 = [];
    const stack2 = [];


    let head = l1;
    let current = head;

    while (current) {
        stack1.push(current.val);
        current = current.next;
    }
    head = l2;
    current = head;
    while (current) {
        stack2.push(current.val);
        current = current.next;
    }

    const sum = [];
    const len1 = stack1.length;
    const len2 = stack2.length;

    const maxLength = Math.max(len1, len2)
    let carry = 0;

    for (let i = 0; i < maxLength; i++) {
        const temp = (stack1[len1 - i - 1] || 0) + (stack2[len2 - i - 1] || 0) + carry;
        const digit = temp % 10;
        carry = Math.floor(temp / 10);
        sum.unshift(digit);
    }
    if (carry > 0) {
        sum.unshift(carry);
    }


    // console.log(sum)

    head = new ListNode(sum[0]);
    current = head;

    for (let i = 1; i < sum.length; i++) {
        current.next = new ListNode(sum[i]);
        current = current.next;
    }

    return head;
};


console.log(addTwoNumbers(l1, l2))