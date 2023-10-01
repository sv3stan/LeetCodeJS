// Учитывая массив целых чисел, представляющих высоту столбца гистограммы, 
// где ширина каждого столбца равна 1, верните площадь самого большого прямоугольника в гистограмме.
// 84


heights = [2, 1, 5, 6, 2, 3];

var largestRectangleArea = function (heights) {
    // const result = Array.from({ length: heights.length }).fill(0);
    const stack = [];
    let maxArea = 0;
    let i = 0;
    while (i < heights.length) {
        if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
            stack.push(i);
            i++;
        } else {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
    }

    while (stack.length > 0) {
        const height = heights[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;

};


console.log(largestRectangleArea(heights))