// Учитывая связанный список, поменяйте местами каждые два соседних узла и верните его голову.
// Вы должны решить проблему, не изменяя значения в узлах списка(т.е.изменять можно только сами узлы).
// 24


const util = require('util');
util.inspect.defaultOptions.depth = null;


function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, null))))))))
);

// head = new ListNode(1);
// head = null; 

var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let previousNode = null;
    let currentNode = head;
    while (currentNode && currentNode.next) {
        const temp = currentNode.next;
        currentNode.next = temp.next;
        temp.next = currentNode;
        if (previousNode) {
            previousNode.next = temp;
        } else {
            head = temp;
        }
        previousNode = currentNode;
        currentNode = currentNode.next;
    }
    return head;
};


console.log(swapPairs(head))