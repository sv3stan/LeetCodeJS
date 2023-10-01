// Вам дан целочисленный массив высоты длины n.
// Нарисовано n вертикальных линий, две конечные
// точки i - й линии равны(i, 0) и(i, height[i]).
// Найдите две линии, которые вместе с осью абсцисс
// образуют контейнер, содержащий наибольшее количество воды.
// Возвращает максимальное количество воды,
// которое может храниться в контейнере.
// Обратите внимание, что вы не можете
// наклонять контейнер.
// 11

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const highLeft = height[left];
        const highRight = height[right];
        const area = Math.min(highLeft, highRight) * (right - left);
        maxArea = Math.max(area, maxArea);
        if (highLeft < highRight) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

// function maxArea(height) {
//     let maxArea = 0;
//     for (let left = 0; left < height.length - 1; left++) {
//         const len = findArea(left);
//         if (len > maxArea) {
//             maxArea = len;
//         }
//     }
//     console.log(maxArea);
//     return maxArea;
// };

// function findArea(left) {
//     let area = 0;
//     let maxArea = 0;
//     for (let right = left + 1; right < height.length; right++) {
//         if (height[left] < height[right]) {
//             area = height[left] * (right - left);
//         } else {
//             area = height[right] * (right - left);
//         }
//         if (area > maxArea) {
//             maxArea = area;
//         }
//     }
//     return maxArea;
// }

maxArea(height);
