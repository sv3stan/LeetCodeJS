// На круговом маршруте имеется n заправочных станций, 
// где количество газа на i - й заправке равно gas[i].
// У вас есть машина с неограниченным бензобаком, 
// и поездка от i - й станции до следующей(i + 1) - й 
// станции стоит стоимость[i] бензина.Вы начинаете 
// путешествие с пустым баком на одной из заправок.
// Учитывая два целочисленных массива gas и Cost, 
// верните индекс начальной заправочной станции, 
// если вы можете объехать круг один раз по часовой стрелке, 
// в противном случае верните - 1. Если решение существует, 
// то оно гарантированно единственное.
// 134

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];

//gas = [2, 3, 4], cost = [3, 4, 3]
gas = [4, 5, 3, 1, 4], cost = [5, 4, 3, 4, 2]

var canCompleteCircuit = function (gas, cost) {
    let max = 0;
    let maxIndex = 0;
    const n = gas.length;
    let m = 0;
    const copy = JSON.parse(JSON.stringify(gas));

    function search(maxIndex) {
        let count = 0;
        let roundСompleted = 0;
        for (let i = 0; i < cost.length; i++) {
            if (count + gas[maxIndex] - cost[maxIndex] >= 0) {
                count += gas[maxIndex] - cost[maxIndex];
                roundСompleted++;

            } else {
                return false;
            }
            maxIndex = (maxIndex + 1) % cost.length;
        }
        if (roundСompleted === n) return true;
    }
    while (m < n) {
        for (let i = maxIndex; i < copy.length; i++) {
            if (copy[i] > max) {
                max = copy[i];
                maxIndex = i;
            }
        }
        copy[maxIndex] = 0;
        if (search(maxIndex)) return maxIndex;
        max = 0;
        maxIndex = 0;
        m++;
    }
    return -1;
};


console.log(canCompleteCircuit(gas, cost))


// let max = 0;
// let maxIndex = 0;
// const n = gas.length;
// let m = 0;
// const copy = JSON.parse(JSON.stringify(gas));

// function search(maxIndex) {
//     let count = 0;
//     let roundСompleted = 0;
//     for (let i = 0; i < cost.length; i++) {
//         if (count + gas[maxIndex] - cost[maxIndex] > 0) {
//             count += gas[maxIndex] - cost[maxIndex];
//             roundСompleted++;
//             if (roundСompleted + 1 === n) return true;
//         } else {
//             return false;
//         }
//         maxIndex = (maxIndex + 1) % cost.length;
//     }
// }

// while (m < n) {
//     for (let i = maxIndex; i < copy.length; i++) {
//         if (copy[i] > max) {
//             max = copy[i];
//             maxIndex = i;
//         }
//     }
//     copy[maxIndex] = 0;
//     if (search(maxIndex)) return maxIndex;
//     max = 0;
//     maxIndex = 0;
//     m++;
// }
// return -1;










// let max = 0;
// let maxIndex = 0;
// const n = gas.length;
// let m = 0;
// const copy = JSON.parse(JSON.stringify(gas));

// function search(maxIndex) {
//     let count = 0;
//     let roundСompleted = 0;

//     for (let i = 0; i < cost.length; i++) {
//         console.log('++++++++++');
//         console.log(maxIndex + ' - maxindex');
//         if (count + gas[maxIndex] - cost[maxIndex] >= 0) {
//             console.log(count + ' - count - ' + gas[maxIndex] + ' - gas[maxIndex] - ' + cost[maxIndex] + ' - cost[maxIndex] - ' + gas[(maxIndex + 1) % cost.length])
//             count += gas[maxIndex] - cost[maxIndex]; // + gas[(maxIndex + 1) % cost.length];
//             console.log(count + ' - count')
//             console.log(gas[(maxIndex + 1) % cost.length] - 1);
//             roundСompleted++;

//         } else {
//             return false;
//         }
//         maxIndex = (maxIndex + 1) % cost.length;
//     }

//     console.log(roundСompleted + ' - roundСompleted')
//     if (roundСompleted === n) {
//         console.log('aaaaaaaaaaaaaaaaaaaaaaa')
//         return true;
//     }

// }

// while (m < n) {
//     console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
//     console.log(copy)
//     for (let i = maxIndex; i < copy.length; i++) {
//         if (copy[i] > max) {
//             max = copy[i];
//             maxIndex = i;
//         }

//     }

//     copy[maxIndex] = 0;
//     if (search(maxIndex)) return maxIndex;
//     max = 0;
//     maxIndex = 0;
//     m++;
// }




// return -1;