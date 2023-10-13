// Учитывая строку s, верните строку после замены 
// каждой заглавной буквы той же строчной буквой.
// 709


s = "LOVELY";
//s = "Hello"
var toLowerCase = function (s) {

    const letters = s.split('');


    for (let i = 0; i < letters.length; i++) {

        const AsciiCode = s[i].charCodeAt();

        if (65 <= AsciiCode && AsciiCode <= 90) letters[i] = String.fromCharCode(AsciiCode + 32)

    }

    console.log(letters)
    // const ch = s[0].charCodeAt()
    // console.log(ch)
    s = letters.join(' ')
    return s;
};


console.log(toLowerCase(s))