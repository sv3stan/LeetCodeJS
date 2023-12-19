// Сглаживатель изображения — это фильтр размером 3 x 3, 
// который можно применить к каждой ячейке изображения путем 
// округления в меньшую сторону среднего значения ячейки и 
// восьми окружающих ячеек(т.е.среднего значения девяти ячеек 
// синего сглаживателя).Если одна или несколько ячеек, 
// окружающих ячейку, отсутствуют, мы не считаем ее 
// средней(т.е.средней из четырех ячеек красного цвета).

// 661

img = [[100, 200, 100], [200, 50, 200], [100, 200, 100]];

var imageSmoother = function (img) {

    const m = img.length;
    const n = img[0].length;

    const smooth = Array.from({ length: m }, () => new Int16Array(n).fill(0));


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            let sum = 0;
            let count = 0;


            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    if (0 <= x && x < m && 0 <= y && y < n) {
                        sum += img[x][y];
                        count += 1;
                    }
                }
            }


            smooth[i][j] = Math.floor(sum / count);
        }
    }

    return smooth;


};

console.log(imageSmoother(img))