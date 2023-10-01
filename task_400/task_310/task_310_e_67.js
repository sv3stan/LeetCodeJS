// Даны две двоичные строки a и b, верните их сумму в виде двоичной строки.
// 67


a = "1010", b = "1011"
a = "11", b = "1"
a = "0", b = "0"
a = "1", b = "111"

var addBinary = function (a, b) {

    const length = Math.max(a.length, b.length);
    let carry = '0';
    let answer = '';

    a = "0".repeat(length - a.length) + a;
    b = "0".repeat(length - b.length) + b;
    console.log(a)
    console.log(b)

    for (let i = length - 1; i >= 0; i--) {

        console.log(i + ' - i - ' + a[i] + ' - a[i] - ' + b[i] + ' - b[i] - ' + carry + ' - carry - ')

        if (carry === '1') {

            if ((a[i] === '1' && b[i] === '1')) {
                answer = '1' + answer;
                carry = '1'
            } else {
                if (a[i] === '0' && b[i] === '0') {
                    answer = '1' + answer; carry = '0'
                } else {
                    answer = '0' + answer; carry = '1'
                }
            }
        } else {
            if ((a[i] === '1' && b[i] === '1')) {
                answer = '0' + answer;
                carry = '1'
            } else {
                if (a[i] === '0' && b[i] === '0') {
                    answer = '0' + answer; carry = '0'
                } else {
                    answer = '1' + answer; carry = '0'
                }
            }
        }



        console.log(answer)

    }
    if (carry === '1') answer = '1' + answer;

    return answer

};

console.log(addBinary(a, b))