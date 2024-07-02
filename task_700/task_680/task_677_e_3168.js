/*
Вам дана строка s. Имитировать события каждую секунду i:
Если s[i] == 'E', человек входит в комнату ожидания и занимает в ней один из стульев.
Если s[i] == 'L', человек выходит из зала ожидания, освобождая стул.
Верните минимальное количество стульев, необходимое для того, чтобы стул был доступен каждому человеку, входящему в зал ожидания, учитывая, что изначально он пуст. 
 */

let s = 'ELEELEELLL';
let minimumChairs = function (s) {
    let quantity = 0;
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === 'E' ? quantity++ : quantity--;
        answer = Math.max(answer, quantity);
    }

    return answer;
};

console.log(minimumChairs(s));
