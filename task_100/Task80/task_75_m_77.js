// Даны два целых числа n и k, вернуть все возможные комбинации k чисел, выбранных из диапазона[1, n].
// Вы можете вернуть ответ в любом порядке.

//77

let n = 4;
let k = 2;

function combine(n, k) {
    let result = [];
    function backtrack(ahead, current = []) {
        if (current.length === k) {
            return result.push([...current])
        }
        for (let i = ahead; i <= n; i++) {
            current.push(i);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    backtrack(1, []);
    return result;
};

console.log(combine(n, k));