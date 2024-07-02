/*
 Учитывая два целочисленных массива nums1 и nums2, верните массив их пересечения. Каждый элемент результата должен появляться столько раз, сколько он отображается в обоих массивах, и вы можете возвращать результат в любом порядке.
*/

let nums1 = [4, 9, 5, 4, 4, 5, 5, 5, 5, 9, 9, 9, 9, 8, 9];
let nums2 = [9, 4, 9, 8, 4];

let intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    const answer = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            answer.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return answer;
};

console.log(intersect(nums1, nums2));

// const hash = new Map();

// for (let i = 0; i < nums1.length; i++) {
//     hash.set(nums1[i], (hash.get(nums1[i]) || 0) + 1);
// }

// const answer = nums2.filter(
//     num => hash.get(num) > 0 && hash.set(num, hash.get(num) - 1),
// );

// return answer;
