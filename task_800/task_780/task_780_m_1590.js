/**
Учитывая массив целых положительных чисел nums, удалите наименьший подмассив (возможно, пустой) такой, что сумма остальных элементов делится на p. Не допускается удаление всего массива.
Верните длину наименьшего подмассива, который вам нужно удалить, или -1, если это невозможно.
Подмассив определяется как непрерывный блок элементов массива.
 */

let nums = [1, 2, 3];
let p = 7;

let minSubarray = function (nums, p) {
    const sum = nums.reduce((a, b) => a + b, 0);
    const rem = sum % p;

    // Если остаток 0, массив уже делится на p
    if (rem === 0) return 0;

    const hash = new Map();
    hash.set(0, -1); // Для корректной работы с начальной суммой
    let currSum = 0;
    let res = Infinity;

    for (let i = 0; i < nums.length; i++) {
        currSum = (currSum + nums[i]) % p;

        // Ищем, был ли уже такой остаток, который позволит добиться кратности
        const target = (currSum - rem + p) % p;

        if (hash.has(target)) {
            res = Math.min(res, i - hash.get(target));
        }

        // Записываем текущий остаток и индекс
        hash.set(currSum, i);
    }

    // Возвращаем -1, если подходящего подмассива нет
    return res === Infinity || res === nums.length ? -1 : res;
};

console.log(minSubarray(nums, p));
