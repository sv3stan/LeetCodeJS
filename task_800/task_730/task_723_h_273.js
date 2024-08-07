/**
Преобразование целого неотрицательного числа num в его представление в виде английских слов.
 */

let num = 1234567;

let numberToWords = function (num) {
    const BEFORE_20 = [
        '',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
    ];
    const TENS = [
        '',
        '',
        'Twenty',
        'Thirty',
        'Forty',
        'Fifty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninety',
    ];
    const THOUSANDS = ['', 'Thousand', 'Million', 'Billion'];

    if (num === 0) return 'Zero';

    let i = 0;
    let answer = '';
    function helper(num) {
        if (num === 0) return '';
        else if (num < 20) return BEFORE_20[num] + ' ';
        else if (num < 100)
            return TENS[Math.floor(num / 10)] + ' ' + helper(num % 10);
        else
            return (
                BEFORE_20[Math.floor(num / 100)] +
                ' Hundred ' +
                helper(num % 100)
            );
    }

    while (num > 0) {
        if (num % 1000 !== 0) {
            answer = helper(num % 1000) + THOUSANDS[i] + ' ' + answer;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return answer.trim();
};

console.log(numberToWords(num));
