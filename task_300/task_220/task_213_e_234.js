// Учитывая заголовок односвязного списка, верните true, если это
// палиндром или ложь в противном случае.
// 234



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1, new ListNode(NaN)))));

let isPalindrome = function (head) {

    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let prevNode = null;
    while (slow) {
        const nextNode = slow.next;
        slow.next = prevNode;
        prevNode = slow;
        slow = nextNode;
    }

    let firstHalf = head;
    let secondHalf = prevNode;
    while (secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true;

};

console.log(isPalindrome(head))