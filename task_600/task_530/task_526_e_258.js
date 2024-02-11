// Учитывая целое число, несколько раз сложите все его цифры,
// пока результат не будет содержать только одну цифру, и верните его.

// 258

num = 3865

var addDigits = function (num) {

    let answer = num;

    function sumDigit(x) {
        const str = x.toString();
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += parseInt(str[i]);
        }
        return sum;
    }

    while (answer > 9) {
        answer = sumDigit(answer);
    }

    return answer;
};


console.log(addDigits(num))