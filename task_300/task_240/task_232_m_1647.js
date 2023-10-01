// Строка s называется хорошей, если в ней нет двух разных символов, имеющих одинаковую частоту.
// Учитывая строку s, верните минимальное количество символов, которые необходимо удалить, чтобы исправить s.
// Частота появления символа в строке — это количество раз, когда он появляется в строке.
// Например, в строке «aab» частота «a» равна 2, а частота «b» — 1.
// 1647

s = "ceabaacb"


var minDeletions = function (s) {


    let answer = 0;
    const charQuantity = new Map();
    const freqSet = new Set();

    // Заполняем charQuantity счетчиками символов
    for (const char of s) {
        charQuantity.set(char, (charQuantity.get(char) || 0) + 1);
    }

    //console.log(charQuantity)
    for (let count of charQuantity.values()) {
        //console.log(count)
        while (count > 0 && freqSet.has(count)) {
            count--;
            //   console.log(count + ' -- count --')
            answer++;
        }
        freqSet.add(count);
    }

    return answer;


};


console.log(minDeletions(s))





// const length = s.length;
// const hash = new Map();
// let deleting = 0;

// for (let i = 0; i < length; i++) {
//     hash.set(s[i], (hash.get(s[i]) + 1) || 1)

// }

// for (const [key, value] of hash.entries()) {
//     console.log(value)
//     if (hash.has(value)) {
//         console.log(' ---------  ')
//         hash.set(key, value - 1);
//         deleting++;
//     }
// }
// console.log(hash)
// return deleting