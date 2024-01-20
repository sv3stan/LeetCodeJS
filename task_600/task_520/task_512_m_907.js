// Учитывая массив целых чисел arr, найдите сумму min(b), 
// где b варьируется по каждому(непрерывному) подмассиву arr.
// Поскольку ответ может быть большим, верните ответ по модулю 109 + 7.

// 907


arr = [3, 1, 2, 4];
arr = [71, 55, 82, 55];
// arr = [3, 5, 6, 7, 8, 1, 2, 4];
// arr = [2, 9, 7, 8, 3, 4, 6, 1];

var sumSubarrayMins = function (arr) {


    const MOD = 1000000007;
    const n = arr.length;
    const left = new Array(n);
    const right = new Array(n);
    const stack = [];

    // Заполнение массива left
    for (let i = 0; i < n; i++) {

        while (stack.length && arr[i] <= arr[stack[stack.length - 1]]) {

            stack.pop();

        }
        left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
        console.log(stack)
    }

    // Очистка стека
    stack.length = 0;

    // Заполнение массива right
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
            stack.pop();
        }
        right[i] = stack.length === 0 ? n : stack[stack.length - 1];
        stack.push(i);
    }

    let result = 0;
    console.log(left)
    console.log(right)
    // Рассчет суммы min(b) для каждого элемента
    for (let i = 0; i < n; i++) {
        result = (result + arr[i] * (i - left[i]) * (right[i] - i)) % MOD;
    }

    return result;
};


console.log(sumSubarrayMins(arr))