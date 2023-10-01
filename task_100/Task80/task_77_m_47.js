// Учитывая набор чисел, nums, который может содержать дубликаты, 
// вернуть все возможные уникальные перестановки в любом порядке.
// 47

nums = [1, 1, 3, 2];

function permuteUnique(nums) {
    const result = [];
    const used = Array(nums.length).fill(false);
    function backtrack(currentPerm) {
        if (currentPerm.length === nums.length) {
            result.push([...currentPerm]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            currentPerm.push(nums[i]);
            used[i] = true;
            backtrack(currentPerm);
            currentPerm.pop();
            used[i] = false;
        }
    }
    //nums.sort((a, b) => a - b); // Сортируем исходный массив, чтобы обрабатывать дублирующиеся элементы
    backtrack([]);
    return result;
}
console.log(permuteUnique(nums));


