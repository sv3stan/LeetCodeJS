// В связанном списке размера n, где n четно, i - й узел(с индексом 0) связанного списка известен 
// как двойник(n - 1 - i) - го узла, если 0 <= i <= (п / 2) - 1.
// Например, если n = 4, то узел 0 является двойником узла 3, а узел 1 — двойником узла 2. 
// Это единственные узлы с двойниками для n = 4. Сумма близнецов определяется как сумма узла и его двойника.
// Учитывая заголовок связанного списка четной длины, верните максимальную сумму двойников связанного списка.
// 2130


const util = require('util');
util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, null))))))));


var pairSum = function (head) {
    let currentNode = head;
    const stack = [];
    const pairs = [];
    let countNode = 0;

    while (currentNode) {
        currentNode = currentNode.next;
        countNode++;
    }
    currentNode = head;
    const middle = countNode / 2;
    countNode = 0;
    while (countNode < middle) {
        stack.push(currentNode.val);
        currentNode = currentNode.next;
        countNode++;
        console.log(stack)
    }

    while (countNode < middle * 2) {
        pairs.push(currentNode.val + stack.pop())
        console.log(currentNode.val);
        currentNode = currentNode.next;
        countNode++;
        console.log(pairs)
    }

    // console.log(currentNode.val);

    return Math.max(...pairs);


};

console.log(pairSum(head));