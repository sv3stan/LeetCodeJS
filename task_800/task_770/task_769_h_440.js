/**
Учитывая два целых числа n и k, верните k-е лексикографически наименьшее целое число в диапазоне [1, n].
 */

let n = 13;
let k = 2;

let findKthNumber = function (n, k) {
    const countSteps = (start, end, n) => {
        let steps = 0;
        while (start <= n) {
            // Добавляем количество чисел между start и end, ограниченное n + 1
            steps += Math.min(n + 1, end) - start;
            // Переходим на следующий уровень (добавляем разряд)
            start *= 10;
            end *= 10;
        }
        return steps;
    };

    let current = 1; // Начинаем с первого числа в лексикографическом порядке
    let rank = 1; // Текущий ранг

    while (rank < k) {
        // Подсчитываем количество чисел между текущим префиксом и следующим
        let steps = countSteps(current, current + 1, n);

        if (rank + steps <= k) {
            // Если искомое число находится за пределами текущего префикса,
            // переходим к следующему числу на том же уровне
            rank += steps;
            current += 1;
        } else {
            // Иначе, углубляемся в текущий префикс (переходим на уровень вниз)
            rank += 1;
            current *= 10;
        }
    }

    return current;
};

console.log(findKthNumber(n, k));
