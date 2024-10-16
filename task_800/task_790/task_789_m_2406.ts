/**
Вам дан двумерный целочисленный массив интервалов, где интервалы [i] = [lefti, righti] представляют собой включающий интервал [lefti, righti].
Вам необходимо разделить интервалы на одну или несколько групп так, чтобы каждый интервал входил ровно в одну группу и никакие два интервала из одной группы не пересекались друг с другом.
Возвращает минимальное количество групп, которое вам нужно создать.
Два интервала пересекаются, если между ними есть хотя бы одно общее число. Например, интервалы [1, 5] и [5, 8] пересекаются.
 */

let intervals = [
    [5, 10],
    [6, 8],
    [1, 5],
    [2, 3],
    [1, 10],
];

function minGroups(intervals: number[][]): number {
    let pointToCount = new Map();

    for (let [start, end] of intervals) {
        pointToCount.set(start, (pointToCount.get(start) || 0) + 1);
        pointToCount.set(end + 1, (pointToCount.get(end + 1) || 0) - 1);
    }

    let maxConcurrentIntervals = 0;
    let concurrentIntervals = 0;

    for (let [time, count] of [...pointToCount.entries()].sort(
        (a, b) => a[0] - b[0],
    )) {
        concurrentIntervals += count;
        maxConcurrentIntervals = Math.max(
            maxConcurrentIntervals,
            concurrentIntervals,
        );
    }

    return maxConcurrentIntervals;
}

console.log(minGroups(intervals));
