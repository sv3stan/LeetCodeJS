/**
У вас есть n ящиков. Вам дана двоичная строка box длиной n, где box[i] равен «0», если i-я коробка пуста, и «1», если она содержит один шар. За одну операцию можно переместить один шарик из коробки в соседнюю коробку. Ящик i соседствует с ящиком j, если abs(i - j) == 1. Обратите внимание, что после этого в некоторых ящиках может оказаться более одного шара. Возвращает массив ответа размера n, где ответ[i] — минимальное количество операций, необходимое для перемещения всех шаров в i-й ящик. Каждый ответ[i] рассчитывается с учетом исходного состояния ящиков.
 */

function minOperations(boxes: string): number[] {
    const n = boxes.length;
    const answer: number[] = Array(n).fill(0);

    let moveLeft = 0;
    let ballLeft = 0;
    let moveRight = 0;
    let ballRight = 0;

    for (let i = 0; i < n; i++) {
        answer[i] += moveLeft;
        ballLeft += parseInt(boxes[i], 10);
        moveLeft += ballLeft;

        let j = n - i - 1;
        answer[j] += moveRight;
        ballRight += parseInt(boxes[j], 10);
        moveRight += ballRight;
    }

    return answer;
}
