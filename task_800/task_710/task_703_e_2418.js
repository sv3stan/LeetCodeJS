/**
Вам дан массив имен строк и массив высот, состоящий из различных положительных целых чисел. Оба массива имеют длину n.
Для каждого индекса i имена[i] и высоты[i] обозначают имя и рост i-го человека.
Возвращает имена, отсортированные в порядке убывания роста людей.
 */

let names = ['Mary', 'John', 'Emma'];
let heights = [180, 165, 170];
let sortPeople = function (names, heights) {
    const height = new Array(names.length).fill().map(() => [0, 0]);
    for (let i = 0; i < names.length; i++) {
        height[i][0] = names[i];
        height[i][1] = heights[i];
    }
    height.sort((a, b) => b[1] - a[1]);
    return height.map(name => name[0]);
};

console.log(sortPeople(names, heights));
// return names
//     .map((name, i) => [name, heights[i]])
//     .sort((a, b) => b[1] - a[1])
//     .map(pair => pair[0]);
