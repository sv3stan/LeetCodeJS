/**
Если даны два массива строк words1 и words2, верните количество строк, которые встречаются ровно по одному разу в каждом из этих двух массивов.
 */

function countWords(words1: string[], words2: string[]): number {
    const hash1 = new Map<string, number>();
    const hash2 = new Map<string, number>();
    let count = 0;
    for (let i = 0; i < words1.length; i++)
        hash1.set(words1[i], (hash1.get(words1[i]) || 0) + 1);
    for (let i = 0; i < words2.length; i++)
        hash2.set(words2[i], (hash2.get(words2[i]) || 0) + 1);
    console.log(hash1);
    console.log(hash2);

    for (const [key, value] of hash1.entries()) {
        if (value == 1) {
            console.log(key, value);
            if (hash2.get[key] === 1) {
                count++;
            }
        }
    }

    return count;
}
