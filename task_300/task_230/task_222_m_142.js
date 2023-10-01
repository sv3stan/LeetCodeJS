// Учитывая заголовок связанного списка, верните узел, с которого начинается цикл.Если цикла нет, верните ноль.
// В связанном списке существует цикл, если в списке есть некоторый узел, к которому можно снова добраться, 
// непрерывно следуя по следующему указателю.Внутри pos используется для обозначения индекса узла, 
// к которому подключен следующий указатель хвоста(с индексом 0).Это - 1, если цикла нет.
// Обратите внимание, что pos не передается в качестве параметра. Не изменяйте связанный список.
// 142

const util = require('util');
util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8,
    new ListNode(9, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(4,
        new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(4))))))))))))))))))))));

var detectCycle = function (head) {

    let slowPnt = head;
    let fastPnt = head;
    while (fastPnt && fastPnt.next && fastPnt.next.next) {
        slowPnt = slowPnt.next;
        fastPnt = fastPnt.next.next;
        if (slowPnt === fastPnt) {
            slowPnt = head;
            while (slowPnt !== fastPnt) {
                slowPnt = slowPnt.next;
                fastPnt = fastPnt.next;
            }
            return slowPnt;
        }
    }
    return null;
};

console.log(detectCycle(head))