// Вам даны два связанных списка: list1 и list2 размером n и m соответственно.
// Удалите узлы списка1 из узла ath в узел b и поместите на их место список2.
// Синие края и узлы на следующем рисунке обозначают результат:

// 569



const { count } = require('console');
const util = require('util');
util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let list1 = new ListNode(10, new ListNode(1, new ListNode(13, new ListNode(6, new ListNode(9, new ListNode(5, null))))));
let list2 = new ListNode(1000000, new ListNode(1000001, new ListNode(1000002, null)));
a = 3;
b = 4;

var mergeInBetween = function (list1, a, b, list2) {

    let head = list1;
    let head2 = list2;
    let current2 = head2;
    let current = head;
    let count = 0;
    let headPoint = 0;
    let endPoint = 0;
    // console.log(current)

    while (count <= b) {


        // console.log(current.val)
        // console.log(count + ' - count ')
        if (count === a - 1) {
            headPoint = current;
            // console.log(headPoint)
        }

        if (count === b) {
            endPoint = current;
            // console.log(endPoint)
        }
        current = current.next;
        count++;
    }

    while (current2) {
        headPoint.next = current2;
        current2 = current2.next;
        headPoint = headPoint.next;
    }


    headPoint.next = endPoint.next


    // console.log(headPoint)
    // console.log(endPoint)
    // console.log(head)

    return head;
};

console.log(mergeInBetween(list1, a, b, list2))