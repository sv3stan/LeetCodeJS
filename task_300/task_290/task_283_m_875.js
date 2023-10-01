// Коко любит есть бананы. Имеется n piles бананов, в i-й стопке бананов piles[i].
// Охранники ушли и вернутся через час. Коко может решить, что ее скорость поедания бананов в час равна k.
// Каждый час она выбирает какую - то стопку бананов и съедает k бананов из этой стопки.
// Если в куче меньше k бананов, она съедает их все и больше не будет есть бананов в течение этого часа.
// Коко любит есть медленно, но все равно хочет съесть все бананы до того, как вернутся охранники.
// Верните минимальное целое число k, при котором она сможет съесть все бананы за h часов.
// 875

piles = [3, 6, 7, 11], h = 8 //4

//piles = [30, 11, 23, 4, 20], h = 5 //30

//piles = [30, 11, 23, 4, 20], h = 6 //23


var minEatingSpeed = function (piles, h) {

    function search(k) {
        let count = 0;
        for (let i = 0; i < piles.length; i++) {
            count += Math.ceil(piles[i] / k);
        }
        return count;
    }

    let leftPoint = 1;
    let rightPoint = Math.max(...piles);
    let answer = 0;

    while (leftPoint <= rightPoint) {
        const middle = Math.floor((leftPoint + rightPoint) / 2);
        const key = search(middle);

        if (key <= h) {
            answer = middle;
            rightPoint = middle - 1;
        } else {
            leftPoint = middle + 1;
        }
    }

    return answer;




};


console.log(minEatingSpeed(piles, h))








// function search(k) {
//     let count = 0;
//     for (let i = 0; i < piles.length; i++) {
//         // console.log(piles[i])
//         console.log(k + ' - k - ')
//         count += Math.floor(piles[i] / k);
//         // console.log(count + ' - count - ')
//         if (k % piles[i]) count++
//         // console.log(count + ' - count - ')
//     }
//     return count;
// }

// let key = 0;
// const left = Math.min(...piles);
// const right = Math.max(...piles);
// let leftPoint = left;
// let rightPoint = right;
// let answer = 0;
// while (key !== h) {
//     const middle = ((rightPoint - leftPoint) >> 1) + leftPoint;
//     console.log(middle + ' -  middle - ')
//     key = search(middle);
//     console.log(key + ' - key - ')

//     if (key > h) {
//         leftPoint += middle + 1;
//         console.log(leftPoint + ' -  left - ')
//     } else {
//         rightPoint -= middle - 1;
//         console.log(rightPoint + ' -  right - ')
//     }

//     answer = middle;

// }

// if (answer > right) return right;

// console.log(answer + ' - answer - ')

// while (key === h) {
//     key = search(answer);
//     answer--;
// }
// return answer;










// for (let i = 0; i < piles.length; i++) {
//     console.log('++++++++++++++++')
//     const temp = Math.floor(k / piles[i]);
//     console.log(temp + ' - temp - ')
//     count += Math.floor(k / piles[i]);

//     console.log(remainder + ' - remainder - ')
//     if (k % piles[i]) count++

//     //
//     //count++;

//     console.log(count + ' - count - ')
// }

