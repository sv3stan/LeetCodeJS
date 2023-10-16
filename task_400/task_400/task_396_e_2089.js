// Вам дан целочисленный массив с нулевым индексом и целевой элемент target.
// Целевой индекс — это индекс i такой, что nums[i] == target.
// Возвращает список целевых индексов чисел после сортировки чисел в неубывающем порядке.
// Если целевых индексов нет, верните пустой список.
// Возвращаемый список необходимо отсортировать по возрастанию.

// 2089
nums = [0, 0, 1, 1, 2, 1, 5, 2, 1, 4, 4, 3, 3, 6, 6, 6, 3], target = 2
//nums = [1, 2, 5, 2, 3]
// nums = [1, 2, 5, 2, 3], target = 5
// nums = [1, 2, 5, 2, 3], target = 3

nums = [33, 22, 49, 7, 2, 6, 13, 70, 59, 19, 21, 45, 98, 93, 32, 23, 89, 47, 17, 27, 11, 22, 93, 77, 52, 34, 75, 96, 48, 53, 44, 76, 76, 7, 48, 25, 68, 70, 48, 32, 89, 21, 12, 81, 65, 36, 92, 21, 94, 84, 77, 43, 4, 88, 78, 82, 94, 20, 52, 20, 16, 84, 83, 100, 84, 97, 49, 10, 12, 94, 88, 24, 1, 31, 81, 95, 92, 51, 36, 84, 48, 34, 85, 8, 3, 47, 46, 18, 84, 43, 42, 35, 97, 60, 93, 14, 92, 47, 44, 72]
target = 84
// nums = [1, 2, 5, 2, 3], target = 4

var targetIndices = function (nums, target) {

    const sorted = nums.sort((a, b) => a - b);
    const answer = [];
    let index = -1;
    let left = 0;
    let right = sorted.length - 1

    while (left <= right) {
        const middle = left + ((right - left) >> 1);
        if (nums[middle] === target) {
            index = middle;
            console.log('+++++++++')
            break; // Найден целевой элемент.
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    if (index === -1) return answer;
    console.log(index)
    answer.push(index)
    let point = 1;
    left = index - 1;
    right = index + 1;
    while (sorted[left] === target || sorted[right] === target) {
        if (sorted[left] === target) answer.unshift(left);
        if (sorted[right] === target) answer.push(right);
        console.log(answer)

        point++;
        left = index - point;
        right = index + point

    }
    // while (sorted[indexLeft] === target || sorted[indexRight] === target) {
    //     if (sorted[indexLeft] === target) answer.unshift(indexLeft);
    //     if (sorted[indexRight] === target) answer.push(indexRight);
    //     console.log(answer)
    //     indexLeft--;
    //     indexRight++;
    // }

    return answer;

    //return answer.sort((a, b) => a - b);
};



console.log(targetIndices(nums, target))


















// const sorted = nums.sort((a, b) => a - b);
// const answer = [];
// let index = 0;
// console.log(sorted)
// let left = 0;
// let right = sorted.length - 1

// while (left <= right) {
//     const middle = left + Math.floor((right - left) >> 1);
//     //const middle = left + Math.floor((right - left) / 2);
//     //console.log(nums[middle] + " - " + middle)

//     if (nums[middle] === target) {
//         index = middle;
//         console.log(index + ' index ')
//         break; // Найден целевой элемент.
//     } else if (nums[middle] < target) {
//         left = middle + 1;
//     } else {
//         right = middle - 1;
//     }
// }

// //answer.push[left]
// console.log(index + ' --- ' + sorted[index]);
// let indexLeft = index - 1;
// let indexRight = index;
// while (sorted[indexLeft] === target || sorted[indexRight] === target) {

//     if (sorted[indexLeft] === target) {
//         answer.push(indexLeft);

//     }
//     if (sorted[indexRight] === target) {
//         answer.push(indexRight);

//     }

//     indexLeft--;
//     indexRight++;
// }


// console.log(index);
// console.log(answer)