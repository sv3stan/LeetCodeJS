/**
Дан массив целых чисел arr четной длины n и целое число k.
Мы хотим разделить массив ровно на n/2 пар так, чтобы сумма каждой пары делилась на k.
Верните true, если вы можете найти способ сделать это, или false в противном случае.
 */

let canArrange = function (arr, k) {
    const hash = new Map();
    for (let i = 0; i < arr.length; i++) {
        const rem = ((arr[i] % k) + k) % k;
        hash.set(rem, (hash.get(rem) || 0) + 1);
    }

    for (let i = 0; i < arr.length; i++) {
        const rem = ((arr[i] % k) + k) % k;

        if (rem === 0) {
            if (hash.get(rem) % 2 === 1) return false;
        } else if (hash.get(rem) != hash.get(k - rem)) {
            return false;
        }
    }
    return true;
};
