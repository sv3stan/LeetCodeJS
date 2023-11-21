// У Алисы есть некоторое количество карточек, и она хочет перегруппировать 
// карточки в группы так, чтобы каждая группа имела размер groupSize и 
// состояла из последовательных карточек groupSize.
// Учитывая hand из целочисленного массива, где hand[i] — это значение, 
// записанное на i - й карте, и целочисленный groupSize, верните true, 
// если она может переставлять карты, или false в противном случае.
// 846

hand = [1, 2, 3, 6, 2, 3, 4, 7, 8], groupSize = 3

var isNStraightHand = function (hand, groupSize) {

    if (hand.length % groupSize !== 0) {
        return false;
    }

    const hash = new Map();

    for (const card of hand) {
        hash.set(card, (hash.get(card) ?? 0) + 1);
    }

    hand.sort((a, b) => a - b);

    for (const card of hand) {
        if (hash.get(card) === 0) {
            continue;
        }


        for (let i = 0; i < groupSize; i++) {
            const currentCard = card + i;
            if (hash.get(currentCard) === undefined || hash.get(currentCard) === 0) {
                return false;
            }
            hash.set(currentCard, hash.get(currentCard) - 1);
        }
    }
    return true;
};


console.log(isNStraightHand(hand, groupSize))

