// Загадка с n ферзями — это задача о том, как разместить n ферзей
// на шахматной доске размера n x n так, чтобы никакие два ферзя не атаковали друг друга.
// Учитывая целое число n, верните количество различных решений головоломки с n ферзями.
// 52


const totalNQueens = (n) => [...queens(n)].length;

function* queens(n, i = 0, a = [], b = [], c = []) {
    if (i === n) yield a;
    for (let j = 0; j < n; j++) {
        if (!a.includes(j) && !b.includes(i + j) && !c.includes(i - j)) {
            yield* queens(n, i + 1, a.concat(j), b.concat(i + j), c.concat(i - j));
        }
    }
};