// Учитывая функцию fn, вернуть запомненную версию этой функции.
// Запоминаемая функция — это функция, которая никогда не будет 
// вызываться дважды с одними и теми же входными данными.
// Вместо этого он вернет кэшированное значение.
// Вы можете предположить, что есть 3 возможных входных функции: сумма, фиб и факториал.
// sum принимает два целых числа a и b и возвращает a + b.
// fib принимает одно целое число n и возвращает 1, 
// если n <= 1, или fib(n - 1) + fib(n - 2) в противном случае.
// factorial принимает одно целое число n и возвращает 1, 
// если n <= 1, или factorial(n - 1) * n в противном случае.

//2623
let = "sum";
let = ["call", "call", "getCallCount", "call", "getCallCount"];
let = [[2, 2], [2, 2], [], [1, 2], []];

function memoize(fn) {
    const memorized = new Map();
    return function (...args) {
        const arguments = [...args];

        if (!memorized.has(arguments)) {
            const result = fn(arguments);
            memorized.set(arguments, result);
        }

        return memorized.get(arguments);

    }

}
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.
// Total call count: 1
memoizedSum(1, 2); // Returns 3. sum() was called as (1, 2) was not seen before.
// Total call count: 2