// Учитывая строку s, представляющую допустимое выражение, 
// реализуйте базовый калькулятор для ее вычисления и возвращайте результат вычисления.
// Примечание.Вам не разрешено использовать какие - либо встроенные функции, 
// которые оценивают строки как математические выражения, например eval().
// 224

s = "(1+(4+5+2)-3)+(6+8)" //s=23
//s = " 2-1 + 2 "
//s = "1 + 1"
s = "1-(     -2)"
s = "- (14 - (2 - 4)) + 3"
var calculate = function (s) {

    let answer = 0;
    let sign = 1;
    let resultOfExpression = 0;
    let stackExpression = [1]
    for (let x of s) {
        if (x >= '0' && x <= '9') resultOfExpression = resultOfExpression * 10 + (x - '0');
        else {
            answer += resultOfExpression * sign * stackExpression[stackExpression.length - 1];
            resultOfExpression = 0;
            if (x === '-') sign = -1;
            else if (x === '+') sign = 1;
            else if (x === '(') { stackExpression.push(stackExpression[stackExpression.length - 1] * sign); sign = 1; }
            else if (x === ')') stackExpression.pop();
        }

    }
    return answer += (sign * resultOfExpression);
    // const stackOperator = [];
    // const stackOperand = [];



    // for (let i = s.length - 1; i >= 0; i--) {
    //     let str = '';
    //     console.log(i + ' - i - ' + s[i] + ' - s[i] - ')
    //     if (s[i] === '+' || s[i] === '-') {
    //         stackOperator.push(s[i])
    //     }
    //     if (s[i] >= '0' && s[i] <= '9') {
    //         while (i >= 0 && s[i] >= '0' && s[i] <= '9') {
    //             str = s[i] + str;
    //             i--;
    //         }
    //         i++; // Вернемся на первый символ числа
    //         stackOperand.push(parseInt(str, 10));
    //     }
    // }

    // console.log(stackOperand)
    // console.log(stackOperator)
    // let answer = stackOperand.pop();
    // console.log(answer + ' - answer ')
    // while (stackOperand.length !== 0 && stackOperator.length !== 0) {

    //     const operand2 = stackOperand.pop()
    //     console.log(operand2 + ' - operand2')
    //     if (stackOperator.pop() === '+') {
    //         answer += operand2;
    //     } else {
    //         answer -= operand2;
    //     }
    //     console.log(answer + ' - answer ')
    // }



    // console.log(stackOperand)
    // console.log(stackOperator)

    // return answer
};

console.log(calculate(s))












// const stackOperator = [];
// const stackOperand = [];



// for (let i = s.length - 1; i >= 0; i--) {
//     let str = '';
//     console.log(i + ' - i - ' + s[i] + ' - s[i] - ')
//     if (s[i] === '+' || s[i] === '-') {
//         stackOperator.push(s[i])
//     }
//     if (s[i] >= '0' && s[i] <= '9') {
//         while (i >= 0 && s[i] >= '0' && s[i] <= '9') {
//             str = s[i] + str;
//             i--;
//         }
//         i++; // Вернемся на первый символ числа
//         stackOperand.push(parseInt(str, 10));
//     }
// }

// console.log(stackOperand)
// console.log(stackOperator)
// let answer = stackOperand.pop();
// console.log(answer + ' - answer ')
// while (stackOperand.length !== 0 && stackOperator.length !== 0) {

//     const operand2 = stackOperand.pop()
//     console.log(operand2 + ' - operand2')
//     if (stackOperator.pop() === '+') {
//         answer += operand2;
//     } else {
//         answer -= operand2;
//     }
//     console.log(answer + ' - answer ')
// }



// console.log(stackOperand)
// console.log(stackOperator)

// return answer





























// const stackExpression = [];

// let begin = 1;
// let temp = 0;


// for (let i = 2; i < s.length; i++) {
//     let str = '';
//     let operand = '';


//     if (s[i] === '+' || s[i] === '-') {
//         operand = s[i]
//     }
//     console.log(operand + ' - operand')


//     if ((s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57)) {
//         while ((s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57 && i < s.length)) {
//             str += s[i];
//             i++;
//         }
//         i--;
//         temp = parseInt(str, 10);
//         console.log(temp + ' - temp')
//     }





//     if (operand === '+') {
//         console.log('++++++++++++++++++++++++')
//         begin += temp;
//         console.log(begin + ' - begin')
//     }
//     if (operand === '-') {
//         console.log('-----------------------');
//         begin -= temp;
//         console.log(begin + ' - begin')
//     }

// }





// console.log(begin)


















// const stackExpression = [];

// let begin = 0;
// let temp = 0;


// for (let i = 0; i < s.length; i++) {
//     let str = '';
//     let operand = '';


//     if (s[i] === '+' || s[i] === '-') {
//         operand = s[i]
//         stackExpression.push(s[i])
//     }
//     // console.log(s[i])
//     if ((s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57)) {
//         while ((s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57 && i < s.length)) {
//             str += s[i];
//             i++;
//         }
//         i--;
//         temp = parseInt(str, 10);
//         console.log(temp + ' - temp')
//         stackExpression.push(str)
//     }



//     console.log(operand + ' - operand')

//     if (!begin) {
//         console.log('begin = temp ')
//         begin = temp
//     } else {
//         if (operand === '+') {
//             console.log('++++++++++++++++++++++++')
//             begin += temp;
//             console.log(begin + ' - begin')
//         }
//         if (operand === '-') {
//             console.log('-----------------------');
//             begin -= temp;
//             console.log(begin + ' - begin')
//         }
//     }

// }


// console.log(begin)
// console.log(stackExpression)