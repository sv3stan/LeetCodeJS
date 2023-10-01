// Учитывая заголовок связанного списка, верните список после его сортировки в порядке возрастания.
// 148



// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


// let headArr = [5, 2, 10, 7, 1, 8, 3, 6, 4, 9, 12];
// function arrayToLinkedList(headArr) {
//     let dummyHead = new ListNode();
//     let current = dummyHead;

//     for (let val of headArr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }

//     return dummyHead.next;
// }


//head = arrayToLinkedList(headArr);
let head = new ListNode(5, new ListNode(2, new ListNode(10, new ListNode(7, new ListNode(1, new ListNode(8, new ListNode(3, new ListNode(6, new ListNode(4, new ListNode(9))))))))));
//let list1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))));
//let list2 = new ListNode(-1, new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(0)))));


//let list1 = [4, 2, 1, 3];
//let list2 = [-1, 5, 3, 4, 0];

function mergeTwoLists(list1, list2) {
    // mergedList = { val: -1, next: null },
    mergedList = new ListNode(0);
    current = mergedList;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;
    return mergedList.next;

};

function sortList(head) {


    if (!head || !head.next)
        return head;

    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow.next;
    slow.next = null;

    let list1 = sortList(head);
    let list2 = sortList(mid);

    return mergeTwoLists(list1, list2);

};
//mergeTwoLists(list1, list2);
//console.log(mergeTwoLists(list1, list2));
console.log(sortList(head));