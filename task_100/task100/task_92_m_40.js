// Имея набор номеров - кандидатов(кандидатов) и целевое число(цель), найдите все уникальные комбинации в кандидатах,
// в которых сумма номеров - кандидатов равна цели.
// Каждое число в кандидатах может использоваться только один раз в комбинации.
// Примечание.В наборе решений не должно быть повторяющихся комбинаций.
// 40

candidates = [10, 1, 2, 7, 6, 1, 5];
target = 8;
function combinationSum2(candidates, target) {
    const setOfCombinations = [];
    candidates.sort((a, b) => a - b);
    function backtrack(target, currentCombination, index) {
        if (target === 0) {
            setOfCombinations.push([...currentCombination]);
            return;
        }
        if (target < 0) {
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) {
                continue; // Пропускаем дубликаты
            }
            currentCombination.push(candidates[i]);
            backtrack(target - candidates[i], currentCombination, i + 1);
            currentCombination.pop();
        }
    }
    backtrack(target, [], 0);
    return setOfCombinations;
}

console.log(combinationSum2(candidates, target));

// const setOfCombinations = [];
// const used = Array(candidates.length).fill(false);
// const set = new Set();
// candidates.sort((a, b) => a - b);
// function backtrack(target, currentCombination, index) {
//     if (target === 0) {
//         //currentCombination.sort((a, b) => a - b);
//         set.add(JSON.stringify(currentCombination));
//         console.log(set);

//         //  if (!set.has(JSON.stringify(currentCombination))) {
//         setOfCombinations.push([...currentCombination]);
//         //   }
//         return;
//     }

//     if (target < 0) {
//         return;
//     }

//     for (let i = index; i < candidates.length; i++) {
//         if (used[i]) continue;
//         currentCombination.push(candidates[i]);

//         used[i] = true;
//         // console.log(currentCombination + ' - currentCombination')
//         backtrack(target - candidates[i], currentCombination, i);

//         currentCombination.pop();
//         used[i] = false;
//     }
// }

// backtrack(target, [], 0);
// return setOfCombinations;

// При решении задачи следует учесть тот факт, что комбинации должны быть отсортированы.
// То есть 2.1.5 это 1.2.5.Далее 7.1 это 1.7.И после сортировки они считаются одинаковыми, а нужны только уникальные.
// Отсюда и получается, что[[1, 7], [2, 6], [7, 1], [1, 2, 5], [1, 6, 1], [2, 1, 5]] превращается в[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]].
