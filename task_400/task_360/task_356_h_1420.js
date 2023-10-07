// Вам даны три целых числа n, m и k.Рассмотрим следующий алгоритм нахождения 
// максимального элемента массива целых положительных чисел:
// maximum_value = -1
// maximum_index = -1
// search_cost = 0 n = arr.length for (i = 0; i < n; i++) {
//     if (maximum_value < arr[i]) {
//         maximum_value = arr[i] maximum_index = i
//         search_cost = searchcost + 1
//     }
// }
// return maximum index
// Необходимо построить массив arr, обладающий следующими свойствами:
// arr имеет ровно n целых чисел.
// 1 <= arr[i] <= m, где(0 <= i < n).
// После применения указанного алгоритма к arr значение search_cost равно k.
// Возвращает количество способов построения массива arr при указанных условиях.
// Поскольку ответ может стать большим, его необходимо вычислять по модулю 109 + 7.
// 1420

n = 2, m = 3, k = 1
//n = 9, m = 1, k = 1
//n = 5, m = 2, k = 3
//let arr = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3]]
n = 3, m = 4, k = 3
const MOD = 1e9 + 7;

var numOfArrays = function (n, m, k) {
    function dp(i, currentMax, remainder) {
        if (i === n) {
            if (remainder === 0) {
                return 1;
            }
            return 0;
        }

        if (remainder < 0) {
            return 0;
        }

        if (memo[i][currentMax][remainder] !== -1) {
            return memo[i][currentMax][remainder];
        }

        let ans = 0;
        for (let num = 1; num <= currentMax; num++) {
            ans = (ans + dp(i + 1, currentMax, remainder)) % MOD;
        }

        for (let num = currentMax + 1; num <= m; num++) {
            ans = (ans + dp(i + 1, num, remainder - 1)) % MOD;
        }

        memo[i][currentMax][remainder] = ans;
        return ans;
    }


    const memo = Array.from({ length: n }, () => Array.from({ length: m + 1 }, () => Array(k + 1).fill(-1)));
    return dp(0, 0, k);


};


console.log(numOfArrays(n, m, k))


// let answer = 0;
// // const arr = [];

// function searchcost(arr) {
//     let maximum_value = 0;
//     let search_cost = 0;
//     const length = arr.length;
//     for (let i = 0; i < length; i++) {
//         if (maximum_value < arr[i]) {
//             maximum_value = arr[i];
//             search_cost++;

//         }
//     }
//     if (search_cost === k) {
//         console.log(arr)
//         console.log(search_cost)
//     }
//     return search_cost;
// }



// function createCobination(n, m) {
//     const combinations = [];
//     const stack = [];
//     stack.push({ currentCombination: [], currentN: n });

//     while (stack.length > 0) {
//         const { currentCombination, currentN } = stack.pop();

//         if (currentN === 0) {
//             combinations.push([...currentCombination]);
//         } else {
//             for (let i = 1; i <= m; i++) {
//                 currentCombination.push(i);
//                 stack.push({ currentCombination: [...currentCombination], currentN: currentN - 1 });
//                 currentCombination.pop();
//             }
//         }
//     }

//     return combinations;
// }


// const arr = createCobination(n, m);
// console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//     if (searchcost(arr[i]) === k) answer++;
// }

// return answer










// const dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));
// dp[0][0] = 1;

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//         for (let x = 1; x <= j; x++) {
//             if (x === j) {
//                 dp[i][j] = (dp[i][j] + dp[i - 1][x - 1]) % MOD;
//             } else {
//                 dp[i][j] = (dp[i][j] + (dp[i - 1][x - 1] * (k - 1)) % MOD) % MOD;
//             }
//         }
//     }
// }

// let ans = 0;
// for (let j = 1; j <= m; j++) {
//     ans = (ans + dp[n][j]) % MOD;
// }

// return ans;

















// let answer = 0;
// // const arr = [];

// function searchcost(arr) {
//     let maximum_value = 0;
//     let search_cost = 0;
//     const length = arr.length;
//     for (let i = 0; i < length; i++) {
//         if (maximum_value < arr[i]) {
//             maximum_value = arr[i];
//             search_cost++;
//             console.log(arr)
//         }
//     }
//     return search_cost;
// }



// function createCobination(n, m) {
//     const combinations = [];
//     const stack = [];
//     stack.push({ currentCombination: [], currentN: n });

//     while (stack.length > 0) {
//         const { currentCombination, currentN } = stack.pop();

//         if (currentN === 0) {
//             combinations.push([...currentCombination]);
//         } else {
//             for (let i = 1; i <= m; i++) {
//                 currentCombination.push(i);
//                 stack.push({ currentCombination: [...currentCombination], currentN: currentN - 1 });
//                 currentCombination.pop();
//             }
//         }
//     }

//     return combinations;
// }


// const arr = createCobination(n, m);
// console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//     if (searchcost(arr[i]) === k) answer++;
// }

// return answer




// function createCobination(n, m) {
//     const memo = new Map();

//     function generate(currentCombination, currentN) {
//         if (currentN === 0) {
//             return [[...currentCombination]];
//         }

//         const memoKey = `${currentN}_${currentCombination.join("_")}`;
//         if (memo.has(memoKey)) {
//             return memo.get(memoKey);
//         }

//         const combinations = [];
//         for (let i = 1; i <= m; i++) {
//             currentCombination.push(i);
//             const subCombinations = generate(currentCombination, currentN - 1);
//             combinations.push(...subCombinations);
//             currentCombination.pop();
//         }

//         memo.set(memoKey, combinations);
//         return combinations;
//     }

//     return generate([], n);
// }




// function createCobination(combination, currentN) {
//     if (currentN === 0) {
//         arr.push([...combination]);
//         return;
//     }
//     for (let i = 1; i <= m; i++) {
//         combination.push(i);
//         createCobination(combination, currentN - 1);
//         combination.pop();
//     }
// }









// //const res = searchcost(arr, n);

// // const dp = Array.from({ length: n }, () => Array.from({ length: m }, () => Array(k).fill(0)));
// const arr = [];
// console.log(n + ' - n -' + m + ' - m - ')
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//         console.log(i + ' - i -' + j + ' - j - ')
//         arr.push([i, j])
//     }
// }