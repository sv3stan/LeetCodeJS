// Учитывая заголовок связанного списка и значение x, разделите его так, чтобы все узлы, 
// меньшие x, располагались перед узлами, большими или равными x.
// Вы должны сохранить исходный относительный порядок узлов в каждом из двух разделов.
// 86



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

//let head = [1, 4, 3, 2, 5, 2];
let head = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
let x = 3;

function partition(head, x) {

    //let head = head;
    //console.log(head)

    let lessThanX = new ListNode();
    let currentLessThanX = lessThanX;
    let moreThanX = new ListNode();
    let currentMoreThanX = moreThanX;
    //lessThanX = new ListNode(13);

    while (head !== null) {
        if (head.val < x) {
            currentLessThanX.next = new ListNode(head.val);
            currentLessThanX = currentLessThanX.next;
        } else {
            currentMoreThanX.next = new ListNode(head.val)
            currentMoreThanX = currentMoreThanX.next;
        }
        head = head.next;
    }

    currentMoreThanX.next = null;
    currentLessThanX.next = moreThanX.next;
    return lessThanX.next;
};

console.log(partition(head, x))