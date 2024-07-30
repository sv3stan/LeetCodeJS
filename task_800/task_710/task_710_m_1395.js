/**
В шеренге стоят n солдат. Каждому солдату присвоено уникальное значение рейтинга.
Вам необходимо сформировать из них команду из 3 солдат по следующим правилам:
Выберите 3 солдата с индексом (i, j, k) и рейтингом (рейтинг[i], рейтинг[j], рейтинг[k]).
Команда засчитывается, если: (рейтинг[i] < рейтинг[j] < рейтинг[k]) или (рейтинг[i] > рейтинг[j] > рейтинг[k]), где (0 <= i < j < k < н).
Возвращает количество команд, которые вы можете сформировать с учетом условий. (солдаты могут входить в несколько команд).
 */

let rating = [2, 5, 3, 4, 1];

let numTeams = function (rating) {
    const n = rating.length;
    const inc = Array.from({ length: n }, () => Array(4).fill(0));
    const dec = Array.from({ length: n }, () => Array(4).fill(0));
    for (let i = 0; i < n; i++) {
        inc[i][1] = 1;
        dec[i][1] = 1;
    }

    for (let count = 2; count <= 3; count++) {
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (rating[j] > rating[i]) {
                    inc[j][count] += inc[i][count - 1];
                }
                if (rating[j] < rating[i]) {
                    dec[j][count] += dec[i][count - 1];
                }
            }
        }
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        res += inc[i][3] + dec[i][3];
    }

    return res;
};

console.log(numTeams(rating));
