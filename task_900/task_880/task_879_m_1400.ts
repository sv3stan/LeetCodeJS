/*
 Учитывая строку s и целое число k, верните true, если вы можете использовать все символы в s для создания k строк-палиндромов, или false в противном случае.
 */

function canConstruct(s: string, k: number): boolean {
    if (k > s.length) return false;

    const quantity: number[] = Array(26).fill(0);
    let countOdd = 0;
    for (let i = 0; i < s.length; i++) {
        quantity[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
        if (quantity[i] % 2) countOdd++;
    }
    // console.log(quantity)
    // console.log(countOdd)
    return countOdd > k ? false : true;
}
