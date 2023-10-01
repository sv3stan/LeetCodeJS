// Учитывая строку, содержащую цифры от 2 до 9 включительно, вернуть все возможные комбинации букв, 
// которые может представлять число.Верните ответ в любом порядке.
// Отображение цифр в буквы(точно так же, как на телефонных кнопках) приведено ниже.
// Обратите внимание, что 1 не соответствует ни одной букве.
// 17
let digits = [3, 2, 4, 2];
function letterpermutation(digits) {

    const digitsMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };

    if (digits.length === 0) {
        return [];
    }

    const permutation = [];

    function backtrack(index, currentPermutation) {
        if (index === digits.length) {
            permutation.push(currentPermutation);
            return;
        }

        const currentDigit = digits[index];
        const letters = digitsMap[currentDigit];

        for (const letter of letters) {
            backtrack(index + 1, currentPermutation + letter);
        }
    }

    backtrack(0, '');
    return permutation;

};

console.log(letterpermutation(digits));


// for (let i = 0; i < digits[0].length; i++) {
//     for (let j = 0; j < digits.length; j++) {

//         backtrack(digits[0][i], digits[j])
//         for (let k = 0; k < digits[j].length; k++) {

//         }
//     }
// }








// function permute(nums) {
//     const result = [];

//     function backtrack(currentPerm, remainingNums) {
//         if (remainingNums.length === 0) {
//             result.push([...currentPerm]); // Копируем текущую перестановку в результат
//             return;
//         }

//         for (let i = 0; i < remainingNums.length; i++) {
            // const newNum = remainingNums[i];
            // currentPerm.push(newNum); // Добавляем новое число в текущую перестановку
            // remainingNums.splice(i, 1); // Удаляем новое число из оставшихся чисел
            // backtrack(currentPerm, remainingNums); // Рекурсивно генерируем перестановки для оставшихся чисел
            // remainingNums.splice(i, 0, newNum); // Восстанавливаем удаленное число для проверки других вариантов
            // currentPerm.pop(); // Убираем последнее добавленное число для проверки других вариантов
//         }
//     }

//     backtrack([], nums); // Начинаем с пустой текущей перестановки и всего массива чисел
//     return result;
// }