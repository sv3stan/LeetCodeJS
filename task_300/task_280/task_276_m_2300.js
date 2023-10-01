// Вам даны два массива заклинаний и зелий положительных целых чисел длиной n и m соответственно, 
// где Spells[i] представляет силу i - го заклинания, а potions[j] представляет силу j - го зелья.
// Вам также дается целочисленный успех.Пара заклинаний и зелий считается успешной, 
// если произведение их сильных сторон равно успеху.
// Возвращает целочисленный массив пары длины n, где пары[i] — это количество зелий, 
// которые образуют успешную пару с i - м заклинанием.
// 2300


spells = [5, 1, 3], potions = [1, 2, 3, 4, 5], success = 7
spells = [3, 1, 2], potions = [8, 5, 8], success = 16


var successfulPairs = function (spells, potions, success) {
    const answer = [];
    potions.sort((a, b) => a - b)

    for (let i = 0; i < spells.length; i++) {

        const product = success / spells[i];
        let left = 0;
        let right = potions.length - 1;

        while (left <= right) {
            const middle = (left + right) >> 1;
            if (potions[middle] < product) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        answer.push(potions.length - left);
    }

    return answer;


};


console.log(successfulPairs(spells, potions, success))





// // this number will help us to find the index of the first potion which is equal or more than that number
// const product = success / spell;
// let left = 0, right = potions.length - 1;
// // standard binary search
// while (left <= right) {
//     const middle = Math.floor((left + right) / 2);
//     if (potions[middle] < product) {
//         left = middle + 1;
//     } else {
//         right = middle - 1;
//     }
// }
// // the answer for this number would be the difference between the potions leng and the index
// answer.push(potions.length - left);



// console.log(successfulPairs(spells, potions, success))



















// const answer = [];
// potions.sort((a, b) => b - a)

// for (let i = 0; i < spells.length; i++) {
//     let count = 0;
//     while ((spells[i] * potions[j] >= success)) {
//         console.log(spells[i] + ' - spells[i] - ' + potions[j] + ' - potions[j]')
//         if (spells[i] * potions[j] >= success) {
//             count++;
//         } else {
//             break;
//         }

//     }
//     answer.push(count)
// }

// return answer;
