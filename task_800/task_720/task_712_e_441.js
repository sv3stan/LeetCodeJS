/**
У вас есть n монет и вы хотите построить из них лестницу. Лестница состоит из k рядов, где в i-м ряду находится ровно i монет. Последний ряд лестницы может быть неполным.
Учитывая целое число n, верните количество полных рядов лестницы, которую вы построите.
 */
let n = 10;
let arrangeCoins = function (n) {
    // let i = 1;
    // let cnt = 0;

    // while (n >= i) {
    //     cnt++;
    //     n -= i;
    //     i++;
    // }

    // return cnt;

    let step = 0;
    let steps = 0;

    while (n - steps > step) {
        step++;
        steps += step;

        console.log('🚀 ~ arrangeCoins ~ step:', step);
        console.log('🚀 ~ arrangeCoins ~ steps:', steps);
    }

    return step;
};

console.log(arrangeCoins(n)); // Output: 3
