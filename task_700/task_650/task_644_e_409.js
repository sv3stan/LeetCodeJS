/*
Учитывая строку s, состоящую из строчных или прописных букв, верните длину самой длинной строки - палиндрома  который можно построить из этих букв.
Буквы чувствительны к регистру, например, «Аа» не считается палиндромом.
*/

let s =
    'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth';

let longestPalindrome = function (s) {
    let len = 0;
    let hasOnes = false;
    const hash = new Map();

    for (let i = 0; i < s.length; i++) {
        hash.set(s[i], (hash.get(s[i]) ?? 0) + 1);
    }
    for (let count of hash.values()) {
        if (count % 2 === 0) {
            len += count;
        } else {
            len += count - 1;
            hasOnes = true;
        }
    }

    return len + Number(hasOnes);
};

console.log(longestPalindrome(s));
