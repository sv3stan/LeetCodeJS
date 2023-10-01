// Учитывая массив различных целых чисел - кандидатов и целевое целое число, 
// вернуть список всех уникальных комбинаций кандидатов, в которых сумма выбранных чисел равна цели.
// Вы можете возвращать комбинации в любом порядке.
// Одно и то же число может быть выбрано из кандидатов неограниченное количество раз.
// Две комбинации уникальны, если частота хотя бы одно из выбранных чисел отличается.
// Тестовые примеры генерируются таким образом, чтобы количество уникальных комбинаций, 
// суммирующихся с целевым значением, составляло менее 150 комбинаций для заданных входных данных.

// 39
candidates = [4, 3, 2, 6, 7];
target = 8;

function combinationSum(candidates, target) {
    const setOfCombinations = [];

    function backtrack(target, currentCombination, index) {
        if (target === 0) {
            setOfCombinations.push([...currentCombination]);
            return;
        }

        if (target < 0) {
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            currentCombination.push(candidates[i]);
            backtrack(target - candidates[i], currentCombination, i);
            currentCombination.pop();
        }
    }

    backtrack(target, [], 0);
    return setOfCombinations;

};

console.log(combinationSum(candidates, target))














 // const currentCombination = [];
    // const candidatArray = candidates.filter(item => item < target);
    // const setOfCombinations = [candidates.filter(item => item === target)];
    // console.log(candidatArray);
    // console.log(setOfCombinations);
    // let index = 0;
    // let count = 0;

    // function backtrack(target, candidat, currentCombination) {

    //     // if (typeof candidat !== 'undefined') {
    //     //     // Здесь ваш код обработки candidat
    //     //     currentCombination.push(candidat);
    //     // }
    //     currentCombination.push(candidat)
    //     console.log('index');
    //     console.log(index);
    //     console.log('candidat');
    //     console.log(candidat);
    //     console.log('currentCombination');
    //     console.log(currentCombination);
    //     console.log('setOfCombinations');
    //     console.log(setOfCombinations);
    //     sum = currentCombination.reduce((acc, item) => (acc += item), 0)

    //     console.log(sum + ' - sum - ' + target + ' - target');



    //     if ((target - sum) === 0) {
    //         console.log('++++++++++++++++++');
    //         setOfCombinations.push([...currentCombination]);
    //         currentCombination.pop()

    //         index++;
    //         return;
    //     }

    //     if ((target - sum) < 0) {
    //         console.log('==================');
    //         //index--;
    //         currentCombination.pop()
    //         //currentCombination = [];
    //         console.log('currentCombination');
    //         console.log(currentCombination);
    //         backtrack(target, candidatArray[index], currentCombination);
    //         return;
    //     }
    //     // if ((target - sum) > 0) {
    //     //index++;
    //     for (const candidat of candidatArray) {
    //         console.log('!!!!!!!!!!!!!!');
    //         backtrack(target, candidatArray[index], currentCombination);  //?????
    //     }
    //     //}
    // }

        // backtrack(target, candidatArray[0], []);
    // return setOfCombinations;