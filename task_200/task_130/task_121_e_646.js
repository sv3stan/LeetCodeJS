// Вам дан массив из n пар пар, где пары[i] = [lefti, righti] и lefti < righti.
// Пара p2 = [c, d] следует за парой p1 = [a, b], если b < c.Цепочка пар может быть сформирована таким образом.
// Возвращает длину самой длинной цепочки, которую можно составить.
// Вам не нужно использовать все заданные интервалы.Вы можете выбирать пары в любом порядке.
// 646

pairs = [[1, 2], [7, 8], [4, 5]];
pairs = [[1, 2], [2, 3], [3, 4]]


function findLongestChain(pairs) {

    pairs.sort((a, b) => a[1] - b[1])
    const dp = Array.from({ length: pairs.length }).fill(1);

    for (let i = 1; i < pairs.length; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }

    return Math.max(...dp)
}

console.log(findLongestChain(pairs));





















    // let count = 0;
    // let maxCount = 0;
    // let beginIndex = 0;
    // let countOnes = 0;
    // console.log(n);
    // for (let i = 0; i < n; i++) {
    //     console.log('----------');
    //     if (!(a[i] & 1)) {
    //         count++;
    //         console.log(count + ' - count');
    //         if (maxCount < count) {
    //             maxCount = count;
    //             beginIndex = i - count + 1;
    //         }
    //     } else {
    //         count = 0;
    //         countOnes++;
    //     }
    // }

    // // const endIndex = maxCount + beginIndex;
    // // for (let i = beginIndex; i <= endIndex; i++) {
    // //     a[i] = 1;
    // // }

    // console.log(maxCount + ' - maxCount');
    // console.log(beginIndex + '- beginIndex');
    // //console.log(a);
    // return countOnes + maxCount