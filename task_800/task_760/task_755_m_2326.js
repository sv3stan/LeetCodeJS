/*
Вам даны два целых числа m и n, которые представляют размеры матрицы.
Вам также предоставляется заголовок связанного списка целых чисел.
Создайте матрицу размера m x n, содержащую целые числа из связанного списка, представленного в спиральном порядке (по часовой стрелке), начиная с верхнего левого угла матрицы. Если остались пустые места, заполните их значением -1.
Верните сгенерированную матрицу.
*/

const util = require('util');
util.inspect.defaultOptions.depth = null;

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let m = 3;
let n = 5;
let head = new ListNode(
    3,
    new ListNode(
        0,
        new ListNode(
            2,
            new ListNode(
                6,
                new ListNode(
                    8,
                    new ListNode(
                        1,
                        new ListNode(
                            7,
                            new ListNode(
                                9,
                                new ListNode(
                                    4,
                                    new ListNode(
                                        2,
                                        new ListNode(
                                            5,
                                            new ListNode(
                                                5,
                                                new ListNode(0, null),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),
            ),
        ),
    ),
);
let spiralMatrix = function (m, n, head) {
    const matrix = Array.from({ length: m }, () =>
        Array.from({ length: n }).fill(-1),
    );

    let top = 0,
        bottom = matrix.length - 1;
    let left = 0,
        right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            if (!head) break;
            matrix[top][i] = head.val;
            head = head.next;
            console.log(matrix);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            if (!head) break;
            matrix[i][right] = head.val;
            head = head.next;
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                if (!head) break;
                matrix[bottom][i] = head.val;
                head = head.next;
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                if (!head) break;
                matrix[i][left] = head.val;
                head = head.next;
            }
            left++;
        }
    }

    return matrix;
};

console.log(spiralMatrix(m, n, head));
