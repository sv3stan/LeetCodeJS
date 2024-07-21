/**
Вам дана строка s и два целых числа x и y. Вы можете выполнять два типа операций любое количество раз.

Удалите подстроку «ab» и получите x очков.
Например, при удалении «ab» из «cabxbae» оно становится «cxbae».
Удалите подстроку «ba» и получите y очков.
Например, при удалении «ба» из «cabxbae» оно становится «cabxe».
Возвращает максимальное количество очков, которое вы можете получить после применения вышеуказанных операций к s.
 */

let s = 'aabbaaxybbaabb';
let x = 5;
let y = 4;

let maximumGain = function (s, x, y) {
    let max = 0;
    let subStrX = 'ab';
    let subStrY = 'ba';

    if (x < y) {
        [subStrX, subStrY] = [subStrY, subStrX];
        [x, y] = [y, x];
    }

    const process = (s, subStr, value) => {
        let stack = [];
        let gain = 0;
        for (let char of s) {
            if (
                stack.length &&
                stack[stack.length - 1] === subStr[0] &&
                char === subStr[1]
            ) {
                stack.pop();
                gain += value;
            } else {
                stack.push(char);
            }
        }
        return { remainingString: stack.join(''), gain };
    };

    let res1 = process(s, subStrX, x);
    max += res1.gain;

    let res2 = process(res1.remainingString, subStrY, y);
    max += res2.gain;

    return max;
};

console.log(maximumGain(s, x, y));
