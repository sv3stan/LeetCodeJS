// Учитывая заголовок связанного списка и целое число val, 
// удалите все узлы связанного списка, у которых есть 
// Node.val == val, и верните новый заголовок.
// 203


const util = require('util');

util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, null)))))));

let val = 3;

var removeElements = function (head, val) {

    let current = head;
    let prev = null;

    while (current !== null) {
        if (current.val === val) {
            (prev === null) ? head = current.next : prev.next = current.next;
            current = current.next;
        } else {
            prev = current;
            current = current.next;
        }
    }
    return head;
};


console.log(removeElements(head, val))