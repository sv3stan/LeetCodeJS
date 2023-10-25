// Вам дан целочисленный массив arr. Вы можете выбрать набор 
// целых чисел и удалить все вхождения этих целых чисел в массив.
// Возвращайте минимальный размер набора, 
// чтобы была удалена хотя бы половина целых чисел массива.
// 1338


arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7];
arr = [7, 7, 7, 7, 7, 7]
arr = [1, 9]
var minSetSize = function (arr) {

    const hash = new Map();
    const nums = [];
    //const answer = [];
    for (const item of arr) hash.set(item, (hash.get(item) || 0) + 1);

    for (const [key, value] of hash.entries()) nums.push([key, value]);

    nums.sort((a, b) => b[1] - a[1]);
    console.log(nums)


    let sum = 0;
    let answer = 0;
    console.log(arr.length >> 1)
    while (sum < (arr.length >> 1)) {
        sum += nums[answer][1];

        //answer.push(nums[i][0])
        answer++;
        console.log(sum)
    }

    //   console.log(nums)
    return answer;


};

console.log(minSetSize(arr));