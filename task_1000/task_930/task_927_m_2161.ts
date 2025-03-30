/**
Вам дают 0-индексированные целочисленные мастерные и целочисленные стержни. Переставить числа, так что следующие условия были удовлетворены: Каждый элемент меньше, чем Pivot, появляется перед каждым элементом, превышающим Pivot. Каждый элемент, равный pivot, появляется между элементами меньше и больше, чем Pivot. Относительный порядок элементов меньше, чем pivot, и элементы, превышающие pivot, сохраняется. Более формально рассмотрим каждый PI, PJ, где PI является новой позицией элемента ITH, а PJ - новая позиция JTH Element. Если я <j и оба элемента меньше (или больше), чем pivot, то Pi <pj. Вернуть числа после перестройки.
 */

function pivotArray(nums: number[], pivot: number): number[] {
    const less: number[] = [];
    const equal: number[] = [];
    const greater: number[] = [];
    for (const num of nums) {
        if (num < pivot) {
            less.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            greater.push(num);
        }
    }
    return [...less, ...equal, ...greater];
}
