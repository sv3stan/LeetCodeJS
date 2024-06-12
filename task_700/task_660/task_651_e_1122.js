/**
 Учитывая два массива arr1 и arr2, элементы arr2 различны, и все элементы в arr2 также находятся в arr1.
Отсортируйте элементы arr1 так, чтобы относительный порядок элементов в arr1 был таким же, как и в arr2. Элементы, которых нет в arr2, следует размещать в конце arr1 в порядке возрастания.
 */

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];

let relativeSortArray = function (arr1, arr2) {
    const hash = new Set(arr2);
    const result = [];

    for (let item of hash) {
        let index = arr1.indexOf(item);
        while (index !== -1) {
            result.push(item);
            arr1.splice(index, 1);
            index = arr1.indexOf(item);
        }
    }

    result.push(...arr1.sort((a, b) => a - b));
    return result;
};

console.log(relativeSortArray(arr1, arr2));
