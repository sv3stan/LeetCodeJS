// Учитывая, что массив целых чисел представляет собой ежедневную температуру, 
// верните ответ массива, такой, что ответ[i] — это количество дней, 
// которое вам нужно подождать после i - го дня, чтобы получить более высокую температуру.
// Если нет будущего дня, для которого это возможно, вместо этого сохраните ответ[i] == 0.
// 739
temperatures = [73, 74, 75, 71, 69, 72, 76, 73]//[1,1,4,2,1,1,0,0]

var dailyTemperatures = function (temperatures) {

    const result = Array.from({ length: temperatures.length }).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevItem = stack.pop();
            result[prevItem] = i - prevItem;
        }
        stack.push(i);


        console.log(stack)
        console.log(result)
    }

    return result;


};

console.log(dailyTemperatures(temperatures))