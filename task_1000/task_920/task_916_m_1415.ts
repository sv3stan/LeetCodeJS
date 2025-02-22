/**
Счастливая строка - это строка, которая: состоит только из букв набора ['a', 'b', 'c']. s [i]! = s [i + 1] для всех значений I от 1 до S.length - 1 (строка 1 -индексированная). Например, строки «abc», «ac», «b» и «abcbacbcb» - все это счастливые струны и струны «aa», «Baa» и «Ababbc» не являются счастливыми струнами. Учитывая два целых числа N и K, рассмотрите список всех счастливых струн длины N, отсортированных в лексикографическом порядке. Верните строку KTH в этом списке или верните пустую строку, если есть меньше, чем k счастливые струны длины n.
как решить эту задачу на typescript
 */

function getHappyString(n: number, k: number): string {
    const chars = ['a', 'b', 'c'];
    let count = 0;
    function backtrack(current: string): string {
        if (current.length === n) {
            count++;
            return count === k ? current : '';
        }
        for (const char of chars) {
            if (current.length === 0 || char !== current[current.length - 1]) {
                const result = backtrack(current + char);
                if (result) return result;
            }
        }
        return '';
    }
    return backtrack('');
}
