/**
Вам дан целочисленный массив чисел.
За один ход вы можете выбрать один элемент nums и изменить его на любое значение.
Возвращает минимальную разницу между наибольшим и наименьшим значением чисел после выполнения не более трех ходов. 
*/

let nums = [6, 6, 0, 1, 1, 4, 6];

//nums = [1, 2, 3, 4, 5, 6, 7, 8];

let minDifference = function (nums) {
    if (nums.length < 5) return 0;
    nums.sort((a, b) => a - b);
    let answer = Infinity;

    for (let i = 0; i <= 3; i++) {
        // for (let j = 3; j > 0; j--) {
        answer = Math.min(answer, nums[nums.length - 4 + i] - nums[i]);

        console.log(
            '🚀 ~ minDifference ~ nums[nums.length - 3 + i - 1]:',
            nums[nums.length - 3 + i - 1],
        );

        console.log('🚀 ~ minDifference ~ nums[i]:', nums[i]);

        console.log('🚀 ~ minDifference ~ answer:', answer);
        //}
    }

    return answer;
    //Math.min(nums[nums.length-1] - nums[3], nums[nums.length - 4] - nums[0]);
};

console.log(minDifference(nums));
