// Вам дан нумерованный массив целых чисел nums длины n.Изначально вы находитесь на nums[0].
// Каждый элемент nums[i] представляет максимальную длину перехода вперед от индекса i.
// Другими словами, если вы находитесь на nums[i], вы можете перейти к любому nums[i + j], где:
// 0 <= j <= nums[i] and i + j < n
// Возвращает минимальное количество прыжков для достижения nums[n - 1].
// Тестовые примеры генерируются таким образом, что вы можете достичь nums[n - 1].
// 45

let = nums = [2, 3, 1, 1, 4];

//nums = [2, 3, 0, 1, 4];


function jump(nums) {
    let result = 0;
    let end = 0;
    let max = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i]);

        if (i === end) {
            end = max;
            console.log(end)
            result++;
        }
    }

    return result;
};

console.log(jump(nums));