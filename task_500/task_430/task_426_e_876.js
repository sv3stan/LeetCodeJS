// Учитывая заголовок односвязного списка, 
// верните средний узел связанного списка.
// Если есть два средних узла, верните второй средний узел.
// 876


const util = require('util');

util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

//let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, null)))))));

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))));

// let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));


var middleNode = function (head) {


    let slow = head;
    let fast = head;

    while (fast){
        slow = slow.next;
        fast = fast.next;
        fast = fast.next;
    }

    return slow;


};


console.log(middleNode(head))


    // let current = head;
    // let count = 0;

    // while (current) {
    //     count++;
    //     current = current.next
    // }
    
    // const middle = (count >> 1);
    // console.log(middle);

    // console.log(count)

    // count = 0;
    // current = head;

    // while (count < middle) {

    //     current = current.next;
    //     count++

    // }

    // return current;



















// let current = head;
// let count = 0;

// while (current !== null) {
//     count++;
//     current = current.next;
// }
// console.log(count)
// const middleList = (count >> 1) + 1;
// console.log(middleList)
// current = head;
// count = 1;

// while (count < middleList) {
//     current = current.next;
//     count++;
// }
// return current;