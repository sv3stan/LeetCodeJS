// Учитывая заголовки двух односвязных списков headA и headB, верните узел, в котором эти два списка пересекаются.
// Если два связанных списка вообще не пересекаются, верните ноль.
// 160

const util = require('util');
util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

//listA = [4, 1, 8, 4, 5], listB = [5, 6, 1, 8, 4, 5]

let headA = new ListNode(4, new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5, new ListNode())))));
let headB = new ListNode(5, new ListNode(6, new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5, null))))));

var getIntersectionNode = function (headA, headB) {

    if (headA == null || headB == null) return null;

    let nodeA = headA;
    let nodeB = headB;


    while (nodeA != nodeB) {

        nodeA = nodeA == null ? headB : nodeA.next;
        nodeB = nodeB == null ? headA : nodeB.next;
    }

    return nodeA;

};

console.log(getIntersectionNode(headA, headB))