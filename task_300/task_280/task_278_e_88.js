// Вам даны два целочисленных массива nums1 и nums2, отсортированные в порядке неубывания, 
// и два целых числа m и n, представляющие количество элементов в nums1 и nums2 соответственно.
// Объедините nums1 и nums2 в один массив, отсортированный в неубывающем порядке.
// Окончательно отсортированный массив не должен возвращаться функцией, а должен храниться внутри массива nums1.
// Чтобы учесть это, nums1 имеет длину m + n, где первые m элементов обозначают элементы, 
// которые следует объединить, а последние n элементов имеют значение 0 и их следует игнорировать.nums2 имеет длину n.
// 88


nums1 = [2, 2, 4, 0, 0, 0], m = 3, nums2 = [1, 5, 6], n = 3
// nums1 = [0], m = 0, nums2 = [1], n = 1
// nums1 = [4, 5, 6, 0, 0, 0], m = 3, nums2 = [1, 2, 3], n = 3

var merge = function (nums1, m, nums2, n) {

    let point1 = 0;
    let point2 = 0;

    if (m === 0) {
        for (let i = 0; i < n; i++) nums1[i] = nums2[i];
        return nums1;
    }

    while (point1 < m + n && point2 < n) {
        console.log(nums1[point1] + ' - nums1[point1] - ' + point1 + ' - point1 - ' + nums2[point2] + ' - nums2[point2] - ' + point2 + ' - point2 - ');
        if (nums1[point1] <= nums2[point2]) {
            point1++;
        } else {
            nums1.splice(point1, 0, nums2[point2]);
            point2++;
            point1++;
            nums1.pop();

        }
        if (point1 === m + point2) {
            nums1.splice(point1, 0, nums2[point2]);
            nums1.pop();
            point2++;
        }
        console.log(nums1)


    }
    return nums1;
};



console.log(merge(nums1, m, nums2, n))