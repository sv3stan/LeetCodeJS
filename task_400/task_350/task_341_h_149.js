// Учитывая массив точек, где Points[i] = [xi, yi] 
// представляет точку на плоскости XY, 
// верните максимальное количество точек, лежащих на одной прямой линии.
// 149


points = [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]];

var maxPoints = function (points) {
    if (points.length <= 2) {
        return points.length;
    }

    let count = 2; // Минимум две точки на прямой (сама точка и начальная точка)

    for (let i = 0; i < points.length; i++) {
        const slopes = new Map(); // Хеш-карта для хранения наклонов

        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                let slope;
                if (points[i][0] === points[j][0]) {
                    // Особый случай, вертикальная линия
                    slope = 'vertical'; // Используем 'inf' как ключ для вертикальных линий
                } else {
                    // Вычисляем наклон (slope) в виде строки, чтобы избежать ошибок округления
                    slope = ((points[j][1] - points[i][1]) / (points[j][0] - points[i][0])).toString();
                }

                if (slopes.has(slope)) {
                    slopes.set(slope, slopes.get(slope) + 1);
                } else {
                    slopes.set(slope, 2); // Начинаем с двух точек (points[i] и points[j])
                }

                count = Math.max(count, slopes.get(slope)); // Обновляем максимальное количество точек на прямой
            }
        }
    }

    return count;
};
console.log(maxPoints(points))