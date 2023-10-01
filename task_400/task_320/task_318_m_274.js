// Дан массив целых чисел цитирования, где citations[i] — количество цитирований, 
// полученных исследователем за его i - ю статью, и возвращает индекс Хирша исследователя.
// Согласно определению индекса Хирша в Википедии: 
// Индекс Хирша определяется как максимальное значение h, при котором данный 
// исследователь опубликовал как минимум h статей, 
// каждая из которых цитировалась как минимум h раз.
// 274

citations = [3, 0, 6, 1, 5]


var hIndex = function (citations) {


    citations.sort((a, b) => a - b)
    let answer = 0;
    let length = citations.length;
    for (let i = 0; i < length; i++) {

        const mmm = Math.min(citations[i], length - i);
        console.log(mmm)
        answer = Math.max(answer, Math.min(citations[i], length - i))
    }
    return answer;

};


console.log(hIndex(citations))
