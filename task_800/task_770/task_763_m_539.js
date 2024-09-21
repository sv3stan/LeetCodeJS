/**
Учитывая список моментов времени в 24-часовом формате в формате «ЧЧ:ММ», верните минимальную разницу в минутах между любыми двумя моментами времени в списке.
 */

let timePoints = ['00:00', '23:55'];
let findMinDifference = function (timePoints) {
    const temp = timePoints.map(el => {
        return el
            .split(':')
            .map(part => part.split(''))
            .map(digits => digits.map(digit => parseInt(digit, 10)))
            .map(digits => digits[0] * 10 + digits[1])
            .reduce((total, num) => total * 60 + num, 0);
    });

    let min = Infinity;
    temp.sort((a, b) => a - b);

    for (let i = 1; i < temp.length; i++)
        min = Math.min(min, temp[i] - temp[i - 1]);

    return Math.min(min, temp[0] + 24 * 60 - temp[temp.length - 1]);
};

console.log(findMinDifference(timePoints));
