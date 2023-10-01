// Байкер собирается в путешествие.Поездка состоит из n + 1 точек на разных высотах.
// Байкер начинает свое путешествие в точке 0 с высотой равной 0.
// Вам дан целочисленный массив Gain длины n, где Gain[i] — чистый прирост высоты 
// между точками i​​​​​​ и i + 1 для всех(0 <= i < n).Возвращает наибольшую высоту точки.
// 1732

gain = [-4, -3, -2, -1, 4, 3, 2];
gain = [-5, 1, 5, 0, -7]

var largestAltitude = function (gain) {

    const prefixSum = Array.from({ length: gain.length + 1 }).fill(0);
    for (let i = 0; i < gain.length; i++) {
        prefixSum[i + 1] = prefixSum[i] + gain[i];
    }
    console.log(prefixSum)
    return Math.max(...prefixSum);

};

console.log(largestAltitude(gain))