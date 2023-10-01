// Учитывая целое число rowIndex, вернуть rowIndexth(с индексом 0) строку треугольника Паскаля.
// В треугольнике Паскаля каждое число является суммой двух чисел непосредственно над ним, как показано:
// 119
let rowIndex = 5
function getRow(rowIndex) {
    // const dp = Array.from({ length: rowIndex }, () => Array(rowIndex).fill(1));

    // console.log(dp)

    //const row = new Array(rowIndex + 1).fill(0);
    const row = Array.from({ length: rowIndex + 1 }).fill(0);
    //console.log(dp)
    row[0] = 1;
    console.log(row)

    for (let i = 1; i <= rowIndex; i++) {
        console.log(row)
        for (let j = i; j >= 1; j--) {
            row[j] += row[j - 1];

        }
    }

    return row;

};


console.log(getRow(rowIndex));