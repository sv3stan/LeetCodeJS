// Учитывая два отсортированных массива nums1 и nums2 размера m и n соответственно, 
// верните медиану двух отсортированных массивов.
// Общая сложность времени выполнения должна составлять O(log(m + n)).
// 4

nums1 = [1, 3], nums2 = [2]
nums1 = [1, 2], nums2 = [3, 4]
nums1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
nums1 = [1, 4, 8, 9, 12, 15, 16];
nums2 = [2, 3, 5, 6, 7, 11, 14, 18, 21, 25];



var findMedianSortedArrays = function (nums1, nums2) {

    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;

    while (low <= high) {
        const partX = (low + high) >> 1;
        const partY = ((m + n + 1) >> 1) - partX;

        const maxX = (partX === 0) ? -Infinity : nums1[partX - 1];
        const maxY = (partY === 0) ? -Infinity : nums2[partY - 1];

        const minX = (partX === m) ? Infinity : nums1[partX];
        const minY = (partY === n) ? Infinity : nums2[partY];

        if (maxX <= minY && maxY <= minX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partX - 1;
        } else {
            low = partX + 1;
        }
    }

};

console.log(findMedianSortedArrays(nums1, nums2))


// The naive solution doesn't look so bad either.
//     `Beats 41.02%of users with JavaScript`