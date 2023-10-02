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

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, null)))))));
//let head = new ListNode(1, new ListNode(1, null));


var deleteDuplicates = function (head) {
    let hashTable = new Map();
    let current = head;
    let prevCurrent = null;
    while (current) {
        console.log(current.val)
        hashTable.set(current.val, (hashTable.get(current.val) || 0) + 1);
        current = current.next;
    }
    current = head;
    //prevCurrent = null;
    console.log(hashTable)
    // Второй проход: удаляем дубликаты
    while (current) {
        if (hashTable.get(current.val) > 1) {
            if (prevCurrent) {
                prevCurrent.next = current.next; // Удаляем текущий элемент из связанного списка
            } else {
                head = current.next; // Если удаляемый элемент - первый в списке, обновляем голову
            }
        } else {
            prevCurrent = current;
        }
        current = current.next;
    }

    return head; // Возвращаем новую голову списка
};

console.log(deleteDuplicates(head))


















// while (current.next) {
//     console.log(current.next)
//     //console.log(current)
//     const temp = current.val;
//     prevCurrent = current;
//     //console.log(prevNode)
//     current = current.next;
//     //console.log(current)
//     if (temp === current.val) {
//         console.log(current.val)
//         prevCurrent = current.next;

//         //console.log(current)
//     }
//     //prevCurrent.next = current;
//     //current = current.next;
//     //console.log(prevNode)
// }