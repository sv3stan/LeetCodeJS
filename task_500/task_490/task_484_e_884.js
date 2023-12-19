// Предложение представляет собой строку слов, разделенных одним пробелом, 
// где каждое слово состоит только из строчных букв.
// Слово считается необычным, если оно встречается ровно один раз в 
// одном из предложений и не встречается в другом предложении.
// Учитывая два предложения s1 и s2, верните список всех необычных слов.
// Вы можете вернуть ответ в любом порядке.

// 884

s1 = "this apple is sweet", s2 = "this apple is sour";

var uncommonFromSentences = function (s1, s2) {

    const quantityFirst = {};
    const quantitySecond = {};

    const updateFrequency = (sentence, freq) => {
        const words = sentence.split(' ');
        for (const word of words) {
            freq[word] = (freq[word] || 0) + 1;
        }
    };


    updateFrequency(s1, quantityFirst);
    updateFrequency(s2, quantitySecond);

    const answer = [];

    for (const word in quantityFirst) {
        if (quantityFirst[word] === 1 && !quantitySecond[word]) {
            answer.push(word);
        }
    }

    for (const word in quantitySecond) {
        if (quantitySecond[word] === 1 && !quantityFirst[word]) {
            answer.push(word);
        }
    }

    return answer;

};

console.log(uncommonFromSentences(s1, s2))