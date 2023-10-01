// Вам предоставляется журнал посещений магазина покупателями, представленный строкой «клиенты» с индексом 0, 
// состоящей только из символов «N» и «Y»:
// если i - й символ — «Y», это означает, что клиенты приходят в i - й час
// тогда как «N» означает, что в i - й час ни один клиент не придет.
// Если магазин закрывается в j - й час(0 <= j <= n), штраф рассчитывается следующим образом:
// За каждый час работы магазина и отсутствия покупателей штраф увеличивается на 1.
// За каждый час закрытия магазина и прихода покупателей штраф увеличивается на 1.
// Возвращает самый ранний час, в который магазин должен быть закрыт, чтобы повлечь за собой минимальный штраф.
// Обратите внимание: если магазин закрывается в j - й час, это означает, что магазин закрывается в час j.

// 2483
customers = "YYNY"
customers = "NNNNN"
customers = "YYYY"
//customers = "YYYNYYYNYNYN"
var bestClosingTime = function (customers) {

    const length = customers.length - 1;
    let penalty = 0;
    let hour = 0;

    for (let i = 0; i <= length; i++) (customers[i] === 'Y') ? penalty++ : penalty;

    let min = penalty;
    console.log(penalty)

    for (let i = 0; i <= length; i++) {
        if (customers[i] === 'N') {
            penalty++;
        } else {
            penalty--;
        }
        // console.log(penalty + ' - penalty - ' + min + ' - min')
        if (min > penalty) {
            min = penalty;
            hour = i + 1;
        }
        console.log(penalty + ' - penalty - ' + min + ' - min - ' + hour + ' - hour')


    }
    return hour;
};

console.log(bestClosingTime(customers))