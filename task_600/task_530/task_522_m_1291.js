// Целое число имеет последовательные цифры тогда и только тогда, 
// когда каждая цифра числа на одну больше предыдущей.
// Возвращает отсортированный список всех целых чисел в 
// диапазоне[низкое, высокое] включительно, 
// которые имеют последовательные цифры.
// 1291

low = 10;
high = 1000000000;

low = 1000; high = 13000;

var sequentialDigits = function (low, high) {
    const answer = [];

    for (let i = 1; i <= 9; i++) {

        let number = i;
        let next = i + 1;

        while (number <= high && next <= 9) {
            number = number * 10 + next;
            if (low <= number && number <= high) {
                answer.push(number);
            }
            ++next;
        }
    }


    return answer.sort((a, b) => a - b);

};


console.log(sequentialDigits(low, high));


// const answer = [];

// for (let i = low; i <= high; i++) {

//     const arrDigit = i.toString().split('').map(item => parseInt(item));

//     let diff = true;

//     for (let j = 0; j < arrDigit.length - 1; j++) {
//         if (arrDigit[j + 1] - arrDigit[j] !== 1) {
//             diff = false;
//         }
//     }

//     if (diff === true) {
//         answer.push(parseInt(arrDigit.join('')));
//     } else {
//         diff = true;
//     }
// }

// return answer;

