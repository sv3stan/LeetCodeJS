// Строка «PAYPALISHIRING» записывается зигзагообразным узором в заданном количестве строк, 
// например: (вы можете отобразить этот узор фиксированным шрифтом для лучшей читаемости)
// П   А   Х   Н
// А П Л С И И Г
// Й   И   Р
// А затем прочитайте построчно: «ПАХНАПЛСИИГЙИР»
// Напишите код, который будет принимать строку и выполнять это преобразование, 
// учитывая количество строк:
// преобразование строки(строка s, int numRows);
// 6
// занес эту задачу сюда, вместо предыдущей здесь №1218 задачи. Должна была идти на место task_315 задачи.


s = "PAYPALISHIRING", numRows = 4;

var convert = function (s, numRows) {

    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const rows = Array.from({ length: numRows }, () => []);
    let row = 0;
    let direct = 1;

    for (const ch of s) {
        rows[row].push(ch);
        //   console.log(rows)
        if (row === 0) {
            direct = 1;
        } else if (row === numRows - 1) {
            direct = -1;
        }

        row += direct;
    }

    //const result = rows.forEach(row => row.join(''));
    let result = '';
    for (const row of rows) result += row.join('');
    return result;
};

console.log(convert(s, numRows))

