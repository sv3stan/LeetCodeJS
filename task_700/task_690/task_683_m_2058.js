/**
Критическая точка в связанном списке определяется как локальный максимум или локальный минимум.
Узел является локальным максимумом, если текущий узел имеет значение строго большее, чем предыдущий узел и следующий узел.
Узел является локальным минимумом, если текущий узел имеет значение строго меньше, чем предыдущий узел и следующий узел.
Обратите внимание, что узел может быть локальным максимумом/минимумом только в том случае, если существует как предыдущий узел, так и следующий узел.
Учитывая заголовок связанного списка, верните массив длиной 2, содержащий [minDistance, maxDistance], где minDistance — минимальное расстояние между любыми двумя различными критическими точками, а maxDistance — максимальное расстояние между любыми двумя различными критическими точками. Если критических точек меньше двух, верните [-1, -1].
 */

const util = require('util');
util.inspect.defaultOptions.depth = null;
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
let head = new ListNode(
    1,
    new ListNode(
        3,
        new ListNode(
            2,
            new ListNode(
                2,
                new ListNode(
                    3,
                    new ListNode(
                        2,
                        new ListNode(2, new ListNode(2, new ListNode(7, null))),
                    ),
                ),
            ),
        ),
    ),
);

let nodesBetweenCriticalPoints = function (head) {
    if (!head || !head.next || !head.next.next) {
        return [-1, -1];
    }

    let current = head;
    let minDistance = Infinity;
    let maxDistance = -1;
    let firstCriticalIndex = -1;
    let lastCriticalIndex = -1;
    let prevCriticalIndex = -1;
    let count = 1;

    while (current.next.next) {
        let first = current.val;
        let second = current.next.val;
        let third = current.next.next.val;

        if (
            (first < second && second > third) ||
            (first > second && second < third)
        ) {
            if (firstCriticalIndex === -1) {
                firstCriticalIndex = count;
            } else {
                if (prevCriticalIndex !== -1) {
                    minDistance = Math.min(
                        minDistance,
                        count - prevCriticalIndex,
                    );
                }
                maxDistance = count - firstCriticalIndex;
            }
            prevCriticalIndex = count;
        }

        current = current.next;
        count++;
    }

    if (minDistance === Infinity) {
        minDistance = -1;
    }

    return [minDistance, maxDistance];
};

console.log(nodesBetweenCriticalPoints(head));
