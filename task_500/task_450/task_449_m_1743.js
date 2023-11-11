// Существует целочисленный массив nums, состоящий из n уникальных элементов, 
// но вы его забыли.Однако вы помните каждую пару соседних элементов в числах.
// Вам дан двумерный целочисленный массив смежных пар размера n - 1, 
// где каждый смежный массив[i] = [ui, vi] указывает, что элементы ui и vi 
// являются соседними в числах.
// Гарантируется, что каждая соседняя пара элементов nums[i] и nums[i + 1] 
// будет существовать в соседних парах либо как[nums[i], nums[i + 1]] 
// либо[nums[i + 1], nums[я]].Пары могут появляться в любом порядке.
// Верните исходные числа массива.Если существует несколько решений, 
// верните любое из них.
// 1743

adjacentPairs = [[2, 1], [3, 4], [3, 2]]

var restoreArray = function (adjacentPairs) {

    const pairs = new Map();

    for (const item of adjacentPairs) {
        if (!pairs.has(item[0])) pairs.set(item[0], []);
        if (!pairs.has(item[1])) pairs.set(item[1], []);
        pairs.get(item[0]).push(item[1]);
        pairs.get(item[1]).push(item[0]);
    }

    const answer = [];
    let start = -Infinity;

    for (const [entry, values] of pairs) {
        if (values.length === 1) {
            start = entry;
            break;
        }
    }

    let left = -Infinity;
    answer.push(start);

    for (let i = 1; i <= adjacentPairs.length; i++) {
        const item = pairs.get(start);
        const newval = item[0] !== left ? item[0] : item[1];
        answer.push(newval);
        left = start;
        start = newval;
    }

    return answer;

};

console.log(restoreArray(adjacentPairs))