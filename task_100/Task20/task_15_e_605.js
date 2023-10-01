// У вас есть длинная клумба, в которой часть участков засажена, 
// а часть нет.Однако цветы нельзя сажать на соседних участках.
// Дан целочисленный массив клумбы, содержащий 0 и 1, 
// где 0 означает пусто, а 1 означает непусто, и целое число n, 
// вернуть true, если n новых цветов можно посадить на клумбе, 
// не нарушая правило отсутствия соседних цветов, и false 
// в противном случае.
// 605


//let flowerbed = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0];
//let flowerbed = [1, 0, 0, 0, 0, 0, 1];
let flowerbed = [0];
flowerbed = [0, 1, 0];
let n = 1;
//let flowerbed = [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0];
//let flowerbed = [0, 0, 1, 0, 0, 0, 0, 1];
//let flowerbed = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
//let n = 2;






function canPlaceFlowers(flowerbed, n) {
    const size = flowerbed.length;
    let first = 0;
    let firstHalfCount = 0;
    let second = 0;
    let secondHalfCount = 0;
    //if (size === 0) return false;
    if (flowerbed[0] === 0 && size === 1) return true;

    second = Math.trunc(flowerbed.length / 2);


    console.log(second + ' - second');
    console.log(size + ' - size');
    while (((second < size) && flowerbed[second] !== 1)) {
        second++;
        console.log(second + ' - second');
        console.log(size + ' - size');
    }






    const sizeFirstHalf = second;
    const beginSecondHalf = sizeFirstHalf + 1;
    console.log(second + ' - second');
    console.log(first + ' - first');
    console.log(sizeFirstHalf + ' - sizeFirstHalf');


    while (true) {
        if (first <= sizeFirstHalf) {
            console.log(first + ' - first');
            if (first < sizeFirstHalf && flowerbed[first] == 0) {
                console.log(first + ' - first +++++');
                firstHalfCount++;
                if (first === 0) firstHalfCount++;
                if (first === size - 1) firstHalfCount++;
                console.log(firstHalfCount + ' - firstHalfCount');
            } else {
                console.log(first + ' - first -------');
                n -= Math.trunc((firstHalfCount - 1) / 2);
                console.log(n + ' - n l');
                if (n <= 0) return true;
                firstHalfCount = 0;
            }
        }
        if (second <= size) {
            if (second >= beginSecondHalf && flowerbed[second] === 0) {
                secondHalfCount++;
                if (second === size - 1) secondHalfCount++;
            } else {
                n -= Math.trunc((secondHalfCount - 1) / 2);
                if (n <= 0) return true;
                secondHalfCount = 0;
            }
        }
        if ((first === sizeFirstHalf) && (second === size)) { return false }
        if (first < sizeFirstHalf) first++;
        if (second < size) second++;
    }
}




// function canPlaceFlowers(flowerbed, n) {

//     let count = 0;
//     let result = 0;

//     count = flowerbed.reduce((countOfFlowers, currentBed, index) => {
//                 console.log(index + ' - index');
//         console.log(currentBed + ' - currentBed');
//         console.log(count + ' - count');
//         if ((index === 0) && (currentBed === 0)) { count++; }
//         if ((index === 1) && (currentBed === 0) && (count === 1)) { countOfFlowers++; count = 1; }
//         if ((currentBed === 0) && (index >= 1)) { count++; } else { count = 0; }
//         if (count === 3) { countOfFlowers++; count = 1; }
//         if ((index === flowerbed.length - 1) && (count === 2 || count === 3)) { countOfFlowers++; count = 0}
//         console.log(countOfFlowers + ' - countOfFlowers');
//                 console.log(count + ' - count');
//         console.log(n + ' - n');
//         //(n <= countOfFlowers) ? result = true : result = false; 
//         //return n <= countOfFlowers ? true : false;
//         return countOfFlowers;


//     }, 0)
//     //return n <= countOfFlowers ? true : false;
//     return n <= count ? true : false;
// }
console.log(canPlaceFlowers(flowerbed, n))
























// function canPlaceFlowers(flowerbed, n) {

//     let leftZero = 1;
//     let i = 0;
//     while (i < flowerbed.length) {
//         if (flowerbed[i] == 0) {
//             if (i == n && leftZero == n + 1) {
//                 return true;
//             }
//             if (i > flowerbed.length - n && leftZero == n + 1) {
//                 return true;
//             }
//             leftZero++;
//         } else {
//             if (leftZero > n + 2) {
//                 return true;
//             }
//             leftZero = 1;
//         }
//         i++;
//     }
//     return false;

// };







// function canPlaceFlowers(flowerbed, n) {

//     let left = 0;
//     let i = 0;
//     //let j = flowerbed.length - 1;
//     //let right = 0;
//     while (true) {

//         (flowerbed[i] === 0) ? left++ : left = 0;

//         console.log(left + 'left');

//         if ((flowerbed[0] === 0) && (i === 0) && (left >= n + 1)) {
//             console.log('условие - 1');
//             return true;
//         }

//         if (left >= n + 2) {
//             console.log('условие  2');
//             return true;
//         }


//         // (flowerbed[j] === 0) ? right++ : right = 0;

//         // console.log(right + 'right');

//         // if ((flowerbed[j] === 0) && (j === flowerbed.length - right) && (right >= n + 1)) {
//         //     console.log('условие - 2 - 1');
//         //     return true;
//         // }

//         // if (right >= n + 2) {
//         //     console.log('условие  2- 2');
//         //     return true;
//         // }
//         i++;

//         //       if (i > n + 2) j--;
//         console.log(i + ' - i');
//         //       console.log(j + ' - j');
//         console.log(flowerbed.length + ' - flowerbed.length');
//         if (i === flowerbed.length) {

//             console.log('+++++++++++++++++++');
//             return false;
//         }
//     }

// };











// function canPlaceFlowers(flowerbed, n) {

//     let left = 0;
//     let i = 0;
//     let j = flowerbed.length - 1;
//     let right = 0;
//     while (true) {

//         (flowerbed[i] === 0) ? left++ : left = 0;

//         if ((flowerbed[0] === 0) && (i === 0) && (left >= n + 1)) return true;

//         if (left >= n + 2) return true;

//         (flowerbed[j] === 0) ? right++ : right = 0;

//         if ((flowerbed[j] === 0) && (j === flowerbed.length - right) && (right >= n + 1)) return true;

//         if (right >= n + 2) return true;

//         i++; j--;

//         if (i >= j) {
//             return false;
//         }
//     }

// };









//function canPlaceFlowers(flowerbed, n) {

//     const size = flowerbed.length;
//     let left = 0;
//     let right = 0;
//     let i = 0;


//     let j = flowerbed.length - 1;

//     while (true) {

//         console.log(i + ' - i');
//         if (i <= size && flowerbed[i] == 0) {
//             console.log(i + ' - i +++++');
//             left++;
//             if (i === 0) left++;
//             if (i == size - 1) left++;
//             console.log(left + ' - left');
//         } else {
//             console.log(i + ' - i -------');
//             n -= Math.trunc((left - 1) / 2);
//             console.log(n + ' - n l');
//             if (n <= 0) return true;
//             left = 0;
//         }






//         if (j >= 0 && flowerbed[j] === 0) {
//             console.log(j + ' - j +++++');
//             right++;
//             if (j == 0) right++;
//             if (j === size - 1) right++;
//             console.log(right + ' - right');
//         } else {
//             console.log(j + ' - j ---------');
//             //  console.log(Math.trunc((right - 1) / 2));
//             n -= Math.trunc((right - 1) / 2);
//             console.log(n + ' - n r');
//             if (n <= 0) return true;
//             right = 0;
//         }

//         //  if (i > (n + 1)) j--;
//         if ((i - 1 === size) || (j + 1 === 0)) {
//             return false;
//         }
//         i++; j--;
//     }

// }










//while (true) {
//     if (i <= size && flowerbed[i] == 0) {
//         left++;
//         if (i === 0) left++;
//         if (i == size - 1) left++;
//     } else {
//         n -= Math.trunc((left - 1) / 2);
//         if (n <= 0) return true;
//         left = 0;
//     }

//     if (j >= 0 && flowerbed[j] === 0) {
//         right++;
//         if (j == 0) right++;
//         if (j === size - 1) right++;
//     } else {
//         n -= Math.trunc((right - 1) / 2);
//         if (n <= 0) return true;
//         right = 0;
//     }
//     if ((i - 1 === size) || (j + 1 === 0)) {
//         return false;
//     }
//     i++; j--;
// }




// function canPlaceFlowers(flowerbed, n) {

//     let count = 0;
//     let zero = 0;

//     flowerbed.reduce((countOfFlowers, currentBed, index) => {
//         console.log(index + ' - index');
//         console.log(currentBed + ' - currentBed');
//         if ((index === 0) && (currentBed === 0)) { countOfFlowers++; }


//         if ((currentBed === 0) && (index >= 1)) { count++ } else { count = 0 }

//         if (count === 3) { countOfFlowers++; count = 0; }

//         if ((index === flowerbed.length - 1) && (currentBed === 0)) { countOfFlowers++; }
//         //n -= countOfFlowers;
//         console.log(count + ' - count');
//         console.log(n + ' - n');
//         if (n <= countOfFlowers) {
//             console.log(' ++++++++++++ ');
//             zero = true;
//         } else { zero = false }
//         console.log(countOfFlowers + ' - countOfFlowers');
//         return countOfFlowers;
//     }, 0)
//     console.log(zero + ' - zero');
//     return zero;

// }









// //let flowerbed = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0];
// let flowerbed = [1, 0, 0, 0, 1];
// let n = 2;
// //let flowerbed = [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0];
// //let flowerbed = [0, 0, 1, 0, 0, 0, 0, 1];
// //let flowerbed = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
// //let n = 2;






// function canPlaceFlowers(flowerbed, n) {

//     const size = flowerbed.length;
//     let i = 0;
//     let first = 0;
//     let firstHalfCount = 0;
//     let second = 0;
//     let secondHalfCount = 0;

//     second = Math.trunc(flowerbed.length / 2);
//     console.log(second + ' - second');

//     while (flowerbed[second] !== 1) {
//         second++;
//     }

//     const sizeFirstHalf = second;
//     const beginSecondHalf = sizeFirstHalf + 1;
//     console.log(second + ' - second');
//     console.log(first + ' - first');
//     console.log(sizeFirstHalf + ' - sizeFirstHalf');

//     // let j = flowerbed.length - 1;

//     while (true) {
//         if (first <= sizeFirstHalf) {
//             console.log(first + ' - first');
//             if (first < sizeFirstHalf && flowerbed[first] == 0) {
//                 console.log(first + ' - first +++++');
//                 firstHalfCount++;
//                 if (first === 0) firstHalfCount++;
//                 console.log(firstHalfCount + ' - firstHalfCount');
//             } else {
//                 console.log(first + ' - first -------');
//                 n -= Math.trunc((firstHalfCount - 1) / 2);
//                 console.log(n + ' - n l');
//                 if (n <= 0) return true;
//                 firstHalfCount = 0;
//             }
//         }

//         if (second <= size) {
//             if (second >= beginSecondHalf && flowerbed[second] === 0) {
//                 console.log(second + ' - second +++++');
//                 secondHalfCount++;
//                 //if (second == 0) right++;
//                 if (second === size - 1) secondHalfCount++;
//                 console.log(secondHalfCount + ' - secondHalfCount');
//             } else {
//                 console.log(second + ' - second ---------');
//                 //  console.log(Math.trunc((right - 1) / 2));
//                 n -= Math.trunc((secondHalfCount - 1) / 2);
//                 console.log(n + ' - n r');
//                 if (n <= 0) return true;
//                 secondHalfCount = 0;
//             }
//         }
//         console.log(first + ' - first - ' + second + ' - second ');
//         if ((first === sizeFirstHalf) && (second === size)) { return false }
//         //(first === sizeFirstHalf)  &&
//         if (first < sizeFirstHalf) first++;
//         if (second < size) second++;

//     }

// }

// console.log(canPlaceFlowers(flowerbed, n))