// Учитывая массив интервалов `интервалов`, где интервалы[i] = [starti, endi], 
// верните минимальное количество интервалов, которое вам нужно удалить, 
// чтобы остальные интервалы не перекрывались.
// 435

intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]

var eraseOverlapIntervals = function (intervals) {
    const length = intervals.length;
    let count = 1; // Начинаем с 1, так как первый интервал всегда остается.

    if (length === 0) {
        return 0; // Если массив пуст, нет интервалов для удаления.
    }

    intervals.sort((a, b) => a[1] - b[1]); // Сортировка по конечным точкам.
    let end = intervals[0][1];

    for (let i = 1; i < length; i++) {
        if (intervals[i][0] >= end) {
            count++;
            end = intervals[i][1];
        }
    }

    return length - count;
};

console.log(eraseOverlapIntervals(intervals))