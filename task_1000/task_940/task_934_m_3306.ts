/**
Вам дается струнное слово и неотрицательное целое число k. Верните общее количество подстроков слов, которые содержат каждый гласный ('a', 'e', ​​'i', 'o' и 'u') хотя бы один раз и точно k согласные.
 */

function countOfSubstrings(word: string, k: number): number {
    function quantityK(k: number) {
        let res = 0;
        const hash = new Map([
            ['a', 0],
            ['e', 0],
            ['i', 0],
            ['o', 0],
            ['u', 0],
        ]);
        for (let L = 0, R = 0, consonants = 0; R < word.length; R++) {
            const elementR = hash.get(word[R]);
            elementR !== undefined
                ? hash.set(word[R], elementR + 1)
                : (consonants += 1);
            while (
                Array.from(hash.values()).every(c => c > 0) &&
                consonants >= k
            ) {
                res += word.length - R;
                const elementL = hash.get(word[L]);
                elementL !== undefined
                    ? hash.set(word[L], elementL - 1)
                    : consonants--;
                L++;
            }
        }
        return res;
    }
    return quantityK(k) - quantityK(k + 1);
}
