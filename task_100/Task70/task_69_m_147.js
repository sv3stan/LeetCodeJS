// Учитывая заголовок односвязного списка, отсортируйте список, 
// используя сортировку вставками, и верните заголовок отсортированного списка.
//147

let head = new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(2, new ListNode(4, new ListNode(6))))));
//let head = new ListNode(5, new ListNode(2, new ListNode(10, new ListNode(7, new ListNode(1, new ListNode(8, new ListNode(3, new ListNode(6, new ListNode(4, new ListNode(9))))))))));
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}



function insertionSortList(head) {
    function sortList(num) {
        let prev = null;
        let currentSortedNode = sortedHead;
        while (currentSortedNode !== null && currentSortedNode.val < num) {
            prev = currentSortedNode;
            currentSortedNode = currentSortedNode.next;
        }

        if (!prev) {
            sortedHead = new ListNode(num, sortedHead);
        } else {
            prev.next = new ListNode(num, prev.next);
        }
    }

    if (!head || !head.next) {
        return head;
    }

    const sortedHead = new ListNode(head.val);
    let current = head.next;

    while (current !== null) {
        sortList(current.val)
        current = current.next;
    }

    return sortedHead;
}




console.log(insertionSortList(head));














// const newNode = new ListNode(sourceNode.val);
// newNode.next = this.head;
// this.head = newNode;

// const newNode = new ListNode(sourceNode.val);
// newNode.next = sortedList.head;
// sortedList.head = newNode;















// while (current !== null) {

//     const newNode = new ListNode(current.val);
//     console.log('current.val')
//     console.log(current.val)
//     console.log('currentSortedNode.val')
//     console.log(currentSortedNode.val)


//     if (current.val >= currentSortedNode.val) {
//         console.log('+++++++++++++')
//         console.log('newNode.val')
//         console.log(newNode.val)
//         currentSortedNode.next = newNode;
//         currentSortedNode = newNode;

//     } else {
//         console.log('--------------')
//         newNode.next = currentSortedNode;
//         //currentSortedNode = newNode;



//     }
//     temp = newNode.val
//     current = current.next;



//     //sourceNode = sourceNode.next;
// }




//function insertionSortList(head) {

//     function sortList(num) {
//         // console.log('currentSortedNode')
//         // console.log(currentSortedNode)
//         let prev = sortedHead;
//         //currentSortedNode = sortedHead;
//         let current = sortedHead;
//         while (current !== null) {

//             console.log('num')
//             console.log(num)
//             console.log('current.val')
//             console.log(current.val)

//             if (current.val < num) {
//                 if (current !== null) {
//                     console.log('+++++++++++++++')
//                     console.log('current.next');
//                     console.log(current.next);
//                     let newNode = new ListNode(num);
//                     console.log('newNode')
//                     console.log(newNode)
//                     prev.next = newNode;
//                     prev = newNode;
//                     current.next = newNode;
//                     current = newNode;
//                 } else {
//                     console.log('=============')
//                 }
//             }
//             prev = current;
//             current = current.next;
//         }
//         console.log('current')
//         console.log(current)
//         console.log('sortedHead')
//         console.log(sortedHead)
//         return current;
//     }

//     let current = head;
//     const sortedHead = new ListNode(head.val);
//     let currentSortedNode = sortedHead;

//     current = current.next;
//     while (current !== null) {
//         sortList(current.val);
//         current = current.next;
//         //sourceNode = sourceNode.next;
//     }
//     console.log(sortedHead);

// };