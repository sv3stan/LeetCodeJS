// Учитывая заголовок односвязного списка, переверните список и верните перевернутый список.
// 206




function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let head = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));

function reverseList(head) {
    function revers(head) {
        if (head === null || head.next === null) {
            return head;
        }
        const reversedList = revers(head.next);
        head.next.next = head;
        head.next = null;
        return reversedList;
    }
    const reversed = revers(head)
    current = reversed;
    while (current !== null) {
        current = current.next;
    }
    return reversed;
};

console.log(reverseList(head))


// let lessThanX = new ListNode();
// let currentLessThanX = lessThanX;
// let moreThanX = new ListNode();
// let currentMoreThanX = moreThanX;
// //lessThanX = new ListNode(13);

// while (head !== null) {
//     if (head.val < x) {
//         currentLessThanX.next = new ListNode(head.val);
//         currentLessThanX = currentLessThanX.next;
//     } else {
//         currentMoreThanX.next = new ListNode(head.val)
//         currentMoreThanX = currentMoreThanX.next;
//     }
//     head = head.next;
// }

// currentMoreThanX.next = null;
// currentLessThanX.next = moreThanX.next;
// return lessThanX.next;