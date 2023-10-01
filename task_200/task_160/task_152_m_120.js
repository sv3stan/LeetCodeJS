// Учитывая массив треугольников, верните минимальную сумму пути сверху вниз.
// Для каждого шага вы можете перейти к соседнему номеру строки ниже.
// Более формально, если вы находитесь на индексе i в текущей строке, 
// вы можете перейти либо на индекс i, либо на индекс i + 1 в следующей строке.
// 120

triangle = [[2], [3, 4], [5, 5, 7], [4, 1, 8, 3], [5, 8, 7, 4, 9], [12, 4, 18, 9, 10, 16]];
triangle = [[2], [3, 4], [5, 5, 7], [4, 1, 8, 3]];
triangle = [[-10]]
//triangle = [[-1], [-2, -3]]
var minimumTotal = function (triangle) {

    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0];

};


console.log(minimumTotal(triangle));


















// var minimumTotal = function (triangle) {

//     const dp = Array.from({ length: triangle.length }).fill(0);
//     dp[0] = triangle[0][0];
//     let count = triangle[0][0];
//     let nextPosition = 0

//     console.log(nextPosition + ' - nextPosition- ' + count + ' - count - ')
//     for (let i = 0; i < triangle.length - 1; i++) {
//         console.log('---------------')
//         //nextPosition[0] = i;
//         console.log(triangle[i + 1][nextPosition] + ' - triangle[i + 1][nextPosition] - ' + triangle[i + 1][nextPosition] + ' - triangle[i + 1][nextPosition] - ' + i + '- i -')
//         if (triangle[i + 1][i] < triangle[i + 1][i + 1]) {
//             count += triangle[i + 1][nextPosition];
//             nextPosition = 1;
//         } else {
//             count += triangle[i + 1][nextPosition];
//             nextPosition = 0;
//         }
//         //  nextPosition[0][1] = i;
//         //      dp[i+1] = triangle[i+1]
//         console.log(nextPosition)
//         console.log(nextPosition + ' - nextPosition- ' + count + ' - count - ')

//     }

//     //console.log(dp)
//     return count;

// };