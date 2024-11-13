/**
You are given a 0-indexed integer array nums of length n. You can perform the following operation as many times as you want: Pick an index i that you haven’t picked before, and pick a prime p strictly less than nums[i], then subtract p from nums[i]. Return true if you can make nums a strictly increasing array using the above operation and false otherwise. A strictly increasing array is an array whose each element is strictly greater than its preceding element.
Вам дан целочисленный массив чисел с нулевым индексом длины n. Вы можете выполнить следующую операцию столько раз, сколько захотите: Выберите индекс i, который вы еще не выбрали, и выберите простое число p, строго меньшее, чем nums[i], затем вычтите p из nums[i]. Возвращайте true, если вы можете сделать nums строго возрастающим массивом, используя описанную выше операцию, и false в противном случае. Строго возрастающий массив — это массив, каждый элемент которого строго больше предыдущего элемента.
 */

let nums = [4, 9, 6, 10];

function primeSubOperation(nums: number[]): boolean {
    const fill = (arr: boolean[], value: boolean): void => {
        arr.fill(value);
    };
    const maxItem = Math.max(...nums);

    const sieve: boolean[] = new Array(maxItem + 1);
    fill(sieve, true);
    sieve[1] = false;
    for (let i = 2; i <= Math.sqrt(maxItem + 1); i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= maxItem; j += i) {
                sieve[j] = false;
            }
        }
    }

    let currentVal = 1;
    let i = 0;
    while (i < nums.length) {
        const dif = nums[i] - currentVal;

        if (dif < 0) {
            return false;
        }

        if (sieve[dif] === true || dif === 0) {
            i++;
            currentVal++;
        } else {
            currentVal++;
        }
    }
    return true;
}

console.log(primeSubOperation(nums));
