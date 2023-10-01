// Учитывая строку s, переставьте символы s так, чтобы любые два соседних символа не были одинаковыми.
// Верните любую возможную перестановку s или верните "", если это невозможно.
// 767

s = "aab"
//s = "todrnphcamnomskfrhe"
//s = 'abaabccdabaefaaaa';
//s = "aaab"
// s = "abbabbaaab"
//s = "ogccckcwmbmxtsbmozli"
var reorganizeString = function (s) {
    const charQuantity = new Map();

    for (const ch of s) {
        charQuantity.set(ch, (charQuantity.get(ch) || 0) + 1);
    }

    const sorted = [...charQuantity.keys()].sort((a, b) => charQuantity.get(b) - charQuantity.get(a));

    if (charQuantity.get(sorted[0]) > Math.floor((s.length + 1) / 2)) {
        return "";
    }

    const result = new Array(s.length);
    let pointer = 0;

    for (const ch of sorted) {
        while (charQuantity.get(ch) > 0) {
            result[pointer] = ch;
            charQuantity.set(ch, charQuantity.get(ch) - 1);
            pointer += 2;
            if (pointer >= s.length) {
                pointer = 1;
            }
        }
    }

    return result.join("");

};

console.log(reorganizeString(s))











// var reorganizeString = function (s) {
//     let result = '';
//     const queue = new Map();
//     let otherCount = 0;
//     for (const ch of s) {
//         if (queue.has(ch)) {
//             queue.set(ch, queue.get(ch) + 1)
//         } else {
//             queue.set(ch, 1)
//         }
//     }
//     //console.log(queue)
//     const sortedQueue = [...queue.keys()].sort((a, b) => queue.get(b) - queue.get(a));
//     //if (queue.get(sortedQueue[0]) > (s.length / 2)) return result = '';
//     console.log(queue)
//     //    console.log(sortedQueue.length)
//     for (let i = 1; i < sortedQueue.length; i++) {
//         while (queue.get(sortedQueue[i]) !== 0) {
//             result += sortedQueue[i]
//             queue.set(sortedQueue[i], queue.get(sortedQueue[i]) - 1)
//             otherCount++;
//         }
//     }

//     if (otherCount + 1 < queue.get(sortedQueue[0])) return result = '';
//     console.log(result)
//     console.log(sortedQueue)
//     const initialCount = queue.get(sortedQueue[0]);
//     for (let i = 0; i < initialCount * 2; i += 2) {
//         result = result.substring(0, i) + sortedQueue[0] + result.substring(i);
//         queue.set(sortedQueue[0], queue.get(sortedQueue[0]) - 1)
//     }


//     console.log(queue)
//     console.log(result)

//     return result;
// };





















    // let result = '';
    // let firstCount = 0;
    // let lastCount = 0;
    // const queue = new Map();
    // for (const ch of s) {
    //     if (queue.has(ch)) {
    //         queue.set(ch, queue.get(ch) + 1)
    //     } else {
    //         queue.set(ch, 1)
    //     }
    // }

    // const sortedQueue = [...queue.keys()].sort((a, b) => queue.get(b) - queue.get(a));
    // const quantityFirst = queue.get(sortedQueue[0]);
    // while (sortedQueue.length !== 0) {
    //     const firstChar = sortedQueue[0];
    //     const lastChar = sortedQueue[sortedQueue.length - 1]
    //     if (queue.get(firstChar) !== 0) {
    //         result += firstChar;
    //         queue.set(firstChar, queue.get(firstChar) - 1);
    //         firstCount++;
    //     }
    //     if (queue.get(firstChar) === 0) {
    //         sortedQueue.shift();
    //     }

    //     if (queue.get(lastChar) > 0) {
    //         result += lastChar;
    //         queue.set(lastChar, queue.get(lastChar) - 1);
    //         lastCount++;
    //     }
    //     if (queue.get(lastChar) === 0) {
    //         sortedQueue.pop();
    //     }
    //     console.log(firstCount + ' - firstCount - ' + lastCount + ' - lastCount')
    //     console.log(result)
    //     console.log(queue)
    //     console.log(sortedQueue)
    // }


    // if (queue.get(sortedQueue[0]) !== 0 && (quantityFirst - firstCount > 0)) return result = '';
    // //if (queue.get(sortedQueue[0]) > 1) return result = '';

    // //result += sortedQueue[0];










    // // for (let i = 1; i < sortedQueue.length; i++) {
    // //     while (queue.get(sortedQueue[i]) !== 0) {
    // //         result += sortedQueue[i]
    // //         queue.set(sortedQueue[i], queue.get(sortedQueue[i]) - 1)
    // //         otherCount++;
    // //     }
    // // }

    // // if (otherCount + 1 < queue.get(sortedQueue[0])) return result = '';
    // // console.log(result)
    // // console.log(sortedQueue)
    // // const initialCount = queue.get(sortedQueue[0]);
    // // for (let i = 0; i < initialCount * 2; i += 2) {
    // //     result = result.substring(0, i) + sortedQueue[0] + result.substring(i);
    // //     queue.set(sortedQueue[0], queue.get(sortedQueue[0]) - 1)
    // // }


    // console.log(queue)
    // console.log(result)

    // return result;