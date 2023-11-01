// Вам дан целочисленный массив размером n.
// Найдите и верните массив arr размера n, который удовлетворяет:
// pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
// Обратите внимание, что ^ обозначает операцию побитового исключения.
// Можно доказать, что ответ единственный.
// 2433

pref = [5, 2, 0, 3, 1];

var findArray = function (pref) {


    const answer = [];
    answer.push(pref[0]);
    for (let i = 1; i < pref.length; i++) answer.push(pref[i] ^ pref[i - 1]);
    return answer;
}



console.log(findArray(pref))