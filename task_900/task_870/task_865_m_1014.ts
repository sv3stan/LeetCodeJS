/*
Вам дан целочисленный массив значений, где значения[i] представляют собой значение i-го достопримечательности. Между двумя достопримечательностями i и j расстояние j - i. Оценка пары (i < j) достопримечательностей равна значениям[i] + значения[j] + i - j: сумма значений достопримечательностей минус расстояние между ними. Возвращает максимальный балл пары достопримечательностей.
 */

let values = [8, 1, 5, 2, 6];

function maxScoreSightseeingPair(values: number[]): number {
    const n = values.length;
    const score: number[] = [];
    score[0] = values[0];
    let maxScore = 0;
    for (let i = 1; i < n; i++) {
        let rightScore = values[i] - i;
        maxScore = Math.max(maxScore, score[i - 1] + rightScore);
        let leftScore = values[i] + i;
        score[i] = Math.max(score[i - 1], leftScore);
    }
    return maxScore;
}

console.log(maxScoreSightseeingPair(values));
