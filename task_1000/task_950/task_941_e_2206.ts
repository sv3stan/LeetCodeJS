/**
Вам дают целочисленные массивы, состоящие из 2 * N целых чисел. Вам нужно разделить числа на пары N, такие как: Каждый элемент принадлежит ровно одной паре. Элементы, присутствующие в паре, равны. Верните True, если NUM могут быть разделены на N пары, в противном случае вернуть ложь.
 */

function divideArray(nums: number[]): boolean {
    const hash = new Map();
    for (const num of nums) {
        if (hash.get(num)) {
            hash.set(num, hash.get(num) + 1);
        } else {
            hash.set(num, 1);
        }
    }
    for (const count of hash.values()) {
        if (count % 2 !== 0) {
            return false;
        }
    }
    return true;
}
