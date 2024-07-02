// Учитывая заголовок односвязного списка и два целых числа слева и справа, где слева <= справа,
// поменяйте местами узлы списка с позиции слева на позицию справа и верните перевернутый список.
// 92

const util = require('util');
util.inspect.defaultOptions.depth = null;
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let left = 1;
let right = 2;
let head = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(
                4,
                new ListNode(
                    5,
                    new ListNode(
                        6,
                        new ListNode(7, new ListNode(8, new ListNode(9, null))),
                    ),
                ),
            ),
        ),
    ),
);

head = new ListNode(3, new ListNode(5, null));

let reverseBetween = function (head, left, right) {
    if (!head || left === right) {
        return head;
    }

    let dummyNode = new ListNode(0);
    dummyNode.next = head;
    let prevNode = dummyNode;
    let currentNode = head;

    for (let i = 1; i < left; i++) {
        prevNode = currentNode;
        currentNode = currentNode.next;
    }

    for (let i = left; i < right; i++) {
        let temp = currentNode.next;
        currentNode.next = temp.next;
        temp.next = prevNode.next;
        prevNode.next = temp;
    }

    if (left === 1) {
        head = dummyNode.next;
    }

    return head;
};

console.log(reverseBetween(head, left, right));

// if (!head || left === right) {
//     return head;
// }

// let currentNode = head;
// //let numberNodes = 1;

// for (let i = 1; i < left - 1; i++) {
//     currentNode = currentNode.next;
//     //  numberNodes = i;
// }

// let leftNode = currentNode.next;

// for (let i = left; i < right; i++) {
//     currentNode = currentNode.next;

// }
// let rightNode = currentNode.next;
// // rightNode.val = leftNode.val;
// // rightNode.next = currentNode.next;
// // let rightNext = currentNode.next.next;
// // // console.log(prevNodeiousRightNode)
// // console.log('prevNodeiousRightNode');
// // console.log(rightNode)
// // console.log('rightNode')

// const temp = leftNode.val;
// leftNode.val = currentNode.next.val;
// rightNode.val = temp;
// // //console.log(leftNode.val)
// // leftPrevNodeious.next = leftNode;
// // leftNode.next = leftNext;

// // left = rightNode;
// // rightNode = currentNode;

// return head;

//  vjt решение не верно, потому что не правильно понял задание
//  if (!head || left === right) {
//     return head;
// }
// let currentNode = head;
// for (let i = 0; i < left - 1; i++) {
//     currentNode = currentNode.next;
// }
// let leftNode = currentNode;
// for (let i = left; i < right; i++) {
//     currentNode = currentNode.next;
// }
// let rightNode = currentNode;
// const temp = leftNode.val;
// leftNode.val = rightNode.val;
// rightNode.val = temp;
// return head;
