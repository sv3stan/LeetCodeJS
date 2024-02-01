// Следующий больший элемент некоторого элемента x в массиве — это первый больший элемент, 
// находящийся справа от x в том же массиве.
// Вам даны два различных целочисленных массива с нулевым индексом nums1 и nums2, 
// где nums1 — это подмножество nums2.
// Для каждого 0 <= i < nums1.length найдите индекс j такой, 
// что nums1[i] == nums2[j] и определите следующий больший элемент nums2[j] в nums2.
// Если следующего большего элемента нет, то ответом на этот запрос будет - 1.
// Верните массив ans длины nums1.length такой, что ans[i] является следующим большим элементом, 
// как описано выше.

// 496

nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
//nums1 = [2, 4], nums2 = [1, 2, 3, 4]

var nextGreaterElement = function (nums1, nums2) {

    const result = Array.from({ length: nums1.length }).fill(-1);
    const stack = [];

    for (let j = 0; j < nums1.length; j++) {

        //const index = 

        for (let i = nums2.indexOf(nums1[j]); i < nums2.length; i++) {

            while (stack.length > 0 && nums2[i] <= stack[stack.length - 1]) {
                stack.pop();
            }

            if (nums2[i] > nums1[j]) {
                result[j] = nums2[i];
                break;
            }

            stack.push(nums2[i])
        }

    }




    return result;

};


console.log(nextGreaterElement(nums1, nums2))


