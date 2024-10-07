/**
Учитывая массив целых чисел arr, замените каждый элемент его рангом.
Ранг показывает, насколько велик элемент. Ранг имеет следующие правила:
Ранг — целое число, начиная с 1.
Чем больше элемент, тем больше ранг. Если два элемента равны, их ранг должен быть одинаковым.
Ранг должен быть как можно меньшим.
 */

let arrayRankTransform = function (arr) {
    const answer = [];
    const temp = [...arr].sort((a, b) => a - b);
    let index = 1;
    const hash = new Map();
    for (let i = 0; i < temp.length; i++) {
        if (!hash.has(temp[i])) {
            hash.set(temp[i], index++);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        const num = hash.get(arr[i]);
        answer.push(num);
    }
    return answer;
};
