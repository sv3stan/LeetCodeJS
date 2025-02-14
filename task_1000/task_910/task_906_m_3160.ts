/**
Вам дают целочисленное ограничение и 2D -массивные запросы размера n x 2. Есть лимит + 1 шарики с различными метками в диапазоне [0, предел]. Первоначально все шарики не раскрыты. Для каждого запроса в запросах, который имеет форму [x, y], вы отмечаете мяч X с цветом y. После каждого запроса вам нужно найти количество различных цветов среди шариков. Верните массив результата длины n, где результат [i] обозначает количество различных цветов после этого запроса. Обратите внимание, что при ответе на запрос отсутствие цвета не будет рассматриваться как цвет.
 */

function queryResults(limit: number, queries: number[][]): number[] {
    const distinctColors = new Set<number>();
    const ballColors = new Map<number, number>();
    const colorCount = new Map<number, number>();

    const result: number[] = [];
    for (const [x, y] of queries) {
        const currentColor = ballColors.get(x);

        if (currentColor !== undefined) {
            colorCount.set(currentColor, colorCount.get(currentColor)! - 1);
            if (colorCount.get(currentColor) === 0) {
                distinctColors.delete(currentColor);
            }
        }

        ballColors.set(x, y);
        colorCount.set(y, (colorCount.get(y) || 0) + 1);
        distinctColors.add(y);
        result.push(distinctColors.size);
    }

    return result;
}
