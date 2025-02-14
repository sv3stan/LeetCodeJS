/** 
Учитывая массивные числа различных положительных целых чисел, верните количество кортежей (A, B, C, D), что A * B = C * D, где A, B, C и D являются элементами NUM, и A! B! = C! = D.
*/

function tupleSameProduct(nums: number[]): number {
    const len = nums.length;
    const hash = new Map<number, number>();
    let count = 0;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            const mult = nums[i] * nums[j];
            count += (hash.get(mult) ?? 0) * 8;
            hash.set(mult, (hash.get(mult) ?? 0) + 1);
        }
    }

    return count;
}
