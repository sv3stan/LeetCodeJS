/*
Уродливое число — это целое положительное число, простые множители которого ограничены значениями 2, 3 и 5.
Учитывая целое число n, верните n-ное уродливое число.
*/

let n = 10;

let nthUglyNumber = function (n) {
    const uglyNum = [1];
    let i2 = 0,
        i3 = 0,
        i5 = 0;

    while (uglyNum.length < n) {
        const nextUgly = Math.min(
            uglyNum[i2] * 2,
            uglyNum[i3] * 3,
            uglyNum[i5] * 5,
        );
        uglyNum.push(nextUgly);

        if (nextUgly === uglyNum[i2] * 2) i2++;
        if (nextUgly === uglyNum[i3] * 3) i3++;
        if (nextUgly === uglyNum[i5] * 5) i5++;
    }

    return uglyNum[n - 1];
};

console.log(nthUglyNumber(n));
