// Учитывая массив символов, сожмите его, используя следующий алгоритм:
// Начните с пустой строки s.Для каждой группы последовательно повторяющихся символов в символах:
// Если длина группы равна 1, добавьте символ к s.
// В противном случае добавьте символ, за которым следует длина группы.
// Сжатую строку s не следует возвращать отдельно, а хранить во входном массиве символов chars.
// Обратите внимание, что длина группы, равная 10 или более, будет разбита на несколько символов в виде символов.
// После завершения изменения входного массива верните новую длину массива.
// Вы должны написать алгоритм, который использует только постоянное дополнительное пространство.
// Как узнать, находитесь ли вы в конце последовательной группы символов ?
// 443


chars = ["a", "a", "b", "b", "c", "c", "c"]
chars = ["o", "a", "a", "b", "b", "b", "c", "c", "c", "c", "d", "d", "d", "d", "d", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "f", "o", "a", "a",]
//chars = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]
//chars = ["a", "a", "b", "b", "c", "c", "c"]
var compress = function (chars) {

    console.log(chars.length)

    let count = 1;
    let answer = [];


    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
        } else {
            answer += chars[i];
            if (count > 1) {
                answer += count.toString();
            }
            count = 1;
        }
        console.log(answer)
    }


    //console.log(char + ' - char - ' + count + ' - count - ' + point + ' - point - ')
    //console.log(chars)
    //console.log(answer)
    //console.log('+++++++++++++++++++++++++++')
    //count = 0;
    chars.length = 0;
    chars = answer;
    console.log(chars)
    return chars.length;
};


console.log(compress(chars))










// let point = 0;
// let count = 0;

// while (point < chars.length) {

//     const char = chars[point]

//     while (char === chars[point]) {
//         count++;
//         point++;
//     }
//     if (count === 2) {
//         chars.splice(point - 1, 1)
//         chars.splice(point - 1, 0, count.toString())
//     }
//     if (count > 2 && count < 10) {

//         chars.splice(point - count + 1, count - 1)
//         chars.splice(point - count + 1, 0, count.toString())
//         point = point - count + 2;
//     }

//     if (count > 9) {
//         chars.splice(point - count + 1, count - 1)
//         let digits = count.toString()
//         chars.splice(point - count + 1, 0, ...digits)
//         point = point - count + digits.length;

//     }

//     console.log(char + ' - char - ' + count + ' - count - ' + point + ' - point - ')
//     console.log(chars)
//     console.log('+++++++++++++++++++++++++++')
//     count = 0;
// }
// return chars.length;