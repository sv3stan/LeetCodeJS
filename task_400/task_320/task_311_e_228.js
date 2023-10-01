// Вам дан отсортированный уникальный целочисленный массив чисел.
// Диапазон[a, b] — это набор всех целых чисел от a до b(включительно).
// Возвращает наименьший отсортированный список диапазонов, 
// который точно охватывает все числа в массиве.
// То есть каждый элемент nums охватывается ровно одним из диапазонов, 
// и не существует целого числа x такого, 
// что x находится в одном из диапазонов, но не в nums.
// Каждый диапазон[a, b] в списке должен выводиться как:
// "a->b", если a != b
// «а», если а == б
// 228

nums = [0, 2, 3, 4, 6, 8, 9]
nums = [0, 1, 2, 4, 5, 7]

var summaryRanges = function (nums) {
    const answer = [];
    for (let i = 0; i < nums.length; i++) {
        let ahead = i;
        let end = ahead;
        while (nums[i + 1] - nums[i] === 1) {
            i++
            end = i;
        }
        (ahead === end) ? answer.push(nums[ahead].toString()) : answer.push(nums[ahead].toString() + '->' + nums[end].toString())
    }

    return answer
};

console.log(summaryRanges(nums))










// const answer = [];
// for (let i = 0; i < nums.length; i++) {

//     let ahead = i;
//     let end = ahead;
//     while (nums[i + 1] - nums[i] === 1) {
//         i++
//         end = i;
//     }
//     if (ahead === end) {
//         answer.push(nums[ahead].toString())
//     } else {
//         answer.push(nums[ahead].toString() + '->' + nums[end].toString())
//     }
//     console.log(ahead + ' - ' + end)
// }

// return answer