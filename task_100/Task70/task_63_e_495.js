// Наш герой Тимо атакует врага Эша ядовитыми атаками! Когда Тимо атакует Эш,
// Эш получает отравление ровно на несколько секунд.Более формально атака в секунду t будет означать,
// что Эш отравлена ​​в течение инклюзивного временного интервала[t, t + продолжительность - 1].
// Если Тимо снова атакует до окончания действия яда, таймер для него сбрасывается,
// и действие яда прекращается через несколько секунд после новой атаки.
// Вам дан неубывающий целочисленный массив timeSeries, где timeSeries[i] означает,
// что Тимо атакует Эш во второй timeSeries[i], и целочисленная продолжительность.
// Возвращает общее количество секунд, в течение которых Эш была отравлена.
//495

let timeSeries = [1, 4];
//let timeSeries = [1, 3, 6, 9, 16];
let duration = 2;

function findPoisonedDuration(timeSeries, duration) {
    let ahead = 0;
    let all = 0;
    for (let behind = 0; behind < timeSeries.length; behind += 2) {
        ahead += 1;
        if (behind >= timeSeries.length - 1) {
            all += duration;
            return all;
        }
        if (timeSeries[behind + 1] - timeSeries[behind] >= duration) {
            all += duration;
        } else {
            all += timeSeries[behind + 1] - timeSeries[behind];
        }

        if (ahead >= timeSeries.length - 1) {
            all += duration;
            return all;
        }
        if (timeSeries[ahead + 1] - timeSeries[ahead] >= duration) {
            all += duration;
        } else {
            all += timeSeries[ahead + 1] - timeSeries[ahead];
        }
        ahead += 1;
    }
}

console.log(findPoisonedDuration(timeSeries, duration));














//function findPoisonedDuration(timeSeries, duration) {
//     let ahead = 0;
//     let all = 0;
//     console.log(timeSeries.length + ' -- timeSeries.length');

//     for (let behind = 0; behind < timeSeries.length; behind += 2) {
//         ahead += 1;
//         console.log(behind + ' - behind '); console.log(ahead + ' - ahead ');

//         if (behind >= timeSeries.length - 1) {
//             all += duration;
//             console.log(all + ' 5555 ');
//             return all;
//         }

//         if (timeSeries[behind + 1] - timeSeries[behind] >= duration) {
//             all += duration;
//             console.log(all + ' 111 ');
//         } else {
//             all += timeSeries[behind + 1] - timeSeries[behind];
//             console.log(all + ' 222 ');
//         }

//         if (ahead >= timeSeries.length - 1) {
//             all += duration;
//             console.log(all + ' 5555 ');
//             return all;
//         }
//         if (timeSeries[ahead + 1] - timeSeries[ahead] >= duration) {
//             all += duration;
//             console.log(all + '+++ 333 ');
//         } else {
//             all += timeSeries[ahead + 1] - timeSeries[ahead];
//             console.log(all + ' +++ 444');
//         }



//         ahead += 1;
//     }
//     console.log(all);
// }