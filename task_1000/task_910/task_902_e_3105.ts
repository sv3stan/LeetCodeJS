/**
Вам дается множество целых чисел. Вернуть длину самых длинных Субаррей nums, которые либо строго увеличивается или строго уменьшается Полем
 */

function longestMonotonicSubarray(nums: number[]): number {
    if (nums.length === 0) return 0;
    let incLen = 1,
        decLen = 1,
        maxLen = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            incLen += 1;
            decLen = 1;
        } else if (nums[i] < nums[i - 1]) {
            decLen += 1;
            incLen = 1;
        } else {
            incLen = 1;
            decLen = 1;
        }
        maxLen = Math.max(maxLen, incLen, decLen);
    }

    return maxLen;
}
