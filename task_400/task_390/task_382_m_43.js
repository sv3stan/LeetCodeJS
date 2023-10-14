// Учитывая два неотрицательных целых числа num1 и num2, 
// представленных в виде строк, верните произведение num1 и num2, 
// также представленное в виде строки.
// 43

num1 = "123", num2 = "456"
num1 = "9", num2 = "99"

let multiply = function (num1, num2) {




    const l1 = num1.length;
    const l2 = num2.length;
    const answer = Array.from({ length: l1 + l2 }).fill(0);

    for (let i = l1 - 1; i >= 0; i--) {
        for (let j = l2 - 1; j >= 0; j--) {
            const sum = parseInt(num1[i]) * parseInt(num2[j]) + answer[i + j + 1];
            answer[i + j] += Math.floor(sum / 10);
            answer[i + j + 1] = sum % 10;
        }
    }

    while (answer[0] === 0 && answer.length > 1) answer.shift();

    return answer.join('');

};


console.log(multiply(num1, num2))