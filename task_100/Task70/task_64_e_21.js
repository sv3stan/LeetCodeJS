// Вам даны заголовки двух отсортированных связанных списков list1 и list2.
// Объедините два списка в один отсортированный список.Список должен быть составлен путем соединения узлов первых двух списков.
// Возвращает заголовок объединенного связанного списка.
//21



// class ListNode {
//     constructor(val) {
//         this.val = val;       // Значение узла
//         this.next = null;     // Ссылка на следующий узел в списке
//     }
// }




/// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


let list1 = new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(3))));
let list2 = new ListNode(2, new ListNode(4, new ListNode(6, new ListNode(3))));



// let list1 = [1, 3, 5];
// let list2 = [2, 4, 6];
// var mergeTwoLists = function (list1, list2) {
//     if (!list1) return list2;
//     if (!list2 == null) return list1;
//     let tmp = new ListNode(0);
//     let head = tmp;
//     while (list1 && list2) {
//         if (list1.val < list2.val) {
//             tmp.next = list1;
//             list1 = list1.next;
//         } else {
//             tmp.next = list2;
//             list2 = list2.next;
//         }
//         tmp = tmp.next;
//     }
//     if (list1) {
//         tmp.next = list1;
//     } else {
//         tmp.next = list2;
//     }
//     return head.next;
// };
// // 


var mergeTwoLists = function (list1, list2) {
    mergedList = { val: -1, next: null },
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


console.log(mergeTwoLists(list1, list2));






























// function mergeTwoLists(list1, list2) {
//     let sortedArray = [];
//     let i = 0;
//     let j = 0;
//     console.log(list1.length + ' - list1.lenght');
//     console.log(list2.length + ' - list2.lenght');
//     while (i < list1.length || j < list2.length) {
//         console.log('========================');
//         console.log(i + ' - i');
//         console.log(j + ' - j');

//         //if (i === list2.length) sortedArray.push(list1[i]);
//         if (list1[i] <= list2[j]) {
//             console.log('first - then');
//             sortedArray.push(list1[i]);
//             if (i <= list1.length - 1) i++;

//         } else {
//             console.log('first - else');
//             sortedArray.push(list2[j]);
//             if (j <= list2.length - 1) j++;
//         }
//         if (j === list2.length) { sortedArray.push(list1[i]); i++; }
//         // if (list1[j] <= list2[i]) {
//         //     sortedArray.push(list2[j]);
//         //     console.log('second - first');
//         //     if (j <= list2.length - 1) j++;
//         // } else {
//         //     console.log('second - else');
//         //     sortedArray.push(list1[i]);
//         //     if (i <= list1.length - 1) i++;
//         // }
//         console.log(sortedArray);
//         console.log(i + ' - i');
//         console.log(j + ' - j');
//     }

//     console.log(sortedArray);

// }
















// function mergeTwoLists(list1, list2) {
//     let sortedArray = [];
//     let firstPointer = 0;
//     let firstFinish = false;
//     let first = 0;
//     let secondPointer = 0;
//     let secondFinish = false;
//     let second = 0;

//     first = list1[firstPointer];
//     second = list2[secondPointer];
//     console.log(list1.length + ' - list1.lenght');
//     console.log(list2.length + ' - list2.lenght');
//     while ((!firstFinish) || (!secondFinish)) {
//         console.log('========================');
//         console.log(firstFinish + ' - firstFinish');
//         console.log(secondFinish + ' - secondFinish');
//         console.log(firstPointer + ' - first');
//         console.log(secondPointer + ' - second');
//         //if (i === list2.length) sortedArray.push(list1[i]);
//         // if (firstFinish) { first = -101; } else { first = list1[firstPointer]; }
//         // if (secondFinish) { second = -101; } else { second = list2[secondPointer]; }

//         console.log(first + ' - first');
//         console.log(second + ' - second');
//         if (first >= second) {
//             // sortedArray.push(second);
//             // if (!secondFinish) secondPointer++;

//             console.log('first - then');

//             if (secondFinish) {
//                 let i = firstPointer;
//                 console.log(i + ' - i');
//                 while (i < list1.length) {
//                     sortedArray.push(list1[i]);
//                     i++;
//                     console.log(sortedArray);
//                 }
//                 firstFinish = true;
//             } else {
//                 if (second !== undefined) sortedArray.push(second);
//                 secondPointer++;
//             }




//         } else {

//             if (firstFinish) {
//                 let i = secondPointer;
//                 console.log(i + ' - i');
//                 while (i < list2.length) {
//                     sortedArray.push(list2[i]);
//                     i++;
//                     console.log(sortedArray);
//                 }
//                 secondFinish = true;
//             } else {
//                 if (first !== undefined) sortedArray.push(first);
//                 firstPointer++;
//             }



//             console.log('first - else');
//         }

//         if (secondPointer >= list2.length) {
//             secondFinish = true;
//             //second = list2[secondPointer];
//         } else {
//             second = list2[secondPointer];
//         }




//         if (firstPointer >= list1.length) {
//             firstFinish = true;
//             //first = list1[firstPointer];

//         } else {
//             first = list1[firstPointer];
//         }




//         //console.log(sortedArray);
//         console.log(firstPointer + ' - first');
//         console.log(secondPointer + ' - second');
//     }

//     console.log(sortedArray);

// }
















//function mergeTwoLists(list1, list2) {
//     let sortedArray = [];
//     let firstPointer = 0;
//     let firstFinish = false;
//     let first = 0;
//     let secondPointer = 0;
//     let secondFinish = false;
//     let second = 0;
//     first = list1[firstPointer];
//     second = list2[secondPointer];
//     while ((!firstFinish) || (!secondFinish)) {
//         if (first >= second) {
//             if (secondFinish) {
//                 let i = firstPointer;
//                 while (i < list1.length) {
//                     sortedArray.push(list1[i]);
//                     i++;
//                 }
//                 firstFinish = true;
//             } else {
//                 if (second !== undefined) sortedArray.push(second);
//                 secondPointer++;
//             }
//         } else {
//             if (firstFinish) {
//                 let i = secondPointer;
//                 while (i < list2.length) {
//                     sortedArray.push(list2[i]);
//                     i++;
//                 }
//                 secondFinish = true;
//             } else {
//                 if (first !== undefined) sortedArray.push(first);
//                 firstPointer++;
//             }
//         }
//         if (secondPointer >= list2.length) {
//             secondFinish = true;
//         } else {
//             second = list2[secondPointer];
//         }
//         if (firstPointer >= list1.length) {
//             firstFinish = true;
//         } else {
//             first = list1[firstPointer];
//         }
//     }

//     return sortedArray;
// }