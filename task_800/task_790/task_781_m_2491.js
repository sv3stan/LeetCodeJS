/**
 Вам дан массив положительных целых чисел, навык четной длины n, где навык[i] обозначает навык i-го игрока. Разделите игроков на n/2 команды размером 2 так, чтобы общий уровень навыков каждой команды был равным.
Сыгранность команды равна произведению навыков игроков этой команды.
Верните сумму сыгранности всех команд или верните -1, если нет возможности разделить игроков на команды так, чтобы общий навык каждой команды был равным.
 */

let dividePlayers = function (skill) {
    skill.sort((a, b) => a - b);
    let left = 0;
    let right = skill.length - 1;
    let multiSum = 0;
    let isTrue = skill[left] + skill[right];
    while (left < right) {
        if (skill[left] + skill[right] === isTrue) {
            multiSum += skill[left] * skill[right];
            left++;
            right--;
        } else return -1;
    }

    return multiSum;
};
