// Учитывая строку s, состоящую из нулей и единиц, 
// верните максимальный балл после разделения строки 
// на две непустые подстроки(т.е.левую подстроку и правую подстроку).
// Оценка после разделения строки — это количество нулей 
// в левой подстроке плюс количество единиц в правой подстроке.

// 1422


s = "011101"
//s = "1111"
//s = "00111"
//s = "00"

var maxScore = function (s) {

    let answer = 0;

    let onesQuantity = s.split('').reduce((sum, element) => {
        if (element === '1') sum++;
        return sum;
    }, 0);
    let zerosQuantity = 0;

    for (let i = 0; i < s.length - 1; i++) {

        if (s[i] === '0') {
            zerosQuantity++;
        } else {
            onesQuantity--
        }

        answer = Math.max(answer, onesQuantity + zerosQuantity)
    }


    console.log(onesQuantity)
    return answer;
};


console.log(maxScore(s))