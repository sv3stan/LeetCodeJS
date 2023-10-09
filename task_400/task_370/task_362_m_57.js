// Вам дан массив непересекающихся интервалов, где интервалы[i] = [starti, endi] 
// представляют начало и конец i - го интервала, а интервалы сортируются в порядке 
// возрастания по starti.Вам также дан интервал newInterval = [start, end], 
// который представляет начало и конец другого интервала.
// Вставьте newInterval в интервалы таким образом, чтобы интервалы по - прежнему 
// сортировались в порядке возрастания по начальным значениям, а интервалы 
// по - прежнему не имели перекрывающихся интервалов(при необходимости 
// объединяйте перекрывающиеся интервалы).
// 57


intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
newInterval = [4, 8];
//intervals = [[1, 3], [6, 9]], newInterval = [2, 5]
intervals = [1, 5], newInterval = [2, 3]

var insert = function (intervals, newInterval) {



    const answer = [];
    let [aHead, mEnd] = newInterval;
    let isFlag = false;

    for (let [start, end] of intervals) {
        if (end < aHead) {
            answer.push([start, end]);
        } else if (start > mEnd) {
            if (!isFlag) answer.push([aHead, mEnd]);
            isFlag = true;
            answer.push([start, end]);
        } else {
            aHead = Math.min(start, aHead);
            mEnd = Math.max(end, mEnd);
        }
    }

    if (!isFlag) answer.push([aHead, mEnd]);
    return answer;






    // if (intervals.length === 0) {
    //     return [newInterval];
    // }
    // const answer = [];
    // for (let i = 0; i < intervals.length; i++) {
    //     let ahead = 0;
    //     let end = 0;
    //     if (intervals[i][0] <= newInterval[0] && newInterval[0] <= intervals[i][1]) {
    //         ahead = intervals[i][0];
    //         while (newInterval[1] >= intervals[i][1] && newInterval[1] >= intervals[i + 1][0]) {
    //             i++;
    //         }
    //         end = Math.max(intervals[i][1], newInterval[1]);
    //         answer.push([ahead, end])
    //         i++;
    //     }
    //     answer.push(intervals[i])
    // }
    // return answer;

};


console.log(insert(intervals, newInterval))
















//     if (intervals.length === 0) {
//         const ahead = newInterval[0];
//         const end = newInterval[1];
//         const answer = [];
//         answer.push([ahead, end])
//         return [newInterval[0], newInterval[1]];
//     }
//     const answer = [];
//     for (let i = 0; i < intervals.length; i++) {
//         let ahead = 0;
//         let end = 0;
//         if (intervals[i][0] <= newInterval[0] && newInterval[0] <= intervals[i][1]) {
//             ahead = intervals[i][0];
//             while (newInterval[1] >= intervals[i][1] && newInterval[1] >= intervals[i + 1][0]) {
//                 i++;
//             }
//             end = Math.max(intervals[i][1], newInterval[1]);
//             answer.push([ahead, end])
//             i++;
//         }
//         answer.push(intervals[i])
//     }
//   //  console.log(answer)
//     return answer;












// const answer = [];
// console.log(intervals.length)

// for (let i = 0; i < intervals.length; i++) {
//     let ahead = 0;
//     let end = 0;
//     console.log('---------------')
//     console.log(intervals[i][0] + ' - intervals[i][0] -' + newInterval[0] + ' - newInterval[0] - ');
//     if (intervals[i][1] <= newInterval[0]) {
//         //   answer.push(intervals[i])
//     }
//     if (intervals[i][0] <= newInterval[0] && newInterval[0] <= intervals[i][1]) {
//         console.log('+++++++++++++++++')
//         //answer.push([intervals[i][0]])
//         ahead = intervals[i][0];
//         //intervals.splice(i, 1)
//         console.log(intervals)
//         // i++;
//         console.log(newInterval[1] + ' - newInterval[1] - ' + intervals[i][1] + ' - intervals[i][1] -');
//         while (newInterval[1] >= intervals[i][1]) {
//             console.log('///////////////')


//             console.log(i)
//             //   intervals.splice(i, 1)
//             i++;
//             console.log(intervals)
//         }
//         end = intervals[i][1];
//         answer.push([ahead, end])
//         i++;
//     }

//     answer.push(intervals[i])
//     console.log(i + ' - i - ')

// }


// console.log(answer)