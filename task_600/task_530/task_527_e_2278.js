// Учитывая строку s и букву символа, верните процент символов в s, 
// равных букве, округленный до ближайшего целого процента.

// 2278


s = "foobar", letter = "o"

var percentageLetter = function (s, letter) {

    const length = s.length;
    let count = 0;

    for (let i = 0; i < length; i++) {
        if (s[i] === letter) {
            count++;
        }
    }

    return Math.floor((count / length) * 100);

};

console.log(percentageLetter(s, letter))