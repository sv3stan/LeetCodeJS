// Учитывая два целочисленных массива nums1 и nums2, 
// отсортированные в неубывающем порядке, верните минимальное целое число, 
// общее для обоих массивов.Если среди nums1 и nums2 нет общего целого числа, верните - 1.
// Обратите внимание, что целое число считается общим для nums1 и nums2, 
// если в обоих массивах есть хотя бы одно вхождение этого целого числа.

// 2540


nums1 = [1, 2, 3], nums2 = [2, 4]
nums1 = [2, 4], nums2 = [1, 2]


var getCommon = function (nums1, nums2) {

    for (let i = 0; i < nums1.length; i++) {


        let left = 0;
        let right = nums2.length - 1;

        while (left <= right) {

            middle = left + right >> 1
  
            if (nums2[middle] > nums1[i]) {
                right = middle - 1
            } else if (nums2[middle] < nums1[i]) {
                left = middle + 1
            } else {
                return nums2[middle]
            }

        }

    }

    return -1;

};

console.log(getCommon(nums1, nums2))