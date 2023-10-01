// Учитывая заголовок односвязного списка, сгруппируйте вместе все узлы с нечетными индексами, 
// за которыми следуют узлы с четными индексами, и верните переупорядоченный список.
// Первый узел считается нечетным, второй — четным и так далее.
// Обратите внимание, что относительный порядок внутри четных и нечетных групп должен оставаться таким, каким он был во входных данных.
// Вы должны решить задачу со сложностью дополнительного пространства O(1) и сложностью времени O(n).
// 328

const util = require('util');
util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, null))))))))
);

var oddEvenList = function (head) {
    if (!head || !head.next) return head;

    let odd = new ListNode();
    let currentOdd = odd;
    let even = new ListNode();
    let currentEven = even;
    let index = 1;

    while (head !== null) {
        if (index % 2 === 0) {
            currentEven.next = new ListNode(head.val);
            currentEven = currentEven.next;
        } else {
            currentOdd.next = new ListNode(head.val)
            currentOdd = currentOdd.next;
        }
        head = head.next;
        index++;
    }
    currentEven.next = null;
    currentOdd.next = even.next;
    return odd.next;

};


console.log(oddEvenList(head))