// Учитывая n неотрицательных целых чисел, представляющих карту высот, 
// где ширина каждой полосы равна 1, вычислите, сколько воды она может удержать после дождя.
// 42

height = [4, 2, 0, 3, 2, 5]
//height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

var trap = function (height) {
    let length = height.length - 1;
    let maxLeft = [];
    let maxRight = [];
    let volume = [];
    maxLeft[0] = height[0];
    maxRight[length] = height[length];
    for (let i = 1; i <= length; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
    }
    for (let i = length - 1; i >= 0; i--) {
        maxRight[i] = Math.max(maxRight[i + 1], height[i])
    }
    for (let i = 0; i <= length; i++) {
        volume[i] = Math.min(maxLeft[i], maxRight[i]) - height[i];
    }
    const sum = volume.reduce((acc, item) => acc += item, 0);
    return sum;
};

console.log(trap(height))



























    // const stack = [];

    // for (let i = 0; i < height.length; i++) {
    //     while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
    //         const prevItem = stack.pop();
    //         result[prevItem] = i - prevItem;
    //     }
    //     stack.push(i);


    //     console.log(stack)
    //     console.log(result)
    // }

    // return result;