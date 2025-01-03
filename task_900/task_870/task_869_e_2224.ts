/**
Вам даны две текущие и правильные строки, представляющие два 24-часовых времени. 24-часовое время форматируется как «ЧЧ:ММ», где ЧЧ — от 00 до 23, а ММ — от 00 до 59. Самое раннее 24-часовое время — 00:00, а самое позднее — 23:59. За одну операцию можно увеличить время тока на 1, 5, 15 или 60 минут. Эту операцию можно выполнять любое количество раз. Возвращает минимальное количество операций, необходимое для преобразования тока в правильный.
 */

function convertTime(current: string, correct: string): number {
    const [currentHours, currentMinutes] = current.split(':').map(Number);
    const [correctHours, correctMinutes] = correct.split(':').map(Number);

    const currentTotalMinutes = currentHours * 60 + currentMinutes;
    const correctTotalMinutes = correctHours * 60 + correctMinutes;

    const difference = Math.abs(correctTotalMinutes - currentTotalMinutes);

    const operations =
        Math.floor(difference / 60) +
        Math.floor((difference % 60) / 15) +
        Math.floor(((difference % 60) % 15) / 5) +
        ((difference % 60) % 5);

    return operations;
}
