// Дана двоичная матрица размера m x n, найдите индексированную 0 позицию строки, 
// которая содержит максимальное количество единиц, и количество единиц в этой строке.
// Если имеется несколько строк с максимальным количеством единиц, следует выбрать строку с наименьшим номером строки.
// Возвращает массив, содержащий индекс строки и количество единиц в ней.
// 2643

let mat = [[0, 0, 0], [0, 1, 1], [1, 1, 1], [1, 0, 0], [1, 1, 1]];
//mat = [[0]]

function rowAndMaximumOnes(mat) {
    let result = [];
    let maxOnes = 0;
    for (let row = 0; row < mat.length; row++) {
        let countNumber = 0;
        for (let col = 0; col < mat[row].length; col++) {
            if (mat[row][col] & 1) countNumber++;
        }
        if (maxOnes < countNumber) {
            maxOnes = countNumber;
            result = [row, maxOnes];
            //result.pop()
            //result.push([row, maxOnes])
        }

    }
    console.log(result)
    if (maxOnes === 0) return [0, 0];
    return result;
};
console.log(rowAndMaximumOnes(mat));