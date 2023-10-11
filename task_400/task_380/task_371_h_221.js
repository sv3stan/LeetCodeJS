// Вам дан 2D целочисленный массив flowers с нулевым индексом, 
// где flowers[i] = [starti, endi] означает, что i - й цветок 
// будет цвести от начала до конца(включительно).Вам также дан 
// целочисленный массив людей с индексом 0 и размером n, где 
// люди[i] — это время, когда i - й человек придет посмотреть цветы.
// Возвращает целочисленный массив ответа размера n, где ответ[i] — 
// это количество цветов, которые полностью распускаются, 
// когда приходит i - й человек.
// 2251


flowers = [[1, 6], [3, 7], [9, 12], [4, 13]], people = [2, 3, 7, 11]

flowers = [[19, 37], [19, 38], [19, 35]], people = [6, 7, 21, 1, 13, 37, 5, 37, 46, 43]


var fullBloomFlowers = function (flowers, people) {
    const hash = new Map();
    hash.set(0, 0);

    for (const flower of flowers) {
        if (!hash.has(flower[0])) hash.set(flower[0], 0);
        if (!hash.has(flower[1] + 1)) hash.set(flower[1] + 1, 0);
        hash.set(flower[0], hash.get(flower[0]) + 1);
        hash.set(flower[1] + 1, hash.get(flower[1] + 1) - 1);
    }

    const index = Array.from(hash.keys()).sort((a, b) => a - b);
    const prefix = [];
    let curr = 0;

    for (const item of index) {
        curr += hash.get(item);
        prefix.push(curr);
    }

    const answer = [];

    for (const person of people) {
        let i = index.findIndex((item) => item > person) - 1;
        answer.push(prefix[i] || 0);
    }

    return answer;
};



console.log(fullBloomFlowers(flowers, people))

