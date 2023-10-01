// Учитывая заголовок связанного списка, поменяйте местами узлы списка k за раз
// и верните измененный список.
// k — целое положительное число, меньшее или равное длине связанного списка.
// Если количество узлов не кратно k, то пропущенные узлы в конечном итоге должны остаться такими,
// какие они есть.
// Вы не можете изменять значения в узлах списка, можно изменять только сами узлы.
// 25


const util = require('util');
util.inspect.defaultOptions.depth = null;


function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, null)))))))));
k = 3;

var reverseKGroup = function (head, k) {
    function reversed(head, k) {
        let prevNode = null;
        let currentNode = head;
        let count = 0;
        while (currentNode !== null && count < k) {
            currentNode = currentNode.next;
            count++;
        }
        if (count === k) {
            currentNode = head;
            count = 0;

            while (count < k) {
                const nextNode = currentNode.next;
                currentNode.next = prevNode;
                prevNode = currentNode;
                currentNode = nextNode;
                count++;
            }
            head.next = reverseKGroup(currentNode, k);
            return prevNode;
        }
        return head;
    }
    return reversed(head, k);
};

console.log(reverseKGroup(head, k))