// Учитывая две строки s1 и s2, верните true, 
// если s2 содержит перестановку s1, или false в противном случае.
// Другими словами, верните true, если одна из перестановок s1 
// является подстрокой s2.
// 567

s1 = "ab", s2 = "eidbaooo"
//s1 = "ab", s2 = "eidboaoo"
s1 = "ab", s2 = "ab"

var checkInclusion = function (s1, s2) {

    const l1 = s1.length;
    const l2 = s2.length;
    if (l1 > l2) return false;

    let count = Array.from({ length: 26 }).fill(0);
    for (let i = 0; i < l1; i++) {
        count[s1.charCodeAt(i) - 97]++;
        count[s2.charCodeAt(i) - 97]--;
    }
    if (!count.some(item => item !== 0)) return true;

    for (let i = l1; i < l2; i++) {
        count[s2.charCodeAt(i) - 97]--;
        count[s2.charCodeAt(i - l1) - 97]++;
        if (!count.some(item => item !== 0)) return true;
    }
    return false;




};


console.log(checkInclusion(s1, s2))