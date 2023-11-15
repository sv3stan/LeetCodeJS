// Учитывая строку s с индексом 0, переставьте s, 
// чтобы получить новую строку t такую, что:
// Все согласные остаются на своих прежних местах.Более формально, 
// если существует индекс i с 0 <= i < s.length такой, 
// что s[i] является согласной, то t[i] = s[i].
// Гласные должны быть отсортированы в порядке неубывания их значений ASCII.
// Более формально, для пар индексов i, j с 0 <= i < j < s.length, таких, 
// что s[i] и s[j] являются гласными, тогда t[i] не должно иметь более 
// высокое значение ASCII, чем t[дж].
// Верните полученную строку.
// Гласные: «а», «е», «я», «о» и «у», и они могут записываться как в нижнем, 
// так и в верхнем регистре.К согласным относятся все буквы, не являющиеся гласными.
// 2785

s = "lEetcOde";

var sortVowels = function (s) {

    // const vovels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    // const hash = s.split('').filter((item) => vovels.includes(item)).map((letter) => letter.charCodeAt(0));
    // hash.sort((a, b) => a - b)
    // let t = [];
    // // console.log(hash)
    // for (let i = s.length - 1; i >= 0; i--) {

    //     if (vovels.includes(s[i])) {
    //         t[i] = String.fromCharCode(hash.pop());
    //     } else {
    //         t[i] = s[i]
    //     }
    //     // console.log(t)
    // }


    // // console.log(hash)
    // // console.log(t)
    // return t.join('');


    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    // const sortedVowels = vowels.sort();

    let t = s.split('');
    let vowelsInS = t.filter((char) => vowels.includes(char)).sort();

    vowelsInS.forEach((vowel) => {
        t[t.indexOf(vowel)] = vowelsInS.shift();
    });

    return t.join('');



};


console.log(sortVowels(s))