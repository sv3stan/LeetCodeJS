/**
Вам дан массив целых чисел и заголовок связанного списка. Верните заголовок измененного связанного списка после удаления из связанного списка всех узлов, значение которых существует в числах.
 */

const util = require('util');
util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let head = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(4, new ListNode(5, new ListNode(6, null))),
        ),
    ),
);

let nums = [1, 2, 3];

let modifiedList = function (nums, head) {
    const hash = new Set(nums);
    let dummy = { next: head };
    let current = head;
    let prev = dummy;

    while (current) {
        hash.has(current.val) ? (prev.next = current.next) : (prev = current);
        current = current.next;
    }
    return dummy.next;
};

console.log(modifiedList(nums, head));
