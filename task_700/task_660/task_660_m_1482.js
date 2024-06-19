/*
Вам дан целочисленный массив BloomDay, целое число m и целое число k.
Вы хотите составить m букетов. Чтобы составить букет, нужно использовать k соседних цветов из сада.
Сад состоит из n цветов, i-й цветок расцветет в BloomDay[i] и затем может быть использован ровно в одном букете.
Верните минимальное количество дней, которое вам нужно подождать, чтобы можно было собрать m букетов из сада. Если невозможно собрать m букетов, возвращается -1.
*/

let bloomDay = [1, 10, 3, 10, 2];
let m = 3;
let k = 1;

let minDays = function (bloomDay, m, k) {
    let begin = 0;
    let end = Math.max(...bloomDay);
    let minDay = 0;

    while (begin <= end) {
        let middle = (begin + end) >> 1;
        let count = 0;
        let i = 0;
        let numOfBuckets = 0;
        while (i < bloomDay.length) {
            if (bloomDay[i] <= middle) {
                count++;
            } else {
                count = 0;
            }
            i++;

            if (count === k) {
                numOfBuckets++;
                count = 0;
            }
        }

        if (numOfBuckets >= m) {
            minDay = middle;
            end = middle - 1;
        } else {
            begin = middle + 1;
        }
    }

    return minDay;
};

console.log(minDays(bloomDay, m, k));
