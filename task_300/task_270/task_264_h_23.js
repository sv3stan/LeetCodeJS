// Вам дан массив из k списков связанных списков,
// каждый связанный список отсортирован в порядке возрастания.
// Объедините все связанные списки в один отсортированный
// связанный список и верните его.
// 23


//const { MinHeap } = require('datastructures-js');
const { MinPriorityQueue } = require('datastructures-js');

const util = require('util');
util.inspect.defaultOptions.depth = null;
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let list1 = new ListNode(1, new ListNode(4, new ListNode(5, null)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

var mergeKLists = function (lists) {


    const queue = new MinPriorityQueue({ priority: x => x.val })

    for (const head of lists) {
        if (head) {
            queue.enqueue(head)
        }
    }

    let answer = new ListNode()
    const head = answer

    while (!queue.isEmpty()) {
        const { val, next } = queue.dequeue().element

        answer.next = new ListNode(val)
        answer = answer.next

        if (next) {
            queue.enqueue(next)
        }
    }

    return head.next

};

console.log(mergeKLists(list1, list2))


















// let answer = null;

// function mergedLists(list1, list2) {

//     if (!list1) return list2;
//     if (!list2) return list1;

//     if (list1.val < list2.val) {
//         list1.next = mergedLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergedLists(list1, list2.next);
//         return list2;
//     }

// }

// for (let i = 0; i < lists.length; i++) answer = mergedLists(answer, lists[i])
// return answer;
