/**
Элемент x целочисленного массива ARR длины M является доминирующим, если более половины элементов ARR имеют значение x. Вам дают 0-индексированные целочисленные массивы длины n с одним доминирующим элементом. Вы можете разделить Nums на индексе I на два массива nums [0, ..., i] и nums [i + 1, ..., n - 1], но раскол действителен только если: 0 <= i <n - 1 Nums [0, ..., i] и Nums [i + 1, ..., n - 1] имеют тот же доминирующий элемент. Здесь Nums [i, ..., J] обозначает Subarray of Nums, начинающихся в индексе I и заканчивая в индексе J, оба концы были включены. В частности, если j <i тогда Nums [i, ..., J] обозначает пустой субрай. Вернуть минимальный индекс действительного разделения. Если действительное разделение не существует, верните -1
 */

function minimumIndex(nums: number[]): number {
    let candidate = 0;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : -1;
    }

    let totalOccurrences = 0;
    for (let num of nums) {
        if (num === candidate) {
            totalOccurrences++;
        }
    }

    if (totalOccurrences <= nums.length / 2) {
        return -1;
    }

    let leftCount = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === candidate) {
            leftCount++;
        }

        const rightCount = totalOccurrences - leftCount;
        const leftLength = i + 1;
        const rightLength = nums.length - leftLength;

        if (leftCount > leftLength / 2 && rightCount > rightLength / 2) {
            return i;
        }
    }

    return -1;
}
