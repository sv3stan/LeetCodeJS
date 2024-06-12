/*
Учитывая заголовок отсортированного связанного списка, удалите все дубликаты, чтобы каждый элемент появлялся только один раз. Верните связанный список также отсортированным.
*/
let deleteDuplicates = function (head) {
    const hash = new Set();
    let current = head;
    let prev = null;
    while (current !== null) {
        if (hash.has(current.val)) {
            prev.next = current.next;
        } else {
            hash.add(current.val);
            prev = current;
        }
        current = current.next;
    }

    return head;
};

console.log(deleteDuplicates(head));
