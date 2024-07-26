/**
Учитывая строковую формулу, представляющую химическую формулу, верните количество каждого атома.
Атомный элемент всегда начинается с символа верхнего регистра, за которым следуют ноль или более букв нижнего регистра, обозначающих имя.
Одна или несколько цифр, обозначающих количество этого элемента, могут следовать, если счетчик больше 1. Если счетчик равен 1, никаких цифр следовать не будет.
Например, «H2O» и «H2O2» возможны, а «H1O2» — нет.
Две формулы объединяются для получения другой формулы.
Например, «H2O2He3Mg4» — тоже формула.
Формула, заключенная в круглые скобки, и число (добавленное дополнительно) также являются формулой.
Например, «(H2O2)» и «(H2O2)3» — это формулы.
Возвращает количество всех элементов в виде строки в следующей форме: первое имя (в отсортированном порядке), затем его количество (если это количество больше 1), затем второе имя (в отсортированном порядке), а затем его счетчик (если этот счетчик больше 1) и так далее.
Тестовые случаи генерируются таким образом, чтобы все выходные значения помещались в 32-битное целое число.
 */

let formula = 'K4(ON(SO3)2)2';

let countOfAtoms = function (formula) {
    let hash = new Map();
    let stack = [];
    let i = 0,
        n = formula.length;

    while (i < n) {
        if (formula[i] === '(') {
            stack.push(hash);
            hash = new Map();
            i++;
        } else if (formula[i] === ')') {
            i++;
            let start = i;
            while (i < n && !isNaN(formula[i])) i++;
            let multiplier = parseInt(formula.slice(start, i) || 1);
            let prevCounts = hash;
            hash = stack.pop();
            for (let [element, count] of prevCounts) {
                hash.set(
                    element,
                    (hash.get(element) || 0) + count * multiplier,
                );
            }
        } else {
            let start = i;
            i++;
            while (i < n && formula[i].match(/[a-z]/)) i++;
            let name = formula.slice(start, i);
            start = i;
            while (i < n && !isNaN(formula[i])) i++;
            let count = parseInt(formula.slice(start, i) || 1);
            hash.set(name, (hash.get(name) || 0) + count);
        }
    }

    let sorted = Array.from(hash).sort((a, b) => a[0].localeCompare(b[0]));
    return sorted
        .map(([element, count]) => element + (count > 1 ? count : ''))
        .join('');
};

console.log(countOfAtoms(formula));
