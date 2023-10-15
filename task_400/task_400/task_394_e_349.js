// Учитывая два целочисленных массива nums1 и nums2, 
// верните массив их пересечения.Каждый элемент результата 
// должен быть уникальным, и вы можете возвращать результат в любом порядке.
// 349

nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]

var intersection = function (nums1, nums2) {

    const hash = new Set(nums1);
    const answer = [];
    console.log(hash)
    for (const num of nums2) {

        if (hash.has(num)) {
            answer.push(num);
            hash.delete(num);
        }

    }


    return answer
};


console.log(intersection(nums1, nums2))