/**
Поменять местами два разных элемента в массиве и поменять их значения местами.
Круговой массив определяется как массив, в котором первый и последний элементы являются соседними.
Задав двоичный круговой массив nums, верните минимальное количество свопов, необходимых для того, чтобы сгруппировать все 1, присутствующие в массиве, в любом месте.
 */

let nums = [0, 1, 1, 1, 0, 0, 1, 1, 0];

let minSwaps = function (nums) {
    function swap(arr, val) {
        const n = arr.length;
        let totalValCount = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === val) totalValCount++;
        }

        if (totalValCount === n || totalValCount === 0) return 0;

        let start = 0;
        let end = 0;
        let maxValInWin = 0;
        let curValInWin = 0;

        while (end < totalValCount) {
            if (arr[end++] === val) curValInWin++;
        }

        maxValInWin = Math.max(maxValInWin, curValInWin);

        while (end < n) {
            if (arr[start++] === val) curValInWin--;
            if (arr[end++] === val) curValInWin++;
            maxValInWin = Math.max(maxValInWin, curValInWin);
        }

        return totalValCount - maxValInWin;
    }

    return Math.min(swap(nums, 0), swap(nums, 1));

    // swap(nums, 1);
    // console.log(totalValCount);
};

console.log(minSwaps(nums)); // Output: 3
