// Учитывая заголовок односвязного списка и целое число k, 
// разбейте связанный список на k последовательных частей связанного списка.
// Длина каждой части должна быть по возможности одинаковой: никакие две части не должны иметь размер, 
// отличающийся более чем на единицу.Это может привести к тому, что некоторые части станут нулевыми.
// Детали должны располагаться в порядке появления во входном списке, а части, встречающиеся раньше, 
// всегда должны иметь размер, больший или равный частям, появляющимся позже.
// Вернуть массив из k частей.
// 725


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(9))))))))));
k = 3;

var splitListToParts = function (head, k) {

    let current = head;
    let numberNodes = 0;

    while (current) {
        current = current.next;
        numberNodes++;
    }

    const quotient = Math.floor(numberNodes / k);
    const remainder = numberNodes % k;
    const answer = [];

    current = head;

    for (let i = 0; i < k; i++) {
        const head = current;
        const extra = i < remainder ? 1 : 0;
        for (let j = 0; j < quotient + extra - 1; j++) {
            if (current != null) current = current.next;
        }
        if (current != null) {
            const nextNode = current.next;
            current.next = null;
            current = nextNode;
        }
        answer.push(head);
    }
    return answer;

};

console.log(splitListToParts(head, k))