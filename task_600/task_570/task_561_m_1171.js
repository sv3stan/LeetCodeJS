// Учитывая заголовок связанного списка, мы неоднократно удаляем последовательные 
// последовательности узлов, сумма которых равна 0, пока таких последовательностей не останется.
// После этого верните заголовок окончательного связанного списка.Вы можете вернуть любой такой ответ.
// (Обратите внимание, что в приведенных ниже примерах все последовательности являются сериализацией объектов ListNode.)

// 1171

const util = require('util');
util.inspect.defaultOptions.depth = null;
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//let l1 = new ListNode(2, new ListNode(4, new ListNode(9, null)));
//let l2 = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(8, null))));
let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))))));
let head = new ListNode(1, new ListNode(2, new ListNode(-3, new ListNode(3, new ListNode(1, null)))));


var removeZeroSumSublists = function (head) {
    const answer = new ListNode(0);
    answer.next = head;
    let prefixSum = 0;
    const hashTable = { 0: answer };

    let current = answer.next;

    while (current) {
        prefixSum += current.val;

        if (prefixSum in hashTable) {
            
            let temp = hashTable[prefixSum].next;
            let tempSum = prefixSum + temp.val;

            while (temp !== current) {
                delete hashTable[tempSum];
                temp = temp.next;
                tempSum += temp.val;
            }

            hashTable[prefixSum].next = current.next;
        } else {
            hashTable[prefixSum] = current;
        }

        current = current.next;
    }

    return answer.next;
};


console.log(removeZeroSumSublists(head))

