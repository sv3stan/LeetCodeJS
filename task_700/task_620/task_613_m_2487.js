/*
Вам дан заголовок связанного списка.
Удалите каждый узел, у которого есть узел с большим значением где-нибудь справа от него.
Вернуть заголовок измененного связанного списка.
*/

const util = require('util');

util.inspect.defaultOptions.depth = null;
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let head = new ListNode(
    5,
    new ListNode(2, new ListNode(13, new ListNode(3, new ListNode(8, null)))),
);

let removeNodes = function (head) {
    if (!head || !head.next) {
        return head;
    }

    const stack = [];
    let current = head;

    while (current) {
        // Проверяем, есть ли элементы в стеке и больше ли текущий элемент
        // чем элемент в вершине стека
        while (stack.length > 0 && current.val > stack[stack.length - 1].val) {
            stack.pop(); // Удаляем элементы из стека, которые меньше текущего
        }

        stack.push(current); // Добавляем текущий элемент в стек
        current = current.next; // Переходим к следующему элементу
    }

    // Формируем новый список из элементов стека
    let newHead = null;
    while (stack.length > 0) {
        const node = stack.pop();
        node.next = newHead;
        newHead = node;
    }

    return newHead;
};

console.log(removeNodes(head));
