// Учитывая заголовок связанного списка, удалите n - й узел из конца списка и верните его заголовок.
// 19

const util = require('util');
util.inspect.defaultOptions.depth = null;


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
let n = 2;

var removeNthFromEnd = function (head, n) {
    let fictionNode = new ListNode(0);
    fictionNode.next = head;
    let currentNode = fictionNode;
    let previousNode = fictionNode;
    let numberNodes = 0;
    while (currentNode !== null) {
        currentNode = currentNode.next
        if (numberNodes > n) {
            previousNode = previousNode.next;
        }
        numberNodes++;
    }
    previousNode.next = previousNode.next.next;
    return fictionNode.next;
};

console.log(removeNthFromEnd(head, n))


























// var removeNthFromEnd = function (head, n) {
//     let fictionNode = new ListNode(0); // Создаем фиктивный узел, чтобы обработать случай, когда удаляемый узел - первый узел
//     fictionNode.next = head;
//     let currentNode = fictionNode;
//     let previousNode = fictionNode;
//     let numberNodes = 0;

//     while (currentNode !== null) {
//         console.log(currentNode.val + ' - currentNode.val')

//         currentNode = currentNode.next

//         if (numberNodes > n) {
//             console.log(previousNode.val + ' - previousNode.val - ')
//             //console.log(previousNode.next)

//             console.log(previousNode.next)
//             console.log(' --------- ')
//             previousNode = previousNode.next;

//         }
//         numberNodes++;
//     }

//     //    if (currentNode === null) return head;

//     previousNode.next = previousNode.next.next;
//     console.log(previousNode.next)

//     return fictionNode.next;



// };