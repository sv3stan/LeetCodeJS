// Вам дан заголовок связанного списка.Удалите средний узел и верните заголовок измененного связанного списка.
// Средний узел связанного списка размера n — это ⌊n / 2⌋-й узел от начала с использованием индексации, 
// отсчитываемой от 0, где ⌊x⌋ обозначает наибольшее целое число, меньшее или равное x.
// Для n = 1, 2, 3, 4 и 5 средние узлы равны 0, 1, 1, 2 и 2 соответственно.
// 2095
const util = require('util');
util.inspect.defaultOptions.depth = null;


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
head = new ListNode(1, null);
let n = 2;

var deleteMiddle = function (head) {

    let currentNode = head;
    let n = 0;
    while (currentNode) {
        n++;
        //   console.log(currentNode.val);
        currentNode = currentNode.next;
    }
    let previousNode = head;
    if (n === 1) return head = head.next;
    n = Math.floor(n / 2);
    // console.log(n)
    currentNode = head;
    while (n > 0) {
        previousNode = currentNode
        currentNode = currentNode.next;
        console.log(previousNode)
        n--;
    }


    // if (previousNode) {
    previousNode.next = currentNode.next;
    //} else {
    // Если средний узел - это первый элемент списка
    // head = head.next;
    //}

    return head;
};

console.log(deleteMiddle(head))