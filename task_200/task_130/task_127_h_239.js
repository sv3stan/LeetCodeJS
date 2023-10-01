// Вам дан массив целых чисел nums, есть скользящее окно размера k, 
// которое движется от самого левого края массива до самого правого.
// Вы можете видеть только k чисел в окне.Каждый раз скользящее окно перемещается вправо на одну позицию.
// Вернуть максимальное скользящее окно.
// 239

nums = [1, 3, -1, -3, 5, 3, 6, 7];
nums = [1, 3, 1, 2, 0, 5]
k = 3;

function maxSlidingWindow(nums, k) {

    const result = [];
    let left = 0;
    let right = 0;
    const stack = [];

    while (right < nums.length) {
        while (stack.length > 0 && nums[right] > nums[stack[stack.length - 1]]) {
            stack.pop();
        }
        stack.push(right);

        if (left > stack[0]) {
            stack.shift();
        }

        if (right + 1 >= k) {
            result.push(nums[stack[0]]);
            left++;
        }
        right++;
    }

    return result;
}
console.log(maxSlidingWindow(nums, k))