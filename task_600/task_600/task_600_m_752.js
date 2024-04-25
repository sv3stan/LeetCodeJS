/*
Перед вами замок с четырьмя круглыми колесиками. Каждое колесо имеет 10 слотов: «0», «1», «2», «3», «4», «5», «6», «7», «8», «9». Колеса могут свободно вращаться и вращаться: например, мы можем превратить «9» в «0» или «0» в «9». Каждый ход состоит из поворота одного колеса на одну прорезь.

Первоначально блокировка начинается с «0000», строки, представляющей состояние четырех колес.

Вам предоставляется список тупиков, а это значит, что если на замке отображается какой-либо из этих кодов, колеса замка перестанут вращаться, и вы не сможете его открыть.

Учитывая цель, представляющую значение колес, которые откроют замок, верните минимальное общее количество поворотов, необходимое для открытия замка, или -1, если это невозможно.
*/

// 752;

(deadends = ['0201', '0101', '0102', '1212', '2002']), (target = '0202');

var openLock = function (deadends, target) {
    const nextDigit = {
        0: '1',
        1: '2',
        2: '3',
        3: '4',
        4: '5',
        5: '6',
        6: '7',
        7: '8',
        8: '9',
        9: '0',
    };
    const prevDigit = {
        0: '9',
        1: '0',
        2: '1',
        3: '2',
        4: '3',
        5: '4',
        6: '5',
        7: '6',
        8: '7',
        9: '8',
    };

    const visitComb = new Set(deadends);
    const pendingComb = [];

    let count = 0;

    if (visitComb.has('0000')) {
        return -1;
    }

    pendingComb.push('0000');
    visitComb.add('0000');

    while (pendingComb.length > 0) {
        const currLevelNodesCount = pendingComb.length;
        for (let i = 0; i < currLevelNodesCount; i++) {
            const currentComb = pendingComb.shift();

            if (currentComb === target) {
                return count;
            }

            for (let wheel = 0; wheel < 4; wheel++) {
                let newComb = currentComb.split('');
                newComb[wheel] = nextDigit[newComb[wheel]];
                newComb = newComb.join('');

                if (!visitComb.has(newComb)) {
                    pendingComb.push(newComb);
                    visitComb.add(newComb);
                }

                newComb = currentComb.split('');
                newComb[wheel] = prevDigit[newComb[wheel]];
                newComb = newComb.join('');

                if (!visitComb.has(newComb)) {
                    pendingComb.push(newComb);
                    visitComb.add(newComb);
                }
            }
        }

        count++;
    }
    return -1;
};

console.log(openLock(deadends, target));

// // Map the next slot digit for each current slot digit.
// const nextDigit = {
//     0: '1',
//     1: '2',
//     2: '3',
//     3: '4',
//     4: '5',
//     5: '6',
//     6: '7',
//     7: '8',
//     8: '9',
//     9: '0',
// };
// // Map the previous slot digit for each current slot digit.
// const prevDigit = {
//     0: '9',
//     1: '0',
//     2: '1',
//     3: '2',
//     4: '3',
//     5: '4',
//     6: '5',
//     7: '6',
//     8: '7',
//     9: '8',
// };

// // Set to store visited and dead-end combinations.
// const visitComb = new Set(deadends);
// // Queue to store combinations generated after each turn.
// const pendingComb = [];

// // Count the number of wheel count made.
// let count = 0;

// // If the starting combination is also a dead-end,
// // then we can't move from the starting combination.
// if (visitComb.has('0000')) {
//     return -1;
// }

// // Start with the initial combination '0000'.
// pendingComb.push('0000');
// visitComb.add('0000');

// while (pendingComb.length > 0) {
//     // Explore all the combinations of the current level.
//     const currLevelNodesCount = pendingComb.length;
//     for (let i = 0; i < currLevelNodesCount; i++) {
//         // Get the current combination from the front of the queue.
//         const currentComb = pendingComb.shift();

//         // If the current combination matches the target,
//         // return the number of count/level.
//         if (currentComb === target) {
//             return count;
//         }

//         // Explore all possible new combinations by turning each wheel in both directions.
//         for (let wheel = 0; wheel < 4; wheel++) {
//             // Generate the new combination by turning the wheel to the next digit.
//             let newComb = currentComb.split('');
//             newComb[wheel] = nextDigit[newComb[wheel]];
//             newComb = newComb.join('');
//             console.log(newComb);
//             // If the new combination is not a dead-end and was never visited,
//             // add it to the queue and mark it as visited.
//             if (!visitComb.has(newComb)) {
//                 pendingComb.push(newComb);
//                 visitComb.add(newComb);
//             }

//             // Generate the new combination by turning the wheel to the previous digit.
//             newComb = currentComb.split('');
//             newComb[wheel] = prevDigit[newComb[wheel]];
//             newComb = newComb.join('');
//             // If the new combination is not a dead-end and is never visited,
//             // add it to the queue and mark it as visited.
//             if (!visitComb.has(newComb)) {
//                 pendingComb.push(newComb);
//                 visitComb.add(newComb);
//             }
//         }
//     }
//     // We will visit the next-level combinations.
//     count++;
// }
// // We never reached the target combination.
// return -1;
