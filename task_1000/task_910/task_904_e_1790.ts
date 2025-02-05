/**
Вам дают две строки S1 и S2 равной длины. Строковой обмен - это операция, в которой вы выбираете два индекса в строке (не обязательно отличаются) и обменяют символы в этих индексах. Верните True, если можно сделать обе строки равными, выполнив максимум одного обмена строкой на одном из строк. В противном случае вернуть ложь.
 */

function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false;

    if (s1 === s2) return true;

    const diff: number[] = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
        }
    }

    if (diff.length !== 2) return false;

    const [i, j] = diff;
    return s1[i] === s2[j] && s1[j] === s2[i];
}
