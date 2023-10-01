// Учитывая два целочисленных массива nums1 и nums2 с индексом 0, верните ответ в виде списка размером 2, где:
// ответ[0] — это список всех различных целых чисел в nums1, которых нет в nums2.
//     ответ[1] — это список всех различных целых чисел в nums2, которых нет в nums1.
// Обратите внимание, что целые числа в списках могут возвращаться в любом порядке.
// 2215

nums1 = [1, 2, 3, 3], nums2 = [1, 1, 2, 2]
nums1 = [1, 2, 3], nums2 = [2, 4, 6]

var findDifference = function (nums1, nums2) {
    const answer = [[], []];
    const elements1 = new Set();
    const elements2 = new Set();

    for (let i = 0; i < nums1.length; i++) if (!elements1.has(nums1)) elements1.add(nums1[i]);
    for (let i = 0; i < nums2.length; i++) if (!elements2.has(nums2)) elements2.add(nums2[i]);

    for (let i = 0; i < nums1.length; i++) {
        if (!elements2.has(nums1[i]) && !answer[0].includes(nums1[i])) {
            answer[0].push(nums1[i])
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (!elements1.has(nums2[i]) && !answer[1].includes(nums2[i])) {
            answer[1].push(nums2[i])
        }
    }

    return answer;
};



console.log(findDifference(nums1, nums2))