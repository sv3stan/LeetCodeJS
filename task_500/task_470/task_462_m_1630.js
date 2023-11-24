// Вам дан массив из n целых чисел nums и два массива по m целых чисел каждый, 
// l и r, представляющие m запросов диапазона, где i - й запрос представляет 
// собой диапазон[l[i], r[i]].Все массивы имеют нулевой индекс.
// Возвращает список логических элементов ответа, где ответ[i] равен true, 
// если подмассив nums[l[i]], nums[l[i] + 1], ... , nums[r[i]] можно переставить 
// для формирования арифметической последовательности и false в противном случае.

// 1630

nums = [4, 6, 5, 9, 3, 7], l = [0, 0, 2], r = [2, 3, 5];
nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10], l = [0, 1, 6, 4, 8, 7], r = [4, 4, 9, 7, 9, 10]

var checkArithmeticSubarrays = function (nums, l, r) {

    const answer = [];

    for (let i = 0; i < l.length; i++) {


        const arr = nums.slice(l[i], r[i] + 1);
        arr.sort((a, b) => a - b);

        let progression = true;
        for (let j = arr.length - 1; j > 1; j--) {
            if ((arr[j] - arr[j - 1]) !== (arr[j - 1] - arr[j - 2])) {
                progression = false;
                break
            };
        }
        (progression) ? answer.push(true) : answer.push(false);
    }
    return answer;

};


console.log(checkArithmeticSubarrays(nums, l, r))