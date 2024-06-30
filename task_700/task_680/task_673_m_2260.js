/*
Вам дан целочисленный массив card, где card[i] представляет значение i-й карты. Пара карт считается совпадающей, если карты имеют одинаковое значение.
Возвращайте минимальное количество последовательных карт, которое вам нужно подобрать, чтобы среди выбранных карт была пара совпадающих карт. Если совпадающих карточек нет, верните -1.
*/

let cards = [3, 4, 2, 8, 6, 4, 7, 3];

let minimumCardPickup = function (cards) {
    const hash = new Map();
    let min = Infinity;

    for (let i = 0; i < cards.length; i++) {
        if (hash.has(cards[i])) {
            min = Math.min(min, Math.abs(i - hash.get(cards[i])));
            hash.set(cards[i], i);
        } else {
            hash.set(cards[i], i);
        }
    }

    console.log(hash);

    return min === Infinity ? -1 : min + 1;
};

console.log(minimumCardPickup(cards));
