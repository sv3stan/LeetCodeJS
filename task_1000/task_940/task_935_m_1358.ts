/**
Учитывая строку, состоящую только из символов A, B и C. Верните количество подстроков, содержащих как минимум одно вхождение всех этих символов A, B и C.
 */

function numberOfSubstrings(s: string): number {
    const n = s.length;
    let countA = 0;
    let countB = 0;
    let countC = 0;
    let left = 0;
    let result = 0;

    for (let right = 0; right < n; right++) {
        if (s[right] === 'a') countA++;
        else if (s[right] === 'b') countB++;
        else if (s[right] === 'c') countC++;

        while (countA > 0 && countB > 0 && countC > 0) {
            result += n - right;
            if (s[left] === 'a') countA--;
            else if (s[left] === 'b') countB--;
            else if (s[left] === 'c') countC--;
            left++;
        }
    }
    return result;
}
