/*
Вам дан целочисленный массив очков размера n, где счет[i] — результат i-го спортсмена на соревновании. Все баллы гарантированно уникальны.
Спортсмены распределяются по результатам: спортсмен, занявший 1-е место, имеет наивысший балл, спортсмен, занявший 2-е место, имеет 2-е место и так далее. Место каждого спортсмена определяет его ранг:
За первое место спортсмену присваивается звание «Золотая медаль».
Спортсмену за 2 место присвоено звание «Серебряная медаль».
Звание спортсмена за 3 место – «Бронзовая медаль».
Для спортсменов, занявших места с 4-го по n-е, их рейтинг равен номеру места (т. е. рейтинг спортсмена, занявшего x-е место, равен «x»).
Возвращает массив ответа размера n, где ответ[i] — ранг i-го спортсмена.
*/

score = [10, 3, 8, 9, 4];

const hash = new Map();
let findRelativeRanks = function (score) {
    const len = score.length;
    const temp = [...score].sort((a, b) => b - a);
    const answer = Array.from({ length: len }).fill(0);
    const hash = new Map();
    for (let index = 0; index < len; index++) {
        hash.set(temp[index], index);
    }

    for (let i = 0; i < len; i++) {
        const res = hash.get(score[i]) + 1;

        if (res === 1) {
            answer[i] = 'Gold Medal';
        } else if (res === 2) {
            answer[i] = 'Silver Medal';
        } else if (res === 3) {
            answer[i] = 'Bronze Medal';
        } else {
            answer[i] = res;
        }
    }
    return answer;
};

console.log(findRelativeRanks(score));
