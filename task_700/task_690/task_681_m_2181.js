/**
Вам дан заголовок связанного списка, который содержит ряд целых чисел, разделенных нулями. Начало и конец связанного списка будут иметь Node.val == 0.
Для каждых двух последовательных нулей объединить все узлы, лежащие между ними, в один узел, значение которого является суммой всех объединенных узлов. Измененный список не должен содержать нулей.
Вернуть заголовок измененного связанного списка.
 */

const util = require('util');
util.inspect.defaultOptions.depth = null;
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let head = new ListNode(
    0,
    new ListNode(
        3,
        new ListNode(
            1,
            new ListNode(
                0,
                new ListNode(
                    4,
                    new ListNode(
                        5,
                        new ListNode(
                            2,
                            new ListNode(
                                0,
                                new ListNode(
                                    6,
                                    new ListNode(
                                        8,
                                        new ListNode(
                                            1,
                                            new ListNode(
                                                0,
                                                new ListNode(
                                                    7,
                                                    new ListNode(
                                                        3,
                                                        new ListNode(
                                                            5,
                                                            new ListNode(
                                                                0,
                                                                null,
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        ),
    ),
);

let mergeNodes = function (head) {
    let current = head.next;
    let newHead = new ListNode();
    let newCurrent = newHead;
    let sum = 0;

    while (current) {
        if (current.val === 0) {
            newCurrent.val = sum;
            if (current.next !== null) {
                newCurrent.next = new ListNode();
                newCurrent = newCurrent.next;
            }

            sum = 0;
        } else {
            sum += current.val;
        }
        current = current.next;
    }

    return newHead;
};

console.log(mergeNodes(head));
