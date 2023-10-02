// Учитывая заголовок отсортированного связанного списка,
// удалите все узлы с повторяющимися номерами,
// оставив только отдельные номера из исходного списка.
// Верните связанный список также отсортированным.
// 82




const util = require('util');
util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, null))))))
);



var deleteDuplicates = function (head) {

    let current = head;

    while (current.next) {
        console.log(current)
        const temp = current.val;
        current = current.next;
        while (temp === current.val) {
            console.log(current.val)
            current = current.next;
        }

        //current = current.next;

    }

    //console.log(head)
};

console.log(deleteDuplicates(head))