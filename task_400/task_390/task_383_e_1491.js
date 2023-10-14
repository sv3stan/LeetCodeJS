// Вам дан массив уникальных целых чисел, где зарплата[i] — 
// это зарплата i - го сотрудника.
// Возвращает среднюю зарплату сотрудников без учета минимальной 
// и максимальной зарплаты.Принимаются ответы в 
// пределах 10 - 5 от фактического ответа.
// 1491

salary = [4000, 3000, 1000, 2000]


var average = function (salary) {

    salary.sort((a, b) => a - b)
    let sum = 0;
    for (let i = 1; i < salary.length - 1; i++) sum += salary[i];
    return (sum / (salary.length - 2)).toFixed(5);

};


console.log(average(salary))