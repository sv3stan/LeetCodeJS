// Вам даны две строки order и s.Все символы заказа уникальны
//  и ранее были отсортированы в определенном порядке.
// Переставьте символы s так, чтобы они соответствовали порядку сортировки.
// Точнее, если символ x встречается перед символом y по порядку, 
// то x должен встречаться перед y в перестановочной строке.
// Возвращает любую перестановку s, удовлетворяющую этому свойству.

// 791

order = "cba", s = "abcd"

var customSortString = function (order, s) {

    const hash = new Map();
    let result = '';

    for (let i = 0; i < s.length; i++) {
        hash.set(s[i], (hash.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < order.length; i++) {
        let j = 0;
        if (hash.get(order[i])) {
            while (j < hash.get(order[i])) {
                result += order[i];
                j++
            }
            hash.delete(order[i])
        }
    }

    for (const [key, value] of hash.entries()) {
        j = 0;
        while (j < value) {
            result += key;
            j++
        }
    }

    return result;

};


console.log(customSortString(order, s))