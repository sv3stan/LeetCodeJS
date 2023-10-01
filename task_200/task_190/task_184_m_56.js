// Учитывая массив интервалов, где интервалы[i] = [starti, endi], объедините все перекрывающиеся интервалы 
// и верните массив непересекающихся интервалов, которые охватывают все интервалы во входных данных.
// 56

intervals = [[1, 3], [2, 7], [5, 10], [15, 18], [12, 13]];
intervals = [[1, 4], [5, 6]]
//intervals = [[1, 4]]
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const mergedInterval = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = mergedInterval[mergedInterval.length - 1];

        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            mergedInterval.push(currentInterval);
        }
    }

    return mergedInterval;
};

console.log(merge(intervals));






















//var merge = function (intervals) {
//     intervals.sort((a, b) => a[0] - b[0])
//     const answer = [];
//     let aheadPoint = 0;
//     let endPoint = 0;
//     console.log(intervals)


//     for (let i = 1; i < intervals.length; i++) {
//         console.log('------------------------')
//         console.log(i + ' - i - ')

//         if (intervals[i - 1][1] >= intervals[i][0]) {
//             console.log(intervals[i - 1][1] + ' - intervals[i - 1][1] - ' + intervals[i][0] + ' - intervals[i][0] -          if')
//             //isMerge = true;
//             aheadPoint = intervals[i - 1][0];
//             end = [i][1]
//             // i++;

//             while (intervals[i - 1][1] > intervals[i][0]) {
//                 console.log(' I++')
//                 endPoint = Math.max(endPoint, intervals[i][1])
//                 i++;
//             }
//             answer.push([aheadPoint, endPoint]);
//             aheadPoint = 0;
//             endPoint = 0;
//             i--;

//         } else {
//             //isMerge = false;
//             //answer.push([aheadPoint, intervals[i][1]])

//             console.log(intervals[i - 1][1] + ' - intervals[i - 1][1] - ' + intervals[i][0] + ' - intervals[i][0] -           else')
//             answer.push([intervals[i][0], intervals[i][1]])
//             //  answer.push([intervals[i][0], intervals[i][1]])

//         }

//         console.log(answer)
//     }

//     return answer;
// };













  // intervals.sort((a, b) => a[0] - b[0])
    // const answer = [];
    // let aheadPoint = 0;
    // let endPoint = 0;
    // console.log(intervals)


    // for (let i = 1; i < intervals.length; i++) {
    //     if (intervals[i - 1][1] >= intervals[i][0]) {
    //         aheadPoint = intervals[i - 1][0];
    //         end = [i][1]


    //         while (intervals[i - 1][1] >= intervals[i][0]) {
    //             endPoint = Math.max(endPoint, intervals[i][1])

    //             i++;
    //             if (i === intervals.length) {
    //                 console.log('+++++++++')
    //                 console.log(aheadPoint + ' - aheadPoint - ' + endPoint + ' - endPoint -')
    //                 answer.push([aheadPoint, endPoint]);
    //                 return answer;
    //             }
    //             //console.log(i + ' - i -')

    //         }


    //         answer.push([aheadPoint, endPoint]);
    //         aheadPoint = 0;
    //         endPoint = 0;
    //         i--;

    //     } else {

    //         answer.push([intervals[i][0], intervals[i][1]])

    //     }
    // }

    // return answer;