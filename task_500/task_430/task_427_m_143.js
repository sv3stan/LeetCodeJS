// Вам дан заголовок односвязного списка.
// Список можно представить в виде:
// L0 → L1 → … → Ln - 1 → Ln
// Измените порядок списка, придав ему следующий вид:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// Вы не можете изменять значения в узлах списка.
// Изменять можно только сами узлы.
// 143



const { count } = require('console');
const util = require('util');
util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

//let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, null)))))));

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))));

//let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));


var reorderList = function (head) {

    if (!head || !head.next || !head.next.next) {
        return head;
    }

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let previous = null;
    let current = slow.next;
    slow.next = null;
    while (current) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    // Step 3: Merge the two halves
    let listFirst = head;
    let listSecond = previous;
    while (listSecond) {
        const next1 = listFirst.next;
        const next2 = listSecond.next;
        listFirst.next = listSecond;
        listSecond.next = next1;
        listFirst = next1;
        listSecond = next2;
    }

    return head;


};


console.log(reorderList(head))















// let current = head;
// let count = 0;
// let previous = null;

// while (current !== null) {
//     count++;
//     current = current.next;
// }

// const middleList = (count >> 1);
// count = 0;
// current = head;

// while (count < middleList) {
//     current = current.next;
//     count++;
//     // previous = current;
// }

// //current = previous;
// console.log(current)
// //console.log(previous)
// let middle = current;
// //previous = null;
// while (middle !== null) {
//     const next = middle.next;
//     middle.next = previous;
//     previous = middle;
//     middle = next;
// }



// console.log(previous)
// current = head;

// // let mergedList = new ListNode(-1); // создаем фиктивный узел
// // let newCurrent = mergedList;

// // while (current || previous) {
// //     if (current) {
// //         newCurrent.next = current;
// //         newCurrent = newCurrent.next;
// //         current = current.next;
// //     }
// //     if (previous) {
// //         newCurrent.next = previous;
// //         newCurrent = newCurrent.next;
// //         previous = previous.next;
// //     }
// // }




// console.log(head)