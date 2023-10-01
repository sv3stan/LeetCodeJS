// Учитывая целое число numRows, вернуть первые numRows треугольника Паскаля.
// В треугольнике Паскаля каждое число является суммой двух чисел непосредственно над ним, как показано:
// 118

numRows = 7
//nums = [1, 3, 3, 1]
function generate(numRows) {
    let result = [[1]];

    for (let count = 1; count < numRows; count++) {
        const prevRow = result[count - 1];
        const currenRow = [1];

        for (const [index, value] of prevRow.entries()) {
            if (index !== prevRow.length - 1) {
                currenRow.push(value + prevRow[index + 1]);
            }
        }

        currenRow.push(1);
        result.push(currenRow);
    }

    return result;


};

console.log(generate(numRows))





























// function generate(numRows) {
//     let result = [[1]];

//     for (let count = 1; count < numRows; count++) {
//         const prevRow = result[count - 1];
//         const currenRow = [1];

//         for (const [index, value] of prevRow.entries()) {
//             if (index !== prevRow.length - 1) {
//                 currenRow.push(value + prevRow[index + 1]);
//             }
//         }

//         currenRow.push(1);
//         result.push(currenRow);
//     }

//     return result;


// };
