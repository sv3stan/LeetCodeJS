/**
Вам даны два целочисленных двумерных массива, items1 и items2, представляющие два набора элементов. Каждый элемент массива имеет следующие свойства:
items[i] = [valuei, Weighti] где valuei представляет значение, а Weighti представляет вес i-го элемента.
Значение каждого предмета в items уникально.
Возвращает двумерный целочисленный массив ret, где ret[i] = [valuei, Weighti], где Weighti — это сумма весов всех элементов со значением valuei.
Примечание: ret следует возвращать в порядке возрастания значения.
 */

function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    items1.sort((a, b) => a[0] - b[0]);
    items2.sort((a, b) => a[0] - b[0]);

    const hash1 = new Map();
    const hash2 = new Map();
    const ret: number[][] = [];
    const maxValue = Math.max(
        items1[items1.length - 1][0],
        items2[items2.length - 1][0],
    );

    for (let i = 0, j = 0; i < items1.length || j < items2.length; i++, j++) {
        if (i < items1.length) {
            hash1.set(items1[i][0], items1[i][1]);
        }
        if (j < items2.length) {
            hash2.set(items2[j][0], items2[j][1]);
        }
    }

    for (let i: number = 1; i <= maxValue; i++) {
        if (hash1.has(i) || hash2.has(i)) {
            ret.push([i, (hash1.get(i) || 0) + (hash2.get(i) || 0)]);
        }
    }

    return ret;
}
