// Найдите все допустимые комбинации k чисел, которые в сумме дают n, такие,
// что выполняются следующие условия:
// Используются только цифры от 1 до 9.
// Каждое число используется не более одного раза.
// Возвращает список всех возможных допустимых комбинаций.
// Список не должен содержать одну и ту же комбинацию дважды, и комбинации могут быть возвращены в любом порядке.
// 216
//output для k = 3, n = 9 [[1, 2, 6], [1, 3, 5], [2, 3, 4]]

k = 4, n = 19

function combinationSum3(k, n) {
    const result = [];

    function backtrack(start, currentSum, currentCombination) {
        if (currentSum === n && currentCombination.length === k) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = start; i <= 9 && currentCombination.length < k; i++) {
            if (currentSum + i <= n) {
                currentCombination.push(i);
                backtrack(i + 1, currentSum + i, currentCombination);
                currentCombination.pop();
            }
        }
    }

    backtrack(1, 0, []);
    return result;


};

console.log(combinationSum3(k, n))











//function backtrack(n, currentCombination, index) {
    //     console.log('++++++++++++')
    //     currentCombination[index]++;

    //     console.log(currentCombination + ' - currentCombination - ' + n + ' - diffrf');
    //     if ((n) === 0) {
    //         console.log('------------')
    //         setOfCombinations.push([...currentCombination]);
    //         return;
    //     }

    //     if ((n) < 0) {
    //         return;
    //     }

    //     for (let i = k - 1; i > 0; i--) {
    //         //currentCombination.push([])
    //         //currentCombination.push(candidates[i]);
    //         for (let j = i + 1; j < 10; j++) {
    //             console.log('!!!!!!!!!!!!!!!!!')
    //             console.log(currentCombination)
    //             let sum = currentCombination.reduce((acc, item) => (acc += item), 0);
    //             console.log(currentCombination[i]);
    //             console.log(sum)

    //             backtrack(n - sum, currentCombination, i);
    //         }
    //         //currentCombination.pop();
    //     }
    // }

    // backtrack(n, currentCombination, 0);
    // return setOfCombinations;


        // const result = [];
    // function backtrack(ahead, current = []) {

    //     if (((current.reduce((acc, item) => (acc += item), 0) === n)) && (current.length === k)) {
    //         return result.push([...current])
    //     }
    //     for (let i = ahead; i <= n; i++) {
    //         current.push(i);
    //         backtrack(i + 1, current);
    //         current.pop();
    //     }
    // }
    // backtrack(1, []);
    // return result;