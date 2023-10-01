// Вам дан массив строковых продуктов и строковое слово поиска.
// Разработайте систему, которая предлагает не более трех названий продуктов 
// после ввода каждого символа поискового слова.
// Предлагаемые продукты должны иметь общий префикс с searchWord.
// Если имеется более трех продуктов с общим префиксом, 
// возвращаются три лексикографически минимальных продукта.
// Возвращает список списков предлагаемых продуктов после ввода каждого символа searchWord.
// 1268


products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
searchWord = "mouse";

var suggestedProducts = function (products, searchWord) {

    products.sort()
    let answer = [];
    let left = 0;
    let right = products.length - 1;
    for (let i = 0; i < searchWord.length; i++) {
        let char = searchWord.charAt(i);
        const result = [];
        while ((products[left].charAt(i) || 0) < char) left++
        while ((products[right].charAt(i) || 0) > char) right--
        for (let j = 0; j < 3 && left + j <= right; j++)
            result.push(products[left + j])
        answer.push(result)
    }
    return answer


};


console.log(suggestedProducts(products, searchWord))










// var suggestedProducts = function (P, S) {
//     P.sort()
//     let answer = [], left = 0, right = P.length - 1
//     for (let i = 0; i < S.length; i++) {
//         let c = S.charAt(i), result = []
//         while (P[left]?.charAt(i) < c) left++
//         while (P[right]?.charAt(i) > c) right--
//         for (let j = 0; j < 3 && left + j <= right; j++)
//             result.push(P[left + j])
//         answer.push(result)
//     }
//     return answer
// };
















// products.sort();
// const answer = [];

// for (let i = 0; i < searchWord.length; i++) {
//     const char = searchWord.charAt(i);
//     const temp = [];

//     for (let j = 0; j < products.length; j++) {
//         if (products[j].startsWith(searchWord.slice(0, i + 1))) {
//             temp.push(products[j]);
//         }

//         if (temp.length === 3) {
//             break;
//         }
//     }

//     answer.push(temp);
// }

// return answer;


